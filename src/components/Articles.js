import React from 'react';
import { Link } from "react-router-dom";
import articlesData from "../data/articles/articles-data.json";

export default class Articles extends React.Component {
    render() {
        const cardComponents = articlesData.map(a =>
            <Link to={`articles/${a.id}`} key={a.id}>
                <ArticleCard imgSrc={a.frontImg.src} title={a.title} intro={a.intro} />
            </Link>
        );
        return (
            <div id="articles-page" className="article-fonts-style">
                {cardComponents}
            </div>
        );
    }
}
class ArticleCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageSource: ""
        }
    }
    componentDidMount() {
        import('../data/articles' + this.props.imgSrc)
            .then(module => {
                this.setState({ imageSource: module.default });
            })
            .catch(e => console.log(e));
    }
    render() {
        return (
            <article className="article-card">
                <div className="img-wrapper"><img src={this.state.imageSource} alt="Article"></img></div>
                <h2>{this.props.title}</h2>
                <p className="article-card__intro">{this.props.intro}</p>
            </article>
        );
    }
}
ArticleCard.defaultProps = {
    imgSrc: "assets/drawing.jpg",
    title: "No Title",
    intro: "No Description"
};