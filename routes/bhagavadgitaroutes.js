// import modules of Bhagavad GITA
const {bgslok, bgchap} = require('../models/bhagavadgita.model');
const {renderSVG,gitaslokid} = require('../lib/bhagavadgita');		

// Bhagavad Gita Routes Endpoints
const bhagavadgitaRoutes = (app, fs) => {
	
	// GET Random gita Quote
    app.get('/gita', async (req, res) => {
		await bgslok.findById(gitaslokid(), (err, data) => {
            if (!data) {
				res.status(500).json({ error: 'Internal Server Error'});
            }
            res.json(data);
        });
    });	
		
	// GET particular slok 
	app.get('/gita/:ch/:sl', async (req, res) => {    	
		const chapter = req.params.ch;
		const slok = req.params.sl;
		if(!isNaN(chapter) && !isNaN(slok)){
			await bgslok.findById(`BG${chapter}.${slok}`, (err, data) => {
				if (!data) {
					res.status(400).json({ error: 'This Chapter or Slok does not exist' });
				}
				res.json(data);
			});
		}
		else{
				res.status(400).json({ error: 'Invalid request, Plese type valid input' });
		}
    });
	 
	// GET slok svg urls
	app.get('/gita.svg', async (req, res) => {
		const chapter = req.query.ch;
		const slok = req.query.sl;
		if((typeof chapter === 'undefined' && typeof slok  === 'undefined') || (!isNaN(chapter) && typeof slok  === 'undefined') || (!isNaN(chapter) && !isNaN(slok))){
			await bgslok.findById(gitaslokid(chapter,slok), (err, data) => {
				if (!data) {
					res.status(400).json({ error: 'Chapter or Slok does not exist' });
				}
				res.set({
					'Content-Type':'image/svg+xml',
					'Cache-Control':'public, max-age=600'
				});
				res.send(renderSVG(data));
			});
		}
		else{
				res.status(400).json({ error: 'Invalid request, Plese type valid input' });
		}	
	});	
	
	// GET all chapters urls
    app.get('/gita/chapters', async (req, res) => {
    	await bgchap.find({},{ '_id': 0,}, (err, data) => {
            if (!data) {
				res.status(500).json({ error: 'Internal Server Error'});
            }
            res.json(data);
        });
    });
	
	// GET particular chapters urls
    app.get('/gita/:ch',async (req, res) => {
    	const chapter = req.params.ch;
		if(!isNaN(chapter)){
			await bgchap.find({chapter_number: chapter},{ '_id': 0,},(err, data) => {
				if (!data) {
					res.status(400).json({ error: 'This Chapter does not exist Try only 1 to 18' });
				}
				res.json(data[0]);
			});
		}
		else{
				res.status(400).json({ error: 'Invalid request, Plese type valid input' });
		}	
    });
};

module.exports = bhagavadgitaRoutes;