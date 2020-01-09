import React, { Component } from "react";
import { Typography, Avatar, IconButton } from "@material-ui/core";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import axios from "axios";
import { connect } from "react-redux";
import { getArticlesbycategories } from "../_actions/articles";
class Related extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, marginRight: 30 }}>
          <Typography variant="subtitle1" style={{ color: "grey" }}>
            More {this.props.user}
          </Typography>
          <img
            src={this.props.image}
            style={{ width: "376px", height: "250px" }}
          />
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            {this.props.judul}
          </Typography>
          <div style={{ display: "flex" }}>
            <div style={{ flex: 1, marginTop: "8px" }}>
              <Avatar src="https://miro.medium.com/fit/c/48/48/1*ph1uC3brGvGipS-ezA9pfA.jpeg" />
            </div>
            <div style={{ flex: 3, paddingTop: 8 }}>
              <Typography>{this.props.user}</Typography>

              <Typography variant="caption">{this.props.time} </Typography>
            </div>

            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 8,
                marginBottom: 30
              }}
            >
              <IconButton>
                <img
                  src="https://static.thenounproject.com/png/1085294-200.png"
                  style={{ width: 25, height: 25 }}
                />
              </IconButton>
              <Typography variant="caption" style={{ marginRight: 10 }}>
                55K
              </Typography>
              <Typography>|</Typography>
              <IconButton>
                <BookmarkBorderIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class RelatedArticle extends Component {
  componentDidMount() {
    const id = this.props.categoryid;

    this.props.dispatch(getArticlesbycategories(id));
  }
  render() {
    const { articlesbycategories } = this.props.related;
    console.log(articlesbycategories);
    return (
      <div style={{ backgroundColor: "#f2f0eb" }}>
        <div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {articlesbycategories &&
              articlesbycategories
                .slice(0, 3)
                .map(item => (
                  <Related
                    user={item.usersId.fullname}
                    image={item.image}
                    judul={item.title}
                    time={item.createdAt}
                  />
                ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    related: state.articles
  };
};

export default connect(mapStateToProps)(RelatedArticle);
