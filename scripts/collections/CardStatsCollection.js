'use strict'
var Backbone = require('backbone');
var CardStatsModel = require('../models/CardStatsModel.js');
module.exports = Backbone.Collection.extend({
	model: CardStatsModel,
	url: 'http://tiyfe.herokuapp.com/collections/backbone-todo-cards'
});