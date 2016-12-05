// import Ember from 'ember';

// export default Ember.Route.extend({

// 	 model: function() {
// 	 	var promise = Ember.$.ajax({
// 	 		type: 'get',
// 	 		url: 'http://localhost:3000/api/SoCalRestaurants/'
// 	 	});
// 	 	return promise;
// 	 }
	
// });
import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function() {
		document.title= "Restaurants";
	},
	model: function(params) {
		var url = 'https://sonika.herokuapp.com/api/SoCalRestaurants/';
		var promise = $.getJSON(url);
		return promise;
	},
	afterModel: function(model) {
		console.log(model);
	}
});
