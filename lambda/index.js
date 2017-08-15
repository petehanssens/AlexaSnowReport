var Alexa = require('alexa-sdk');

// Data
var SnowReports = require('./data/SnowReport');

// Helpers
var convertArrayToReadableString = require('./helpers/convertArrayToReadableString');

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};

var handlers = {

  'NewSession': function () {
    this.emit(':ask', 'Welcome to Wanaka! The skill that gives you all the information about the alexa developer community. You can ask me about the various alexa meetups around the world, or listen to the alexa dev chat podcast. But first, I\'d like to get to know you better. Tell me your name by saying: My name is, and then your name.', 'Tell me your name by saying: My name is, and then your name.');
  },

  'LaunchRequest': function () {
    this.emit(':ask', 'Welcome to Voice Devs!', 'You can ask me about the various alexa meetups around the world, or listen to the alexa dev chat podcast.  What would you like to do?');
  },

  'NameCapture': function () {
    // Get Slot Values
    var FirstNameSlot = this.event.request.intent.slots.FirstName.value;

    // Get Name
    var name;
    if (FirstNameSlot) {
      name = FirstNameSlot;
    }

    // Save Name in Session Attributes and Ask for Country
    if (name) {
      this.attributes['userName'] = name;
      this.emit(':ask', `Ok ${name}! Tell me what country you're from by saying: I'm from, and then the country you're from.`, `Tell me what country you're from by saying: I'm from, and then the country you're from.`);
    } else {
      this.emit(':ask', `Sorry, I didn\'t recognise that name!`, `'Tell me your name by saying: My name is, and then your name.'`);
    }
  },

  'CountryCapture': function () {
    // Get Slot Values
    var country = this.event.request.intent.slots.Country.value;

    // Get User Name from Session Attributes
    var userName = this.attributes['userName'];

    // Save Country in Session Attributes and Move Into Main Skill
    if (country) {
      this.attributes['userCountry'] = country;
      this.emit(':ask', `Ok ${userName}! Your from ${country}, that's great! You can ask me about the various alexa meetups around the world, or listen to the alexa dev chat podcast.  What would you like to do?`, `What would you like to do?`);
    } else {
      this.emit(':ask', `Sorry, I didn\'t recognise that country!`, `Tell me what country you're from by saying: I'm from, and then the country you're from.`);
    }
  }



};
