import { JSONAPISerializer } from 'ember-cli-mirage';
import Ember from 'ember';
import moment from 'moment';
const { get, copy, isPresent, set} = Ember;

export default JSONAPISerializer.extend({

  include: ['answers'],

  serialize(response, request) {
    let jsonResponse = JSONAPISerializer.prototype.serialize.apply(this, arguments);
    let page = parseInt(request.queryParams.page);

    if (request.method === 'GET' && isPresent(page)) {
      let sortParam = request.queryParams.sort;
      let questions = copy(jsonResponse.data);
      if (isPresent(sortParam)) {
        let isDescending = sortParam.charAt(0) === '-';
        let sortBy = (isDescending) ? sortParam.slice(1) : sortParam;

        if (sortBy === 'createdAt') {
          //sort by date, descending if 'isDescending', otherwise ascending
          questions.sort((q1, q2) => {
              let d1 = moment(get(q1, 'attributes.created-at'));
              let d2 = moment(get(q2, 'attributes.created-at'));
              if (d1.isSame(d2)) {
                return 0;
              }
              let d1BeforeD2 = d1.isBefore(d2);
              if (isDescending) {
                return d1BeforeD2 ? 1 : -1;
              } else {
                return d1BeforeD2 ? -1 : 1;
              }
          });
        }

        if (sortBy === 'unanswered') {
          //sort by amount of answers (ascending), and then by date (descending)
          questions.sort((q1, q2) => {
            let q1Answers = get(q1, 'relationships.answers.data').length;
            let q2Answers = get(q2, 'relationships.answers.data').length;
            let date1 = moment(get(q1, 'attributes.created-at'));
            let date2 = moment(get(q2, 'attributes.created-at'));

            if (q1Answers === q2Answers) {
              if (date1.isSame(date2)) {
                  return 0;
              }
              let d1BeforeD2 = date1.isBefore(date2);
              return d1BeforeD2 ? 1 : -1;
            }

            let q1HasMoreAnswers = q1Answers > q2Answers;
            return q1HasMoreAnswers ? 1 : -1;
          });
        }
      }

      let limit = parseInt(request.queryParams.limit);
      let totalQuestions = this.registry.schema.questions.all().models.length;
      let totalPages = Math.ceil(totalQuestions / limit);

      //Handle pagintation
      let startAt = (page - 1) * limit;
      let endAt = startAt + limit;
      questions = questions.slice(startAt, endAt);

      let meta = {
        page,
        limit,
        totalPages,
        totalQuestions
      };

      set(jsonResponse, 'data', questions);
      set(jsonResponse, 'meta', meta);
    }

    return jsonResponse;
  }
});
