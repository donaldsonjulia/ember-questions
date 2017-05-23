import moduleForAcceptance from 'questions/tests/helpers/module-for-emberfire-acceptance';

import createOfflineRef from 'emberfire/test-support/helpers/create-offline-ref';
import replaceAppRef from 'emberfire/test-support/helpers/replace-app-ref';
import stubFirebase from 'emberfire/test-support/helpers/stub-firebase';
import unstubFirebase from 'emberfire/test-support/helpers/unstub-firebase';

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
