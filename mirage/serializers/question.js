import { JSONAPISerializer } from 'ember-cli-mirage';
import Ember from 'ember';
import moment from 'moment';
const { get, copy, isPresent, set} = Ember;

export default JSONAPISerializer.extend({
  include: ['answers'],
  serialize(response, request) {
    let jsonResponse = JSONAPISerializer.prototype.serialize.apply(this, arguments);
    let sortParam = request.queryParams.sort;
    let questions = copy(jsonResponse.data);

    if (isPresent(sortParam)) {
      let isDescending = sortParam.charAt(0) === '-';
      let sortBy = (isDescending) ? sortParam.slice(1) : sortParam;

      questions.sort((q1, q2) => {
        if (sortBy === 'createdAt') {
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

        }
      });
    }

    set(jsonResponse, 'data', questions);
    return jsonResponse;
  }
});
