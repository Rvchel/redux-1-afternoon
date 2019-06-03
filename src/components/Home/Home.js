import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./../RecipeCard/RecipeCard";
import "./Home.css";
import store from '../../store';

class Home extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState()
    console.log(reduxState.recipeList)
    this.state = {
      recipes: reduxState.recipeList
    };
  }

  render() {
    console.log(this.state.recipes)
    const recipes = this.state.recipes.map((recipe, i) => {
      console.log(recipe)
      return (
        <RecipeCard
          key={i}
          name={recipe.recipeName}
          category={recipe.recipeCategory}
          authorFirst={recipe.authorsFirstName}
          authorLast={recipe.authorsLastName}
          ingredients={recipe.ingredientsList}
          instructions={recipe.instructionsList}
        />
      );
    });
    return (
      <div className="Home">
        <Link to="/add/name">
          <button>Create New Recipe</button>
        </Link>
        <div className="card_container">{recipes}</div>
      </div>
    );
  }
}

export default Home;
