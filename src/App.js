import React, { Component } from "react";
import { Row, Col } from "react-materialize";
import Header from "./components/Header";
import CategoryContainer from "./components/CategoryContainer";
import RecipeContainer from "./components/RecipeContainer";

const baseURL = "https://www.themealdb.com/api/json/v1/1";

class App extends Component {
  state = {
    categories: [],
    currentCategory: "",
    recipes: [],
    myRecipes: []
  };

  componentDidMount() {
    fetch(`${baseURL}/categories.php`)
      .then(res => res.json())
      .then(obj => this.setState({ categories: obj.categories }));
  }

  updateCurrentCategory = event => {
    console.log(event.target.name);
    this.setState(
      {
        currentCategory: event.target.name.toLowerCase()
      },
      () => {
        fetch(`${baseURL}/filter.php?c=${this.state.currentCategory}`)
          .then(res => res.json())
          .then(obj => this.setState({ recipes: obj.meals }));
      }
    );
  };

  selectedRecipe = event => {
    console.log(event.target.id);
    if (event.target.name) {
      console.log("remove me");
    } else {
      const foundRecipe = this.state.recipes.find(recipe => {
        return recipe.idMeal === event.target.id;
      });
      console.log(foundRecipe);
      this.setState(
        {
          myRecipes: [...this.state.myRecipes, foundRecipe]
        },
        () => console.log(this.state.myRecipes)
      );
    }
  };

  render() {
    return (
      <div>
        <Header />

        <Row>
          <Col s={4} className="grid-example">
            <h4>Categories</h4>

            <CategoryContainer
              categories={this.state.categories}
              updateCategory={this.updateCurrentCategory}
            />
          </Col>

          <Col s={4} className="grid-example">
            <h4>Recipes</h4>
            <RecipeContainer
              recipes={this.state.recipes}
              selectRecipe={this.selectedRecipe}
            />
          </Col>

          <Col s={4} className="grid-example">
            <h4>My Recipes</h4>
            <RecipeContainer
              recipes={this.state.myRecipes}
              myRecipe={true}
              selectRecipe={this.selectedRecipe}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
