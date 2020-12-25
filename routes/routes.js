// import other routes
const gitaRoutes = require('./gitaroutes');
const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
		res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
		fs.createReadStream('./docs/README.html').pipe(res)
    });

    // gita routes
    gitaRoutes(app, fs);
};

module.exports = appRouter;