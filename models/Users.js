// Requiring Mongoose
const { Schema, model } = require('mongoose');

// Users Schema
const UsersSchema = new Schema ({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // Validates email via REGEX
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thoughts'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'Users'
    }]
    },
    {
    toJson: {
        virtuals: true,
        getters: true,
    },
    id: false
});

// Return friend count
UsersSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// Creating Users model through Users Schema
const Users = model('Users', UsersSchema);

// Exporting Users module
module.exports = Users;