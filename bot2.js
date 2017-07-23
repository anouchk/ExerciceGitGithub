console.log('The bot is starting');

var Twit = require('twit');
// require : for node it is like import the package
// https://github.com/ttezel/twit 
// trouvé sur npmjs.com
// https://dev.twitter.com/
// manage my apps
// create my app
// twilio pour avoir un autre numéro de tel

var config = require ('./config');
// console.log(config);
var T = new Twit(config);



// setting a user stream (T c'est ma connexion au twitter package, à l'API)
var stream = T.stream("user");

// anytime someone follows me
stream.on("follow", followed);
stream.on("unfollow", unfollowed);
stream.on("favorite", favored);

// fonction pour gérer un événement
function followed(eventMsg) {
	console.log("Follow event !");
	var name = eventMsg.source.name;
	var screenName = eventMsg.source.screen_name;
	tweetIt("@" + screenName + " Bienvenue ! Je suis un bot qui apprend vite quand on m'explique longtemps");
// 	tweetIt("salut");
}
function unfollowed(eventMsg) {
	console.log("Unfollow event !");
	var name = eventMsg.source.name;
	var screenName = eventMsg.source.screen_name;
	tweetIt("@" + screenName + " Reviens Léon !");
// 	tweetIt("salut");
}
function favored(eventMsg) {
	console.log("Favorite event !");
	var name = eventMsg.source.name;
	var screenName = eventMsg.source.screen_name;
	tweetIt("@" + screenName + " Tu kiffes, hein ?");
// 	tweetIt("salut");
}



// tweetIt();
// c'est des millisecondes : 1000*60 c'est 1 minute
// setInterval(tweetIt, 1000*60*2)

function tweetIt() {

	var r = Math.floor(Math.random()*25);

	var tweet = {
// 		status:   "François Fillon aura " + r + "% des voix, c'est moi qui vous le dis"
		status: txt
	}

	T.post('statuses/update', tweet, tweeted);

	function tweeted (err, data, response) {
		if (err) {
			console.log("something went wrong");
		} else {
			console.log("It worked");
		}
	}
};

// tout le code nécessaire pour poster un tweet
// var tweet = {
// 	status:  "#codingrainbow from node.js"
// }
// 
// T.post('statuses/update', tweet, tweeted);
// 
// function tweeted (err, data, response) {
// 	if (err) {
// 		console.log("something went wrong");
// 	} else {
// 		console.log("It worked");
// 	}
// };