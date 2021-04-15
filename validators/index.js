exports.createPostValidator = (req, res, next) => {
	//title
	req.check('title', "Write a title").notEmpty();
	req.check('title', "Title must be betwen 4 and 50 character").isLength({
		min: 4,
		max: 50
	});
	//body
	req.check('content', "Write a post").notEmpty();
	req.check('content', "Post must be betwen 10 and 2000 character").isLength({
		min: 10,
		max: 2000
	});

	//check for errors
	const errors = req.validationErrors();

	if(errors){
		const firstError = errors.map((error) => error.msg)[0];
		return res.status(400).json({error: firstError});
	}

	next();
}
