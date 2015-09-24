'use strict';
var $ = require('jquery');
var CardStatsCollection = require('./collections/CardStatsCollection.js');
var CardStatsModel = require('./models/CardStatsModel.js');
var _ = require('backbone/node_modules/underscore');

$(document).ready(function() {

	var $form = $('#form');
	var $title = $('#title');
	var $type = $('#type');
	var $rarity = $('#rarity');
	var $number = $('#number');
	var $cardList = $('#card-list');
	var cardTemplate = _.template($('#card-row').html());

	var newCards = new CardStatsCollection();

	function onFormSubmit(e) {
		e.preventDefault();
		newCards.add({
			title: $title.val(),
			type: $type.val(),
			rarity: $rarity.val(),
			number: $number.val()
		})
	}

	function onNewCardAdded(newCard) {
		newCard.save;
		var newHtml = cardTemplate(newCard.toJSON());
		$cardList.append(newHtml);
	}

	$form.on('submit', onFormSubmit);
	newCards.on('add', onNewCardAdded);

	newCards.fetch();

})