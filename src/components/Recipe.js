import React from "react";
import { Card, Button, CardTitle } from "react-materialize";
import v4 from "uuid";

const Recipe = props => {
  const handleClick = event => {
    console.log(event.nativeEvent.target);
    props.selectRecipe(event);
  };

  const renderFunction = () => {
    if (props.trueRecipe) {
      return [
        <Button
          id={props.recipe.idMeal}
          name={"remove"}
          key={v4()}
          onClick={handleClick}
          waves="light"
        >
          Remove from myRecipes
        </Button>
      ];
    } else {
      return [
        <Button
          id={props.recipe.idMeal}
          key={v4()}
          onClick={handleClick}
          waves="light"
        >
          Add to myRecipes
        </Button>
      ];
    }
  };
  return (
    <Card
      key={v4()}
      header={<CardTitle key={v4()} image={props.recipe.strMealThumb} />}
      title={props.recipe.strMeal}
      actions={renderFunction()}
    />
  );
};

export default Recipe;
