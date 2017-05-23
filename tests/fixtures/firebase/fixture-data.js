export default {
  "answers": {
    "-KkCuRxq5UJXJRQW0186": {
      "author": "Julia",
      "createdAt": "2017-05-15T21:00:45.858Z",
      "question": "-Kjp-E_82fUMYB795H4A",
      "text": "Answering this question as a test. "
    },
    "-KkDgtiSBETBRKghc0Br": {
      "author": "Julia",
      "createdAt": "2017-05-16T00:41:10.353Z",
      "question": "-Kjp-E_82fUMYB795H4A",
      "text": "Another test answer to this question. "
    },
    "-KkEiv8RhYeu3RlfTchD": {
      "author": "Julia",
      "createdAt": "2017-05-16T05:29:38.189Z",
      "question": "-Kjp2GlyLdc-elD_-jpi",
      "text": "Test answer test answer test answer\n"
    },
    "-KkEljkg0VjvCv5r5Za1": {
      "author": "Julia",
      "createdAt": "2017-05-16T05:41:57.964Z",
      "question": "-Kjp2GlyLdc-elD_-jpi",
      "text": "Test answer again test answer again test answer again\n"
    },
    "-KkIiLVr0O2spsT7dXkT": {
      "author": "Julia",
      "createdAt": "2017-05-17T00:05:37.014Z",
      "question": "-KkF7Qx7XbZiFlKBeFoM",
      "text": "Testing answer for test question, testing testing testing testing testing testing."
    },
    "-KkPK1675x26r3P_8U2K": {
      "author": "Julia",
      "createdAt": "2017-05-18T06:52:20.350Z",
      "question": "-KkO15MOm_SQ_21sPaI9",
      "text": "Test answer test answer test answer again. "
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
    },
    "-Kki362aPk6bJ1oDBSu2": {
      "author": "Julia",
      "createdAt": "2017-05-22T02:50:48.471Z",
      "question": "-KkSpzGeeqJAROQtp47U",
      "text": "<p>this is another answer</p>"
    },
    "-Kki3KJd91bYbB9uZWoV": {
      "author": "Julia",
      "createdAt": "2017-05-22T02:51:46.906Z",
      "question": "-KkSpzGeeqJAROQtp47U",
      "text": "<p>Test answer</p>"
    },
    "-Kki3mLUBXScaA0D3_2J": {
      "author": "Julia",
      "createdAt": "2017-05-22T02:53:45.807Z",
      "question": "-KkSpzGeeqJAROQtp47U",
      "text": "<p>test answer</p>"
    },
    "-Kki4XCPp8tf20U1FQvK": {
      "author": "Julia",
      "createdAt": "2017-05-22T02:57:01.834Z",
      "question": "-KkSpzGeeqJAROQtp47U",
      "text": "<p>Another test answer.</p>"
    },
    "-Kki4rGxVQx4NLKDkCA4": {
      "author": "Julia",
      "createdAt": "2017-05-22T02:58:28.141Z",
      "question": "-KkSpzGeeqJAROQtp47U",
      "text": "<p>this is a test question.</p>"
    }
  },
  "questions": {
    "-Kjp2GlyLdc-elD_-jpi": {
      "answers": {
        "-KkEiv8RhYeu3RlfTchD": true
      },
      "author": "Julia",
      "createdAt": "2017-05-11T01:08:48.947Z",
      "subject": "Stub Question",
      "text": "Has at malis constituam, et vel etiam liber ubique. Id eum hinc deleniti, an per suas dolorem argumentum. Porro corpora erroribus id his, discere prodesset ad eos, vim an nostro definitiones. Vel ne adhuc assentior complectitur, accusam torquatos at per. Vis novum maiestatis ex. Te timeam tritani sit, has vide copiosae ne, et novum honestatis mei. Id elit lobortis has, quot diceret urbanitas ea est."
    },
    "-KkSmcoTANyTwC4wt7EJ": {
      "author": "Julia",
      "createdAt": "2017-05-18T23:00:32.720Z",
      "subject": "Prism.js and Ember",
      "text": "<p>I am having a difficult time getting Prism.js to play nicely with Ember. Do you know anything about Ember and Prism working together? &nbsp;The text editor creates an HTML string that has the correct class names on the code elements for Prism to work, but I cannot get it to initialize...</p><p>A number of Ember addon's exist to handle this, but they require calling the component using handlebars. The only way I could do that is to take the HTML string and write some insane method for inserting the {{component}} before and after every &lt;code&gt; element. That seems....cumbersome? If it's the only way, I can work on it. But I wanted your thoughts.&nbsp;</p><p>This is the helper that is providing the template literal that has &lt;code&gt; tags within it that I want Prism to be able to style:</p><pre><code class=\"lang-js\">// app/helpers/display-text.js\n\nimport Ember from 'ember';\n\nexport function displayText(text) {\n&nbsp; return Ember.String.htmlSafe(`${text}`);\n}\n\nexport default Ember.Helper.helper(displayText);\n\n</code></pre><p>And this is the template within which I want to render those elements:</p><pre><code class=\"lang-html\">// app/templates/components/question-block.js\n\n&lt;div class=\"question-block__header\"&gt;\n&nbsp; &lt;h3 class=\"question-block__subject\"&gt;&lt;span&gt;Q:&lt;/span&gt; {{question.subject}}&lt;/h3&gt;\n&nbsp; &lt;p class=\"question-block__details\"&gt;posted by &lt;span&gt;{{question.author}}&lt;/span&gt; on {{question.formattedDate}}&lt;/p&gt;\n&lt;/div&gt;\n&lt;div class=\"question-block__body\"&gt;\n&nbsp; {{display-text question.text}}\n&lt;/div&gt;\n<br></code></pre>"
    },
    "-KkSpzGeeqJAROQtp47U": {
      "answers": {
        "-KkSq10_e5xTzdgh9dYE": true,
        "-Kki21Po0OCKuHr9DIZS": true,
        "-Kki2JQ7zgxv-5e9TAnx": true
      },
      "author": "Julia",
      "createdAt": "2017-05-18T23:15:11.133Z",
      "subject": "Test Question",
      "text": "<p>This is a test question to test the answers-amount helper.</p>"
    },
    "-Kkhzzl1N3bYRiYQ-l3Z": {
      "author": "Julia",
      "createdAt": "2017-05-22T02:32:50.036Z",
      "subject": "Testing environment without Firebase...",
      "text": "<p>I want to write tests using Mirage to provide the fake server, but I cannot figure out how to configure the environment correctly since Emberfire already magically configured the database connection. I can barely find any information about this online....</p>"
    }
  }
}
