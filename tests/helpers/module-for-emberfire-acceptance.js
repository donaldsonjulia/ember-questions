import moduleForAcceptance from 'questions/tests/helpers/module-for-acceptance';

import createOfflineRef from 'questions/tests/helpers/emberfire/create-offline-ref';
import replaceAppRef from 'questions/tests/helpers/emberfire/replace-app-ref';
import stubFirebase from 'questions/tests/helpers/emberfire/stub-firebase';
import unstubFirebase from 'questions/tests/helpers/emberfire/unstub-firebase';

export default function(name, options = {}) {
  let fixtureData = options.fixtureData || {};
  moduleForAcceptance(name, {
    beforeEach() {
      stubFirebase();
      this.firebaseReference = createOfflineRef(fixtureData);
      replaceAppRef(this.application, this.firebaseReference);

      if (options.beforeEach) {
        options.beforeEach.apply(this, arguments);
      }
    },

    afterEach() {
      if (options.afterEach) {
        options.afterEach.apply(this, arguments);
      }

      unstubFirebase();
    }
  });
}
