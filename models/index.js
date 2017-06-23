// Models HUB, models handles all requests between the server and the database
module.exports = {
	projectx: require('./projectx')// Any request made with the signature "models.projectx..." is beeing handled by whatever is in projectx folder.
};
