export default {
  "answers": {
    "-KkEiv8RhYeu3RlfTchD": {
      "author": "Julia",
      "createdAt": "2017-05-16T05:29:38.189Z",
      "question": "-Kjp2GlyLdc-elD_-jpi",
      "text": "Test answer test answer test answer"
    },



    "-KkSq10_e5xTzdgh9dYE": {
      "author": "Julia",
      "createdAt": "2017-05-18T23:15:22.392Z",
      "question": "-KkSpzGeeqJAROQtp47U",
      "text": "A test answer."
    },
    "-Kki21Po0OCKuHr9DIZS": {
      "author": "Julia",
      "createdAt": "2017-05-22T02:46:07.333Z",
      "question": "-KkSpzGeeqJAROQtp47U",
      "text": "<p>Test answer including some code:</p><pre><code class=\"lang-js\">this.answer = 'this is' + 'my answer';</code></pre><p>This is a test answer.</p>"
    },
    "-Kki2JQ7zgxv-5e9TAnx": {
      "author": "Julia",
      "createdAt": "2017-05-22T02:47:21.164Z",
      "question": "-KkSpzGeeqJAROQtp47U",
      "text": "<p>Another test answer with some code in it.</p><pre><code class=\"lang-js\">this.answer = 'my answer';</code></pre><p>Let's see how it displays.</p>"
    }
  },




  "questions": {

    "-Kjp2GlyLdc-elD_-jpi": {
      "answers": {
        "-KkEiv8RhYeu3RlfTchD": true
      },
      "author": "Julia",
      "createdAt": "2016-01-11T01:08:48.947Z",
      "subject": "Oldest question",
      "text": "<p>This is the oldest question and has one answer.</p>"
    },


    "-KkSmcoTANyTwC4wt7EJ": {
      "author": "Julia",
      "createdAt": "2017-04-05T23:00:32.720Z",
      "subject": "Oldest unanswered question with 2 code blocks",
      "text": "<p>Here is an answered test question with two code blocks. Here is the first block:</p><pre><code class=\"lang-js\">// app/helpers/display-text.js\n\nimport Ember from 'ember';\n\nexport function displayText(text) {\n&nbsp; return Ember.String.htmlSafe(`${text}`);\n}\n\nexport default Ember.Helper.helper(displayText);\n\n</code></pre><p>And here is the second code block:</p><pre><code class=\"lang-html\">// app/templates/components/question-block.js\n\n&lt;div class=\"question-block__header\"&gt;\n&nbsp; &lt;h3 class=\"question-block__subject\"&gt;&lt;span&gt;Q:&lt;/span&gt; {{question.subject}}&lt;/h3&gt;\n&nbsp; &lt;p class=\"question-block__details\"&gt;posted by &lt;span&gt;{{question.author}}&lt;/span&gt; on {{question.formattedDate}}&lt;/p&gt;\n&lt;/div&gt;\n&lt;div class=\"question-block__body\"&gt;\n&nbsp; {{display-text question.text}}\n&lt;/div&gt;\n<br></code></pre>"
    },


    "-KkSpzGeeqJAROQtp47U": {
      "answers": {
        "-KkSq10_e5xTzdgh9dYE": true,
        "-Kki21Po0OCKuHr9DIZS": true,
        "-Kki2JQ7zgxv-5e9TAnx": true
      },
      "author": "Julia",
      "createdAt": "2017-05-23T23:15:11.133Z",
      "subject": "Newest question",
      "text": "<p>This test question has 3 answers.</p>"
    },



    "-Kkhzzl1N3bYRiYQ-l3Z": {
      "author": "Julia",
      "createdAt": "2017-05-20T02:32:50.036Z",
      "subject": "Newest unanswered question",
      "text": "<p>This stub question is unanswered and also the most recently created. It should appear first when sorting by unaswered questions.</p>"
    }
  }
}
