// importing express with keyword "require"
const express = require('express');
const morgan = require('morgan')

// const { searchMovies, getMovieById } = require('../controllers/movieController')

// Set up all VARIABLES IN THE .env file
require('dotenv').config();

const PORT = process.env.PORT || 4000;

const app = express()

// console.log(process.env.NODE_ENV);

// MIDDLEWARES
app.use(morgan('dev')); // logger
app.use(express.json()); // body parser

// ROUTES
app.use('/api/user', require('./routes/userRoutes'));
app.use('/api/movies', require('./routes/movieRoutes'));

// Use this route to setup the API documentation
app.get('/', (req, res) => {
    res.send('Welcome to my API!');
});

// app.get("/api/movies/:id", async (req, res) => {
//   try {
//     const response = await axios.get(
//       "https://www.omdbapi.com/?i=tt3896198&apikey=f36b9450"
//     );

//     res.json(response.data);
//   } catch (error) {
//     // console.log(error);

//     // 400-500 range errors
//     if (error.response) {
//       console.log(
//         "API Error:",
//         error.response.status,
//         error.response.data,
//         error.message
//       );
//       res
//         .status(error.response.status)
//         .json({ message: "Error fetching data from external API." });
//     } else {
//       console.error("Network Error:", error.message);
//       res.status(500).json({ message: "A network error occurred." });
//     }
//   }
// });

// app.get("/api/movies/:id", async (req, res) => {
//   try {
//     const response = await axios.get(
//       "https://www.omdbapi.com/?i=tt3896198&apikey=f36b9450"
//     );

//     res.json(response.data);
//   } catch (error) {
//     // console.log(error);

//     // 400-500 range errors
//     if (error.response) {
//       console.log(
//         "API Error:",
//         error.response.status,
//         error.response.data,
//         error.message
//       );
//       res
//         .status(error.response.status)
//         .json({ message: "Error fetching data from external API." });
//     } else {
//       console.error("Network Error:", error.message);
//       res.status(500).json({ message: "A network error occurred." });
//     }
//   }
// });

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`); 
});


