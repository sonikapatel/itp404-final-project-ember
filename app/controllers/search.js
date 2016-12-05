import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		search: function(e){
			e.preventDefault();
			console.log(document.getElementById('typeofood').value);
			var searchTerm = document.getElementById('typeofood').value;
			var searchTerm2 = document.getElementById('location').value;
			this.transitionToRoute('search.results', searchTerm);
		}
	}
});
