import React, {Component} from "react";
import {Row, Col} from "react-materialize";
import Header from "./components/Header";
import CategoryContainer from './components/CategoryContainer';

const baseURL = "https://www.themealdb.com/api/json/v1/1"
class App extends Component {
  state = {
    categories: [],
    currentCategory: '',
    recipes: [],
  };

  componentDidMount() {
    fetch(`${baseURL}/categories.php`).then(res => res.json()).then(obj => this.setState({categories: obj.categories}));
  }

  updateCurrentCategory = (event) => {
    console.log(event.target.name)
    this.setState({
      currentCategory: event.target.name.toLowerCase()
    }, () => {
          fetch(`${baseURL}/filter.php?c=${this.state.currentCategory}`)
          .then(res => res.json())
          .then(obj => this.setState({ recipes: obj.meals }))
    });
  }

  render() {
    return (<div>
      <Header/>

      <Row>
        <Col s={4} className="grid-example">
          <h4>Categories</h4>

          <CategoryContainer categories={this.state.categories} updateCategory={this.updateCurrentCategory}/>

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
    </div>);
  }
}

export default App;
