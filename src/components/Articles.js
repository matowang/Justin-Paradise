import React from 'react';
export default class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articleIds: []
        };
    }
    render() {
        return (
            <div>
                <h1>Articles</h1>
                <Article title="title" />
            </div>
        );
    }
}
class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageSource: ""
        }
    }
    componentDidMount() {
        console.log(this.props.imgSrc);
        import('../' + this.props.imgSrc)
            .then(module => {
                console.log(module);
                this.setState({ imageSource: module.default });
            })
            .catch(e => console.log(e));
    }
    render() {
        return (
            <article className="article-card">
                <img src={this.state.imageSource} alt="Article" width="100px"></img>
                <h2>{this.props.title}</h2>
                <p className="article-card__intro">{this.props.intro}</p>
            </article>
        );
    }
}
Article.defaultProps = {
    imgSrc: "assets/drawing.jpg",
    title: "No Title",
    intro: "No Description"
};