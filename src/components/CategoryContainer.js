import React from "react";
import Category from "./Category";
import v4 from "uuid"; // another way of generating unique ids (useful for keys)

class CategoryContainer extends React.Component {
  updateCategory = event => {
    this.props.updateCategory(event);
  };
  renderCategories = () => {
    return this.props.categories.map(category => (
      <Category
        key={parseInt(category.idCategory)}
        category={category}
        updateCategory={this.updateCategory}
      />
    ));
  };
  render() {
    return <div>{this.renderCategories()}</div>;
  }
}

export default CategoryContainer;
