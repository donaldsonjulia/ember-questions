import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

  subject(i) {
    return `Question ${i}`;
  },

  author: faker.name.firstName(),

  createdAt: faker.date.past(),

  text: "<p>Lorem ipsum dolor sit amet, leo proin id sed metus quis. In sed eu, eros lobortis lacus aliquet tempor justo, arcu suspendisse sem eget sagittis, congue justo. Morbi pede condimentum, nonummy posuere habitasse sit vel, nulla nec aliquet dolor nunc convallis et, sagittis in neque dolor ante ut, in amet purus lacus bibendum scelerisque diam. Id id ut, mauris augue donec, et nullam, nulla quisque sed fusce varius, per pharetra libero mauris et arcu. Eleifend elit sed cras, volutpat ultrices dui vitae enim, nec sed eu vivamus integer ac. Velit libero at. Pretium non pulvinar nulla aliquam ultrices, massa aliquam. Sociis ac lacus ullamcorper commodo, donec aenean tempor.</p><p>Litora a aliquet felis eros non vestibulum, faucibus malesuada vivamus, tempus lacus aenean eu. Praesent sem vivamus gravida, scelerisque sodales pede. Sit eius tellus vestibulum mi, consectetuer phasellus. Justo eget ut hac ac molestie phasellus, natoque ut, ornare orci ut sit risus metus, mauris fusce sit nunc.</p><pre><code class=\"lang-js\">// app/helpers/display-text.js\n\nimport Ember from 'ember';\n\nexport function displayText(text) {\n&nbsp; return Ember.String.htmlSafe(`${text}`);\n}\n\nexport default Ember.Helper.helper(displayText);\n\n</code></pre>",

  answers: [],

});
