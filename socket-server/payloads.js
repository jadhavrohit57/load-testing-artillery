module.exports = {
	getmessageData: getmessageData
};

function getmessageData(context, events, done) {
	// console.log('context.vars --', context.vars);
	context.vars['message'] = { message: 'hello there', date: new Date().toLocaleString() };
	return done();
}
