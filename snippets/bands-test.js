// tests/acceptance/bands-test.js

import {test} from 'qunit';
import moduleForAcceptance from 'rarwe/tests/helpers/module-for-acceptance';
import Pretender from 'pretender';
import httpStubs from '../helpers/http-stubs';

moduleForAcceptance('Acceptance | bands', {
  afterEach() {
    server.shutdown();
  }
});

let server;

test('Create a new band', function(assert){

  server = new Pretender(function() {
    httpStubs.stubBands(this, [{
      id: 1,
      attributes: {
        name: 'Radiohead'
      }
    }]);
    httpStubs.stubCreateBand(this, 2);
    httpStubs.stubSongs(this, 2, []);
  });

  visit('/bands');
  fillIn('.new-band', 'Long Distance Calling');
  click('.new-band-button');

  andThen(function() {
    assertLength(assert, '.band-link', 2, 'All band links are rendered');
    assertTrimmedText(assert, '.band-link:last', 'Long Distance Calling', 'Created band appears at the end of the list');
    assertElement(assert, '.nav a.active:contains("Songs")', 'The Songs tab is active');

  });
});
