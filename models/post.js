const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
	author: {
		type: String,
		required: "Please enter the authors name",
		minlength: 3,
		maxlength: 50,
	},
	title: {
		type: String,
		required: "Please enter a title",
		minlength: 5,
		maxlength: 100
	},
	content: {
		type: String,
		required: "Must be content with post",
		minlength: 10,
		maxlength: 2000
	}
});

module.exports = mongoose.model("Post", postSchema);