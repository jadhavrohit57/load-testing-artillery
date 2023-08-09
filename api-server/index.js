const express = require('express');
const app = express();

app.use(express.json());

const users = [];

app.get('/', (req, res) => {
	res.send('success');
});
app.post('/user', (req, res) => {
	users.push(req.body);
	res.send('user saved');
});

app.get('/user/:id', (req, res) => {
	const userInfo = users.find((user) => user.id == req.params.id);
	res.send(userInfo);
});

app.listen(8080, () => {
	console.log('server listening on port ', 8080);
});
