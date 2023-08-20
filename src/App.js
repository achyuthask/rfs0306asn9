import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [query, setQuery] = useState(' ');
  const [recipes, setRecipes] = useState([]);

  const APP_ID = '498eb447';
  const APP_KEY = 'd2ea386e46a40fa64a051cd43b50068f';
  const API_URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const searchRecipes = async () => {
    try {
      const response = await axios.get(API_URL);
      setRecipes(response.data.hits);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div style={{backgroundColor:"tomato",width:"80%",height:"80%",marginLeft:"10%"}}>
      <h1>Recipe App</h1>
      <div>
        <input
          type="text"
          placeholder="Search for recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchRecipes}>Search</button><br></br>
        <h>search any food item</h>
      </div>
      <div style={{display:"flex",flexWrap:"wrap", justifyContent:"space-between"}}>
        {recipes.map((recipe, index) => (
          <div key={index}>
            <h2>{recipe.recipe.label}</h2>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <p>Calories: {recipe.recipe.calories.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
