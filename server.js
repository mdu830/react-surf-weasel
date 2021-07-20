if (process.env.NODE_ENV !== 'production') {
    console.log('loading dev environments');
    
    // require('dotenv').config();
}
// require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./routes');


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  }

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});