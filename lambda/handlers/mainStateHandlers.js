var Alexa = require('alexa-sdk');

// Constants
var constants = require('../constants/constants');
// Data
var snowReports = require('../data/snowReportSimple');
// Helpers
var convertArrayToReadableString = require('../helpers/convertArrayToReadableString');

// Main Handlers
var mainStateHandlers = Alexa.CreateStateHandler(constants.states.MAIN, {

  'LaunchRequest': function () {
    // Check for User Data in Session Attributes
    var userName = this.attributes['userName'];
    if (userName) {
      // Welcome User Back by Name
      this.emit(':ask', `Welcome back ${userName}! You can ask me about the various resorts, or ask me for a snow report.`,  `What would you like to do?`);
    } else {
      // Change State to Onboarding:
      this.handler.state = constants.states.ONBOARDING;
      this.emitWithState('NewSession');
    }
  },

  'SkiFieldNumbers': function () {
    var resortNumbers = snowReports.length;
    this.emit(':ask', `There are currently ${resortNumbers} in New Zealand. Would you like to hear a snow report from one of them?`, 'How else can I help you?');
  },

  'AMAZON.StopIntent': function () {
    // State Automatically Saved with :tell
    this.emit(':tell', `Goodbye.`);
  },
  'AMAZON.CancelIntent': function () {
    // State Automatically Saved with :tell
    this.emit(':tell', `Goodbye.`);
  },
  'SessionEndedRequest': function () {
    // Force State Save When User Times Out
    this.emit(':saveState', true);
  },

  'AMAZON.HelpIntent' : function () {
    this.emit(':ask', `You can ask me about the various resorts, or ask me for a snow report.`,  `What would you like to do?`);
  },
  'Unhandled' : function () {
    this.emitWithState('AMAZON.HelpIntent');
  }

});

module.exports = mainStateHandlers;
