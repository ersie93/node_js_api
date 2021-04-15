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

	post.save().then(result => {
		res.status(200).json({
			post: result
		})
	});
};