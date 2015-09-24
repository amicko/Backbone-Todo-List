'use strict'
var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
	defaults: {
		title: '',
		type: '',
		rarity: '',
		number: 0
	},
	urlRoot: 'http://tiyfe.herokuapp.com/collections/backbone-todo-cards',
	idAttribute: '_id'
})