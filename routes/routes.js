// import routes of GITA
const bhagavadgitaRoutes = require('./bhagavadgitaroutes');
const Routes = (app, fs) => {

    // default route to docs(https://docs.bhagavadgitaapi.in/)
    app.get('/', (req, res) => {
    	res.redirect('https://docs.bhagavadgitaapi.in/');
	});

    // gita routes
    bhagavadgitaRoutes(app,fs);
};

module.exports = Routes;