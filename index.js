// import json server
const jsonserver = require('json-server')

// create a sever for media app

const mediaapp_server = jsonserver.create()

//  set up path for jsone file

const route = jsonserver.router('db.json')

// return middleware used by json server 

const middleware =jsonserver.defaults()

// set up port number

const port = process.env.port || 4000

// use middleware in app

mediaapp_server.use(middleware)
mediaapp_server.use(route)

mediaapp_server.listen(port, ()=>{
    console.log('listening on port'+4000);
})