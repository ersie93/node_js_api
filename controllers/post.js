exports.getPosts = (req, res) => {
	res.json({
		posts: [
			{ author: "Ryan Erswell"},
			{ content: "hello it is also just me!"}
		]
	});
};