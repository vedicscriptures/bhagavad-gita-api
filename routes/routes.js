// import routes of GITA
const bhagavadgitaRoutes = require('./bhagavadgitaroutes');
const Routes = (app, fs) => {

    // default route to vedicscripters.github.io
    app.get('/', (req, res) => {
	res.redirect('https://vedicscriptures.github.io/');
	});

    // gita routes
    bhagavadgitaRoutes(app, fs);
};

module.exports = Routes;