const UserModel = require('../models/user.js');

var demoData = [
	  {username: 'AllTheSingleLadies', password: 'test', station: 'Why You\'re Single', description: 'A place for singles to come together and share stories with each other. Broadcasting live from NYC every Tuesday, Thursday, and Sunday!', picture: 'client/img/user1.jpg', tagline: 'Real Relationship Talk', id: 1},
	  {username: 'JumpinJoe', password: 'test', station: 'Black Men Can\'t Jump', description: 'Jonathan Braylock, James III, and Jerah Milligan review major motion pictures with black leading actors.', picture: 'client/img/user2.jpg', tagline: 'Hollywood\'s portrayal of the African American', id: 2},
	  {username: 'Fade2Black', password: 'test', station: 'Fade 2 Black', description: 'FadeToBlack is a LIVE radio show on Game Changer Network with Jimmy Church', picture: 'client/img/user3.jpg', tagline: 'Gamechanger Entertainment', id: 3},
	  {username: 'BooksForKids', password: 'test', station: 'Books for Kids', description: 'Classic tales, modern book reviews, news and more! Everything your child needs to enjoy reading', picture: 'client/img/user4.jpg', tagline: 'Reading books to kids made fun!', id: 4},
	  {username: 'TheHeatbeatPodcast', password: 'test', station: 'The Heatbeat Podcast', description: 'Welcome to The Heat Beat Podcast, a weekly NBA podcast hosted by Giancarlo Navas & Brian Goins bringing you the latest dose of Miami Heat news, insight, and commentary.', picture: 'client/img/user5.jpg', tagline: 'Fans get hot talking about Miami Heat', id: 5},
	  {username: 'StocktonHeat92', password: 'test', station: 'Stockton Heat', description: 'Listen live to the Stockton Heat all season long as they take on the newly formed Pacific Division in the AHL.', picture: 'client/img/user6.jpg', tagline: 'Not quite as hot as Miami, but still pretty warm', id: 6},
	  {username: 'BlueFishRadio', password: 'test', station: 'Blue Fish Radio', description: 'Blue Fish Radio is produced and hosted by Lawrence Gunther (www.lawrencegunther.com). The show features interviews with people that have expertise and first-hand knowledge about fishing, fish and aquatic ecosystems. Lawrence Gunther applies his expertise, experience and engaging style to both educate and entertain listeners. Each show lasts 30 minutes and is streamed by a number of broadcasters.', picture: 'client/img/user7.jpg', tagline: 'For all your fishing needs', id: 7},
	  {username: 'LeoLaporte', password: 'test', station: 'The Tech Guy', description: 'Should you buy the Samsung Galaxy Note IV? Leo recommends wireless printers or using XPrint Server, what you should do with a crashed hard drive, VMware for virtualization, how to print from your iPad, choosing between an iPad or computer and more of your calls.', picture: 'client/img/user8.jpg', tagline: 'Lets fix your computer!', id: 8}];


const addUser = function(userdata, cb) {
  UserModel.create({
    username: userdata.username,
    password: userdata.password,
    email: userdata.email,
    station: userdata.station,
    description: userdata.description,
    picture: userdata.picture,
    tagline: userdata.tagline
  }, cb);
};


const findOne = function(username, cb) {
  UserModel.find({username: username}, cb);
};

const findAll = function(cb) {
  UserModel.find({}, cb);
};

const findId = function(id, cb) {
  UserModel.find({_id: id}, cb);
};

const init = function(data) {
	//CLEAR DATABASE
	UserModel.remove({}, function(err) {
	   console.log('collection removed')
	});

	//INSERT DEMO USER DATA
	data.forEach( (user) => {
		if (user.username) {
			addUser(user, (err)=> console.log(err));
			console.log(user);
		}
	});
}
init(demoData);

exports.addUser = addUser;
exports.findOne = findOne;
exports.findId = findId;
exports.findAll = findAll;
