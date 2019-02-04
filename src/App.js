import React, { Component } from "react";
import { Row, Col } from "react-materialize";
import Header from "./components/Header";
import CategoryContainer from './components/CategoryContainer';

class App extends Component {
  state = {
    categories: [],
    currentCategory: 0
  };
  componentDidMount() {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(res => res.json())
      .then(obj => this.setState({ categories: obj.categories }));
  }

  updateCurrentCategory = (event) => {

  }
  render() {
    return (
      <div>
        <Header />

        <Row>
          <Col s={4} className="grid-example">
            <h4>Categories</h4>
            <CategoryContainer categories={this.state.categories} updateCategory={this.updateCurrentCategory} />
          </Col>

          <Col s={4} className="grid-example">
            <h4>Recipes</h4>
            {/* how can we render recipes here? */}
          </Col>

          <Col s={4} className="grid-example">
            <h4>My Recipes</h4>
            {/* how can we render recipes here? */}
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
