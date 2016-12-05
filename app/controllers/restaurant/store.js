import Ember from 'ember';

export default Ember.Controller.extend({
actions:{
	addRestaurant: function(e){
		e.preventDefault();
		var restaurantName = this.get('restaurantName');
		var cuisine = this.get('cuisine');
		var stars = this.get('stars');
		var reviews = this.get('review');

		console.log(restaurantName, cuisine, stars, reviews);

			$.ajax({
				type: 'post',
				url: 'http://localhost:3000/api/SoCalRestaurants/',
				data:{
				restaurantName: restaurantName,
				cuisine: cuisine,
				stars: stars,
				reviews: reviews
				}

			})

	}

}
});
