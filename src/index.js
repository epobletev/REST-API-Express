const app = require('./server/express');
const config = require('./config/config.json')
const port = process.env.PORT || config.express.port;

app.listen(port, ()=>{
    console.log(`Listening port: ${port}`);
})


module.exports = app;