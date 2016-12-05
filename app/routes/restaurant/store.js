import Ember from 'ember';

export default Ember.Route.extend({

model: function(params){
var url = 'https://sonika.herokuapp.com/api/SoCalRestaurants/byID/' + params.id;
var promise = $.ajax({
type: 'get',
url: url
});
// }).then(function(response){
// return{
// 	id: response.data[0].id,
// 	name: response.data[0].restaurantName,
// 	cuisine: response.data[0].cuisine
// };
// });
return promise;
}
// afterModel: function(model){
// console.log(model);
// }
});
