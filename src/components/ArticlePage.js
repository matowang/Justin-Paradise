import React from 'react';
import articlesData from '../data/articles/articles-data.json';
import ReactMarkdown from 'react-markdown';
import FBLike from './FBLike.js';

import monthNames from '../data/months.json';
import { setHeadAttributes, resetAll } from '../modules/headAttributes.js';

export default class ArticlePage extends React.Component {
    constructor(props) {
        super(props);
        this.articleData = articlesData.find(x => x.id === parseInt(props.match.params.id));
        console.log("Directed to article:" + props.match.params.id);
        this.state = {
            contentComponent: "Loading...",
            frontImageSrc: ""
        }
    }
    componentDidMount() {
        const articleData = this.articleData;
        import(`../data/articles${articleData.contentSrc}`) //gets markdown url
            .then((module) => { //markdown url stored in module
                fetch(module.default).then(response => //gets text from module with module url
                    response.text()
                ).then(text =>
                    this.setState({ contentComponent: <ReactMarkdown escapeHtml={false} source={text} /> }) //renders Markdown text into component 
                )
            })
            .catch(
                e => console.log(e)
            );
        import(`../data/articles${articleData.frontImg.src}`)
            .then(imageSrc => {
                this.setState({ frontImageSrc: imageSrc.default });
            })
            .catch(e => console.log(e));
    }
    componentWillUnmount() {
        resetAll();
    }
    render() {
        const articleData = this.articleData;
        const author = articleData.author;
        const date = articleData.date;
        setHeadAttributes(
            articleData.title,
            articleData.intro,
            `https://www.justinhoong.com${this.state.frontImageSrc}`,
            articleData.frontImg.alt,
            "article",
            `https://www.justinhoong.com/${this.articleData.id}`
        );
        return (
            <article id="article-page" className="article-font-sizing">
                <header>
                    <h1>{articleData.title}</h1>
                    <p id="date">{`${monthNames[parseInt(date.month) - 1].abbreviation} ${date.day}, ${date.year}`}</p>
                    <p id="author-name">{`${author.title} ${author.firstName} ${author.middleName} ${author.lastName}`}</p>
                    <p>{articleData.intro}</p>
                    <img id="front-img" src={this.state.frontImageSrc} alt={articleData.frontImg.alt} />
                    <FBLike address={`https://www.justinhoong.com/articles/${articleData.id}`} />
                </header>
                <hr />
                <div id="content">{this.state.contentComponent}</div>
                <hr />
                <footer id="article_reference">
                    <FBLike address={`https://www.justinhoong.com/articles/${articleData.id}`} />
                </footer>
            </article>
        );
    }
}
ArticlePage.defaultProps = {
    articleID: 123456
}