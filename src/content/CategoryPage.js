import React, { Component } from "react";
import ButtonAppBar from "../components/Navbar";
import Grid from "@material-ui/core/Grid";
// import Paper from '@material-ui/core/Paper'
import Typhography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Recommendation from "./Recommendation";
// import { recommendation } from "./Home";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { getCategoriesArticles } from "../_actions/categories";
import API from "../services/Api";

export function BannerCategory(props) {
  if (props.index % 2 === 0) {
    return (
      <Grid item md={12}>
        <CardActionArea>
          <Card style={{ display: "flex" }}>
            <div
              style={{
                flex: 1,
                textAlign: "center",
                alignItems: "center"
              }}
            >
              <CardContent>
                <Typhography
                  variant="h5"
                  style={{
                    color: "black",
                    paddingTop: "20px",
                    fontWeight: "bold"
                  }}
                >
                  {props.judul}
                </Typhography>
                <Typhography
                  variant="subtitle1"
                  style={{ color: "black", paddingTop: "20px" }}
                >
                  {props.isi}
                </Typhography>

                <Typhography
                  variant="subtitle1"
                  style={{ color: "black", paddingTop: "20px" }}
                >
                  {props.user}
                </Typhography>

                <Typhography
                  variant="subtitle1"
                  style={{ color: "black", paddingTop: "20px" }}
                >
                  {props.time}
                </Typhography>
              </CardContent>
            </div>
            <CardMedia
              style={{ flex: 2 }}
              image={props.url}
              title="Live from space album cover"
            />
          </Card>
        </CardActionArea>
      </Grid>
    );
  } else {
    return (
      <Grid item md={12}>
        <CardActionArea>
          <Card style={{ display: "flex", backgroundColor: "#6A0BFF" }}>
            <CardMedia
              style={{ flex: 2 }}
              image={props.url}
              title="Live from space album cover"
            />
            <div
              style={{
                flex: 1,
                textAlign: "center",
                alignItems: "center"
              }}
            >
              <CardContent>
                <Typhography
                  variant="h5"
                  style={{
                    color: "white",
                    paddingTop: "20px",
                    fontWeight: "bold"
                  }}
                >
                  {props.judul}
                </Typhography>

                <Typhography
                  variant="subtitle1"
                  style={{ color: "white", paddingTop: "20px" }}
                >
                  {props.isi}
                </Typhography>

                <Typhography
                  variant="subtitle1"
                  style={{ color: "white", paddingTop: "20px" }}
                >
                  {props.user}
                </Typhography>

                <Typhography
                  variant="subtitle1"
                  style={{ color: "white", paddingTop: "20px" }}
                >
                  {props.time}
                </Typhography>
              </CardContent>
            </div>
          </Card>
        </CardActionArea>
      </Grid>
    );
  }
}

class CategoryPage extends Component {
  query = new URLSearchParams(window.location.search);
  url = this.query.get("id");

  // constructor() {
  //   super();
  //   this.state = {
  //     categoryArticles: [],
  //     showArticles: []
  //   };
  // }

  componentDidMount() {
    const id = this.url;
    // API.getCategoryArticles(id).then(res => {
    this.props.dispatch(getCategoriesArticles(id));
    // });
  }

  render() {
    // const articlesbycategory = this.state.categoryArticles;

    const { categories_articles } = this.props.categories;
    const article = categories_articles.articlesId;

    return (
      <div>
        <div style={{ margin: "0 0 80px 0" }}>
          <ButtonAppBar />
        </div>
        <div style={{ margin: "0 350px 0 350px" }}>
          <Grid container spacing={2}>
            <Grid container item spacing={2}>
              <Grid item>
                <Typography
                  variant="h4"
                  style={{ textTransform: "uppercase", fontWeight: "bold" }}
                >
                  {categories_articles.name}
                </Typography>
              </Grid>
              <Grid item sm>
                <div style={{ maxWidth: 450, paddingTop: 0 }}>
                  <Typhography variant="h6">
                    The front lines of the future. A Medium publication about
                    tech and science.
                  </Typhography>
                </div>
              </Grid>
              <Grid item>
                <div style={{ marginRight: 20, marginTop: 10 }}>
                  <Button variant="outlined" size="small">
                    Follow
                  </Button>
                </div>
              </Grid>
            </Grid>

            {article &&
              article
                .slice(0, 3)
                .map((item, index) => (
                  <BannerCategory
                    url={item.image}
                    index={index}
                    judul={item.title}
                    isi={item.content.substring(0, 150)}
                    user={item.usersId.fullname}
                    time={item.createdAt}
                  />
                ))}

            <Grid item md={12}>
              <CardActionArea>
                <Card style={{ display: "flex", backgroundColor: "#DAF832" }}>
                  <div
                    style={{
                      flex: 1,
                      alignItems: "center",
                      marginLeft: "200px",
                      marginRight: "300px"
                    }}
                  >
                    <CardContent>
                      <Typhography
                        variant="h5"
                        style={{ color: "black", paddingTop: "20px" }}
                      >
                        Architects Are Playing With the Future of Design in
                        Video Games
                      </Typhography>

                      <Typhography
                        variant="subtitle1"
                        style={{ color: "black", paddingTop: "20px" }}
                      >
                        Game worlds can be blueprints for the real world,
                        liberating spaces where rules can be reinvented and the
                        invisible made visible
                      </Typhography>

                      <Typhography
                        variant="subtitle1"
                        style={{ color: "black", paddingTop: "20px" }}
                      >
                        Thomas McMullan
                      </Typhography>

                      <Typhography
                        variant="subtitle1"
                        style={{ color: "black", paddingTop: "20px" }}
                      >
                        Dec 9 · 6 min read
                      </Typhography>
                    </CardContent>
                  </div>
                </Card>
              </CardActionArea>
            </Grid>
          </Grid>
        </div>

        <div style={{ margin: "40px 600px 0 600px" }}>
          <div style={{ marginBottom: "40px" }}>
            <hr />
          </div>

          {article &&
            article.map(item => (
              <Recommendation
                url={item.image}
                judul={item.title}
                content={item.content.substring(0, 60)}
                user={item.usersId.fullname}
                time={item.createdAt}
              />
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

export default connect(mapStateToProps)(CategoryPage);
