if (process.env.NODE_ENV !== 'production') {
    console.log('loading dev environments');
    
    // require('dotenv').config();
}
// require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./routes');

app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

  // Error Handler
app.use( (err, req, res, next) => {
    console.log('===== ERROR =====');
    console.error(err.stack);
    res.status(500);
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/client/build/index.html'))
  })

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});