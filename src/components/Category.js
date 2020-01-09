import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
// import axios from "axios";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { connect } from "react-redux";
import { getCategories } from "../_actions/categories";
import API from "../services/Api";

const MenuItem = ({ text }) => {
  return (
    <Button style={{ marginLeft: "10px", marginRight: "10px" }}>{text}</Button>
  );
};

// All items component
// Important! add unique key
export const Menu = (categories, selected) =>
  categories.map(el => {
    const { name, id } = el;

    return (
      <Link style={{ textDecoration: "none" }} to={"/category?id=" + id}>
        <MenuItem text={name} key={id} selected={selected} />
      </Link>
    );
  });

const ArrowLeft = (
  <Button>
    <ChevronLeftIcon />
  </Button>
);
const ArrowRight = (
  <Button>
    <ChevronRightIcon />
  </Button>
);

const selected = "";

class Category extends Component {
  state = {
    selected
  };

  componentDidMount() {
    // API.getCategory().then(res => {
    this.props.dispatch(getCategories());
    // });
  }
  onSelect = key => {
    this.setState({ selected: key });
  };

  render() {
    const { selected } = this.state;
    const { categories } = this.props.categories;

    return (
      <div style={{ marginBottom: 10 }}>
        <ScrollMenu
          data={Menu(categories, selected)}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

export default connect(mapStateToProps)(Category);
