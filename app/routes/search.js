import Ember from 'ember';

export default Ember.Route.extend({
	
	actions: {
		search: function(e){
			e.preventDefault();
		var searchTerm = document.getElementById('typeofood').value;
		var searchTerm2 = document.getElementById('location').value;
		this.transitionToRoute('search.results', searchTerm);
		this.transitionToRoute('search.results.searchTerm', searchTerm2);
		}
	}
});
