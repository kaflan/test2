import Ember from 'ember';

export default Ember.Route.extend({
    model: function(){
        return new Promise(function(resolve, reject){
           return $.getJSON('http://pokeapi.co/api/v1/pokemon/?limit=3', function(resp){
             resolve(resp.objects);
             console.log(resp.objects, 'pokemons');
           });
        });
    }
});
