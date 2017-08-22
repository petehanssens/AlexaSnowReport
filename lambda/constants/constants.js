var constants = Object.freeze({

  // App-ID. TODO: Set Your App ID
  appId : 'amzn1.ask.skill.d636cf77-74f0-4bd1-aeb9-da0c149785b3',

  //  DynamoDB Table Name
  dynamoDBTableName : 'SnowReport',

  // Skill States
  states : {
    ONBOARDING : '',
    MAIN : '_MAIN',
  }

});

module.exports = constants;
