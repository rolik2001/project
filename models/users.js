// Example model
var db = require('orm').db;

var users = db.define('users', {
    id: String,
    text: String
}, {
    methods: {
        example: function() {
            // return example;
        },
        serialize: function() {
            return this;
        }
    }
});
