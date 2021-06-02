const mongoose = require('mongoose');

    // User Schema
    const userSchema = new mongoose.Schema({
        _id: String,
        name: String,
        mail: String,
        pass: String,
        start: {
          type: Date,
          default: Date.now
        },
        end: {
          type: Number,
          default: 365
        },
        count: Number,
    });
	
	// user models
	const user = new mongoose.model("user", userSchema);
	
module.exports = user;
