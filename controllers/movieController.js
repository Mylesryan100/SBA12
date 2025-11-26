const axios = require('axios');

// GET /api/movies/search?title=...
async function searchMovies(req, res) {
  const title = req.query.title;
  if (!title) {
    return res.status(400).json({ error: "Title query parameter is required" });
  }
  try {
    const { data } = await axios.get("http://www.omdbapi.com/", {
      params: {
        s: title,
        apikey: process.env.OMDB_API_KEY
      }
    });
    if (data.Response === "True") {
      return res.json(data.Search);
    } else {
      return res.status(404).json({ error: data.Error || "No movies found" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Could not fetch movies" });
  }
}

// GET /api/movies/:id
async function getMovieDetails(req, res) {
  const id = req.params.id;
  try {
    const { data } = await axios.get('http://www.omdbapi.com/', {
      params: {
        i: id,
        apikey: process.env.OMDB_API_KEY
      }
    });
    if (data.Response === "True") {
      return res.json(data);
    } else {
      return res.status(404).json({ error: data.Error || "Movie not found" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Could not fetch movie details" });
  }
}

module.exports = {
  searchMovies,
  getMovieDetails,
};