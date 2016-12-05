import Ember from 'ember';

export default Ember.Route.extend({
model: function(){
		var searchTerm = document.getElementById('typeofood').value;
		var searchTerm2 = document.getElementById('location').value;
        var url = 'http://sonika.herokuapp.com/results/'+ searchTerm + "/" + searchTerm2;
        console.log(url);
		var promise = Ember.$.getJSON(url);
		return promise;
	},
	afterModel: function(model){
		console.log(model);
	}
	
	});