import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { Button, Avatar, colors } from "@material-ui/core";
import ButtonAppBar from "../components/Navbar";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import IconButton from "@material-ui/core/IconButton";
import Follow from "../components/Follow";
import RelatedArticle from "../components/RelatedArticle";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import { getDetailarticles } from "../_actions/articles";

const style = {
  root: {
    flexGrow: 1,
    marginBottom: "20px",
    marginLeft: 300
  },

  toolbarLink: {
    padding: 10,
    flexShrink: 0
  },
  toolbarSecondary: {
    //   justifyContent: 'space-between',
    overflowX: "auto",
    paddingLeft: "50px",
    paddingRight: "50px"
  }
};

class ArticleDetails extends Component {
  query = new URLSearchParams(window.location.search);
  url = this.query.get("id");

  componentDidMount() {
    const id = this.url;

    this.props.dispatch(getDetailarticles(id));
  }

  render() {
    const { detail_articles } = this.props.detailarticles;
    const categories = detail_articles.categoriesId;
    const user = detail_articles.usersId;
    const com = detail_articles.commentId;

    return (
      <div>
        <ButtonAppBar />
        <div style={style.root}>
          <Toolbar
            component="nav"
            variant="dense"
            style={style.toolbarSecondary}
          >
            <img
              src="https://miro.medium.com/max/216/1*IPEsgX_bZKP_7OubdnI7-Q.png"
              style={{ marginRight: 30 }}
            />
            <Button>{categories && categories.name}</Button>
            <Typography>|</Typography>
            <Button>Subscribe</Button>
          </Toolbar>
        </div>

        <div style={{ margin: "0 350px 0 350px" }}>
          <Grid container>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Card style={{ display: "flex", backgroundColor: "#6A0BFF" }}>
                <CardMedia
                  component="img"
                  style={{ flex: 1 }}
                  image={detail_articles.image}
                  title="Live from space album cover"
                />
              </Card>
              <Typography style={{ marginTop: "10px" }}>
                Photo by Olu Eletu
              </Typography>
            </Grid>

            <Grid container style={{ margin: "0 100px 0 250px" }}>
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  style={{ marginBottom: 10, marginTop: 20 }}
                >
                  {detail_articles.title}
                </Typography>
                <Typography style={{ color: "grey" }}>
                  It’s Zuora’s, and it’s brilliant. Here’s why.
                </Typography>
              </Grid>
              <Grid container item xs={12} style={{ marginTop: 20 }}>
                <Grid item xs={1}>
                  <Avatar
                    src="https://miro.medium.com/fit/c/48/48/1*w1dyAyH5Pc_XysvAyd3C_Q.jpeg"
                    style={{ margin: "auto" }}
                  />
                </Grid>
                <Grid item xs={7}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <Typography style={{ marginRight: 5 }}>
                      {user && user.fullname}
                    </Typography>
                    <Button
                      variant="outlined"
                      size="small"
                      style={{ height: 20, fontSize: 9 }}
                    >
                      Follow
                    </Button>
                  </div>
                  <div>
                    <Typography variant="caption">
                      {detail_articles.createdAt}
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <IconButton>
                      <TwitterIcon />
                    </IconButton>
                    <IconButton>
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton>
                      <FacebookIcon />
                    </IconButton>
                    <IconButton>
                      <BookmarkBorderIcon />
                    </IconButton>
                  </div>
                </Grid>

                <Grid item xs={12} style={{ marginTop: 40 }}>
                  <Typography
                    variant="subtitle1"
                    style={{ fontSize: 18, marginRight: 100 }}
                  >
                    {detail_articles.content}
                  </Typography>
                </Grid>

                <Grid item xs={12} style={{ marginTop: 20, marginRight: 100 }}>
                  {com && (
                    <Follow comment={com} idarticles={detail_articles.id} />
                  )}
                  {/* {com.map(item => (
                    <Follow comment={item.comment} />
                  ))} */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div style={{ backgroundColor: "#f2f0eb" }}>
          <div style={{ padding: "40px 350px 0 380px", marginBottom: 30 }}>
            <Typography variant="h5" style={{ fontWeight: "bold" }}>
              more from medium
            </Typography>
            <hr />
          </div>

          <div style={{ display: "flex", padding: "0 350px 0 380px" }}>
            {detail_articles.category_id && (
              <RelatedArticle categoryid={detail_articles.category_id} />
            )}
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    detailarticles: state.articles
  };
};

export default connect(mapStateToProps)(ArticleDetails);
