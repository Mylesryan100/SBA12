

const express = require('express');


const {
  searchMovies,
  getMovieDetails
} = require('../controllers/movieController');

const movieRouter = express.Router();

// Routes
// app.use('/api/search', require('./routes/movieRoutes'));
// app.use('/api/movies/:id', require('./routes/movieRoutes'));
/**
 * GET /api/movies/
 */
movieRouter.get('/', (req, res) => {
    res.send('Sending all movies...')
});

// TODO: ==========


/**
 * GET /api/movies/search
 */
movieRouter.get("/search", searchMovies);
    // res.send('Searching...')


/**
 * GET /api/movies/:id
 */
movieRouter.get("/:id", getMovieDetails);
    // res.send(`Data for movie: ${req.params.id}`);







module.exports = movieRouter