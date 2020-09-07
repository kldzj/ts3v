module.exports = (res) => {
	res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate');
};
