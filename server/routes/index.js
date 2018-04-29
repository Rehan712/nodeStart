var getStudentsHandler = require('../handlers/getStudentsHandler');
module.exports = app => {
	app.get('/students', getStudentsHandler);
};

//  (req, res) => {
// 	res.json({ one: 'hello world' });
// };
