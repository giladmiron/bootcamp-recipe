const express = require( 'express' )
const app = express()
const path = require( 'path' )
const request = require( 'request' )

app.use( express.static( path.join( __dirname, 'public' ) ) )

app.get('/sanity', function(req,res){
res.send("OK")
}) 





const port = 8080
app.listen( port, function(){ console.log( `Server is running on port ${ port }!` ) })
