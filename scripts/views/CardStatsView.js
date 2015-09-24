'use strict'
var Backbone = require('backbone');
module.exports = Backbone.View.extend({
	tagName: 'form',
	initialize: function() {
		this.model = new CardStatsModel();
		console.log('It work?');
	}
})