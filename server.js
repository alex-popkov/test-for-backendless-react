var webpack = require( 'webpack' );
var webpackDevMiddleware = require( 'webpack-dev-middleware' );
var webpackHotMiddleware = require( 'webpack-hot-middleware' );
var config = require( './webpack.config' );
var fs = require( 'fs' );
var app = new ( require( 'express' ) )( );
var port = 8000;
var compiler = webpack( config );
var data = fs.readFileSync( 'src/resources/tabs.json', 'utf8');
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));


app.get( "/", function( req, res ){

    res.sendFile( __dirname + '/index.html' );
} );

app.route('/api/json')
    .get( function( req, res ){

        res.json( data );
    });

app.listen( port, function( error ){

    if( error ){

        console.error( error );
    }else{

        console.info( "==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port )
    }
});


