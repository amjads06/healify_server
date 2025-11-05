// 1.import json server
const JSONServer = require('json-server')

// 2. create server for running json file
const healifyServer = JSONServer.create()

// 3.create middleware
const middleware = JSONServer.defaults()

// 6.import db.json file
const router = JSONServer.router("db.json")

// 4. define port to run the server
const PORT =  process.env.PORT || 3000 

// 5. use middleware
healifyServer.use(middleware)

// 7.use router
healifyServer.use(router)

// 8.tell server to losten for client requests
healifyServer.listen(PORT,()=>{
    console.log(`Healify_server started at PORT number ${PORT}`);
    
})