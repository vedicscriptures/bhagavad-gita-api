// import routes of GITA
const bhagavadgitaRoutes = require('./bhagavadgitaroutes');
const Routes = (app,express) => {
    // api settings
    app.use((req, res, next)=>{
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    });
    app.set('trust proxy', 1);
    app.use(express.json()); 
    app.use(express.urlencoded({extended: true}));
    
    // default route to docs(https://docs.bhagavadgitaapi.in/)
    app.get('/', (req, res) => {
    	res.redirect('https://docs.bhagavadgitaapi.in/');
	});

    // gita routes
    bhagavadgitaRoutes(app);

    // error 404 page
    app.get('*', (req, res) => {
        res.status(404).json({ error: 'Invalid Parameters'});
    })
};

module.exports = Routes;