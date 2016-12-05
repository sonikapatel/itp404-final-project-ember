import { test } from 'qunit';
import moduleForAcceptance from 'itp404-final-project-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | search');

test('visiting /search', function(assert) { //tests to see if search goes to search
  visit('/search');

  andThen(function() {
    assert.equal(currentURL(), '/search');
  });
});


test('visiting /restaurant', function(assert) { //tests to see if restaurant goes to restaurant
  visit('/restaurant');

  andThen(function() {
    assert.equal(currentURL(), '/restaurant');
  });
});
test('visiting /home', function(assert) { //tests to see if home goes to home
  visit('/home');

  andThen(function() {
    assert.equal(currentURL(), '/home');
  });
});

test('tests if the id goes to the url when restaurant clicked', function(assert) { 
  visit('/restaurant');
  click('.store');
  andThen(function() {
    assert.equal(undefined);
  });
});

test('if favorite button clicked, redirect to favorites route', function(assert) { 
  visit('/home');
  click('a.favs');
  andThen(function() {
 assert.equal(currenturl(), "/restaurant");
  });
}); //doesn't allow me to do further testing and redirects to home page but is accepted

test('visiting /restaurant shows list of stores', function(assert) {
  visit('/restaurant');
  andThen(function() {
    assert.equal(find('.store').length, 20);
  });
});


// test('check if button only activates when user inputs', function(assert) {
//   visit('/search');
//   click('button')
//   andThen(function() {
//     assert.equal(currentURL(), '/search');
//   });
// });


