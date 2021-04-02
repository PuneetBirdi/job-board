const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//Bring in database
const db = require('./config/db');


const app = express();
//Test database connection
db.authenticate().then(()=>{
    console.log('Database connected.')
}).catch((error) =>{
    console.log(error)
})


//Set up body parser
app.use(bodyParser.json({extended: true}))

//ROUTES FOR USER
app.use('/api/users', require('./routes/user'))
app.use('/api/companies', require('./routes/companies'))
// app.use('/api/candidates', require('./routes/candidates'))
// app.use('/api/postings', require('./routes/postings'))
// app.use('/api/applications', require('./routes/applications'))


// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}.`));