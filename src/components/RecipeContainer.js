import React from "react";
import Recipe from "./Recipe";
import v4 from "uuid"; // another way of generating unique ids (useful for keys)

class RecipeContainer extends React.Component {
  updateRecipe = event => {
    console.log(event.target.id);
    this.props.selectRecipe(event);
  };
  renderRecipes = () => {
    return this.props.recipes.map(recipe => {
      return (
        <Recipe
          key={v4()}
          trueRecipe={this.props.myRecipe}
          recipe={recipe}
          selectRecipe={this.updateRecipe}
        />
      );
    });
  };
  render() {
    return <div>{this.renderRecipes()}</div>;
  }
}

export default RecipeContainer;
