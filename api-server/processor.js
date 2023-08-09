const uuid = require('uuid').v4;

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
	let result = ' ';
	const charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}

	return result;
}

function setBody(context, ee, next) {
	const userData = {
		id: uuid(),
		name: generateString(7)
	};
	context.vars['user'] = userData;
	return next();
}

module.exports = {
	setBody: setBody
};
