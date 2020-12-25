const userRoutes = (app, fs) => {
	
	// READ Random gita Quote urls
    app.get('/gita', (req, res) => {
		var slokcount=[47,72,43,42,29,47,30,28,34,42,55,20,35,27,20,24,28,78];
		const chapter = Math.floor(Math.random() * 17) + 1;
        const slok = Math.floor(Math.random() * slokcount[chapter-1])+1;;
		res.setHeader("Content-Type", "application/json");
		fs.readFile(`./data/gita/${chapter}/${slok}.json`, 'utf8', (err, data) => {
            if (err) {
				res.send({ error: 'This Chapter or Slok does not exist' });
                throw err;
            }
            res.send(JSON.parse(data));
        });
    });
	
	// READ Random slok quote svg urls
	app.get('/gita.svg', (req, res) => {
		const renderSVG = require('./renderSVG');
		var slokcount=[47,72,43,42,29,47,30,28,34,42,55,20,35,27,20,24,28,78];
		const chapter = Math.floor(Math.random() * 17) + 1;
        const slok = Math.floor(Math.random() * slokcount[chapter-1])+1;;
		res.setHeader("Content-Type", "application/json");
		fs.readFile(`./data/gita/${chapter}/${slok}.json`, 'utf8', (err, data) => {
            if (err) {
				res.send({ error: 'This Chapter or Slok does not exist' });
                throw err;
            }
		res.setHeader("Content-Type", "image/svg+xml");
		res.setHeader("Cache-Control", `public, max-age=600`);
		res.send(renderSVG(JSON.parse(data)));
        });
    });	

	// READ all chapters urls
    app.get('/gita/chapters', (req, res) => {
        res.setHeader("Content-Type", "application/json");
		fs.readFile('./data/gita/chapters.json', 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
           res.send(JSON.parse(data));
        });
    });
	
	// READ particular chapters urls
    app.get('/gita/:ch', (req, res) => {
        res.setHeader("Content-Type", "application/json");
		fs.readFile('./data/gita/chapters.json', 'utf8', (err, data) => {
            if (err) {
				//res.send({ error: 'Not found' });
                throw err;
            }
            const chapter = req.params["ch"] - 1;
            res.send(JSON.parse(data)[chapter] || { error: 'This Chapter does not exist Try only 1 to 18' });
        });
    });
	
	// READ particular chapter's slok url
	app.get('/gita/:ch/:sl', (req, res) => {
		const chapter = req.params["ch"];
        const slok = req.params["sl"];
		res.setHeader("Content-Type", "application/json");
		fs.readFile(`./data/gita/${chapter}/${slok}.json`, 'utf8', (err, data) => {
            if (err) {
				res.send({ error: 'This Chapter or Slok does not exist' });
                throw err;
            }
            res.send(JSON.parse(data));
        });
    });
	
	
};

module.exports = userRoutes;