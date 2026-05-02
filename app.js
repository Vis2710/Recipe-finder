const cors = require('cors');
const express = require('express');
const axios = require('axios');
const app = express();
app.use(cors());

// Route to search recipes
app.get('/search', async (req, res) => {
  const query = req.query.q;

  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching recipes');
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});