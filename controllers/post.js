const Post = require("../models/post");

exports.getPosts = (req, res) => {
	res.json({
		posts: [
			{ author: "Ryan Erswell"},
			{ content: "hello it is also just me!"}
		]
	});
};

exports.createPost = (req, res) => {
	const post = new Post(req.body);
	console.log("creating post", req.body);
};