var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};

var handlers = {
    
      'LaunchRequest': function () {
        this.emit(':ask', 'Welcome to the Snow Report! The skill that gives you information about ski resorts in New Zealand as well as todays snow report. You can ask me about the various ski resorts, or get a snow report. But first, I\'d like to get to know you better. Tell me your name by saying: My name is, and then your name.', 'Tell me your name by saying: My name is, and then your name.');
      },
    
      'Hello': function () {
        this.emit(':tell', 'Welcome to the Snow Report! The skill that gives you information about ski resorts in New Zealand as well as todays snow report. You can ask me about the various ski resorts, or get a snow report.  What would you like to do?');
      }
};
