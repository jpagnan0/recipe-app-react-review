import React from "react";
import Category from "./Category";
import v4 from "uuid"; // another way of generating unique ids (useful for keys)

class CategoryContainer extends React.Component {
  renderCategories = () => {
    console.log("look at this -->", this.props.categories);
    return this.props.categories.map(category => (
      <Category key={parseInt(category.idCategory)} category={category} />
    ));
    // console.log(this.props)
  };
  render() {
    return <div>{this.renderCategories()}</div>;
  }
}

export default CategoryContainer;
