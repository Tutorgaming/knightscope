//used for making HTTP calls


var Resource = require('resourcejs'); //RESTful

module.exports = function(app, route) {

  // Setup the controller for REST;
  Resource(app, '', route, app.models.schedule).rest();

  // Return middleware.
  return function(req, res, next) {
    next();
  };
};