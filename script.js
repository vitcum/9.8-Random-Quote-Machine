var tweetLink = 'https://twitter.com/intent/tweet?text=';
var quoteUrl = 'https://crossorigin.me/http://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';

function getQuote() {
	$.getJSON(quoteUrl, createTweet);
}

function createTweet(input) {
	if (!input.quoteAuthor.length) {
		input.quoteAuthor = 'Unknow author';
	}

	var tweetText = 'Quote of the day -' + input.quoteText + ' Author: ' + input.quoteAuthor;
		if (tweetText.lenght > 140) {
			getQuote();
		} else {
			var tweet = tweetLink + encodeURIComponent(tweetText); 
			$('.quote').text(input.quoteText);
			$('.author').text('Author: ' + input.quoteAuthor);
			$('.tweet').attr('href', tweet);

		}
}

$(document).ready(function() {
	getQuote();
	$('.trigger').click(function() {
		getQuote();
	})
});