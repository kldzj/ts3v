const getVersions = require('../versions');
const setCacheHeader = require('../header');

module.exports = async (_req, res) => {
	try {
		const versions = await getVersions();
		setCacheHeader(res);
		res.json({ latest: versions[0], versions });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: true });
	}
};
