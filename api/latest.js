const getVersions = require('../versions');
const setCacheHeader = require('../header');

module.exports = async (_req, res) => {
	try {
		const versions = await getVersions();
		setCacheHeader(res);
		res.send(versions[0]);
	} catch (err) {
		console.error(err);
		res.status(500).send('');
	}
};
