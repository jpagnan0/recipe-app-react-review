import React from "react";
import { Card, CardTitle, Button } from "react-materialize";
import v4 from "uuid";

const Category = props => {
  // console.log(props);
  const handleClick = event => {
    props.updateCategory(event)
    // console.log(event)
  }
  // const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = props
  return (
    <Card
      key={v4()}
      header={<CardTitle key={v4()} image={props.category.strCategoryThumb} />}
      title={props.category.strCategory}
      actions=
      {[
        <Button name={props.category.strCategory} key={v4()} onClick={handleClick} waves="light">
          Find Recipes
        </Button>
      ]}>
      {props.category.strCategoryDescription}
      </Card>
  );
};

export default Category;
