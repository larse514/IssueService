/**
 * Created by andrew.larsen on 2/13/2016.
 */
var _ = require('lodash');
var schemas = require('./schema/schema.js');


//constructor
var Issue =  function(data) {
    this.data = this.sanitize(data);
};

Issue.prototype.findAll = function(next){
    // get all the users
    //hard coded values  for now
    var issues = [{issue: {
        _id: 456,
        name: "Fighting Fronts!",
        cvid: 1488,
        images: [
            {icon_url
                : "http://static.comicvine.com/uploads/square_avatar/0/4/8-1488-7-1-fighting-fronts-.jpg"
            },
            {medium_url
                : "http://static.comicvine.com/uploads/scale_medium/0/4/8-1488-7-1-fighting-fronts-.jpg"
            },
            {screen_url
                : "http://static.comicvine.com/uploads/screen_medium/0/4/8-1488-7-1-fighting-fronts-.jpg"
            },
            {small_url
                : "http://static.comicvine.com/uploads/scale_small/0/4/8-1488-7-1-fighting-fronts-.jpg"
            },
            {super_url
                : "http://static.comicvine.com/uploads/scale_large/0/4/8-1488-7-1-fighting-fronts-.jpg"
            },
            {thumb_url
                : "http://static.comicvine.com/uploads/scale_avatar/0/4/8-1488-7-1-fighting-fronts-.jpg"
            },
            {tiny_url
                : "http://static.comicvine.com/uploads/square_mini/0/4/8-1488-7-1-fighting-fronts-.jpg"
            }]
    }},
        {issue: {
            _id: 123,
            name: "The Lost Race",
            cvid: 6,
            images: [
                {icon_url:
                    "http://static.comicvine.com/uploads/square_avatar/5/58993/2645776-chamber_of_chills__13_cgc_8.5.jpg"
                },
                {medium_url:
                    "http://static.comicvine.com/uploads/scale_medium/5/58993/2645776-chamber_of_chills__13_cgc_8.5.jpg"
                },
                {screen_url:
                    "http://static.comicvine.com/uploads/screen_medium/5/58993/2645776-chamber_of_chills__13_cgc_8.5.jpg"
                },
                {small_url:
                    "http://static.comicvine.com/uploads/scale_small/5/58993/2645776-chamber_of_chills__13_cgc_8.5.jpg"
                },
                {super_url:
                    "http://static.comicvine.com/uploads/scale_large/5/58993/2645776-chamber_of_chills__13_cgc_8.5.jpg"
                },
                {thumb_url:
                    "http://static.comicvine.com/uploads/scale_avatar/5/58993/2645776-chamber_of_chills__13_cgc_8.5.jpg"
                },
                {tiny_url:
                    "http://static.comicvine.com/uploads/square_mini/5/58993/2645776-chamber_of_chills__13_cgc_8.5.jpg"
                }]
        }}];
    next(issues)
};

//helper methods
Issue.prototype.sanitize = function (data){
    //if data is invalid set to empty object so we don't pull
    //bad errors, seems smrt
    data = data || {};
    //grab user schema
    schema = schemas.issue
    //so let's see...
    //these are using lodash functions (more info found here: https://lodash.com/)
    //_.defaults will add any variables, from schema, that data doesn't contain
    //_.keys gets all the keys from schema and _.pick only keeps these values
    return _.pick(_.defaults(data, schema), _.keys(schema));
};

//define data for easy saving into backend
Issue.prototype.data = {};

//Define generic setter and getter
Issue.prototype.set = function (name, value) {
    this.data[name] = value;
};

Issue.prototype.get = function (name){
    return this.data[name];
};

module.exports = Issue;