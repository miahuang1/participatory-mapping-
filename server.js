// Import the 'app' module from the './src/app' file
const app = require('./src/app');

// Set the port for the server to listen on, defaulting to 3000 if not provided
const port = process.env.PORT || 3000;

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log('application running on', port);
});

const cors = require('cors');
app.use(cors({
  origin: 'https://participatory-mapping-project-5eb27b07b1d4.herokuapp.com/'}));