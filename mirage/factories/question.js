import { Factory, faker } from 'ember-cli-mirage';

let fakeContent = {
  "version": "0.3.1",
  "atoms": [],
  "cards": [
    [
      "code-snippet-card", {
        "codeContent": "import Ember from 'ember';\n\nexport default Ember.Route.extend({\n  beforeModel() {\n    this.replaceWith('rentals');\n  }\n});"
      }
    ]
  ],
  "markups": [],
  "sections": [
    [
      1,
      "p",
      [
        [0, [], 0, "This is a test question."]
      ]
    ],
    [10, 0]
  ]
};

export default Factory.extend({
  subject() { return `${faker.hacker.ingverb()}  ${faker.hacker.adjective()} ${faker.hacker.noun()}`; },
  createdAt() { return faker.date.past(); },
  content: JSON.stringify(fakeContent),

});
