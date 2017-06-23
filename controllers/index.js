// Controllers main hub.
module.exports = {
  mainpage: require('./mainpage'), // Any request made with the signature "controllers.mainpage..." is beeing handled by whatever is in mainpage folder.
  projectx: require('./projectx')// Any request made with the signature "controllers.projectx..." is beeing handled by whatever is in projectx folder.
};
