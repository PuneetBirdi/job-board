const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();


//Set up body parser
app.use(bodyParser.json({extended: true}))
//Init Midddleware
app.use(express.json({ extended: false }));

//ROUTES FOR USER
app.use('/api/users', require('./routes/user'))
app.use('/api/auth', require('./routes/auth'))
// app.use('/api/companies', require('./routes/companies'))
app.use('/api/profile', require('./routes/profile'))
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