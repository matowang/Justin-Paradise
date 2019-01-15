import React from 'react';
import articlesData from '../data/articles/articles-data.json';
import ReactMarkdown from 'react-markdown';

import monthNames from '../data/months.json';


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
        document.title = articleData.title;
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
        document.title = "Justin Paradise";
    }
    render() {
        const articleData = this.articleData;
        const author = articleData.author;
        const date = articleData.date;
        return (
            <article id="article-page" className="article-font-sizing">
                <header>
                    <h1>{articleData.title}</h1>
                    <p id="date">{`${monthNames[parseInt(date.month) - 1].abbreviation} ${date.day}, ${date.year}`}</p>
                    <p id="author-name">{`${author.title} ${author.firstName} ${author.middleName} ${author.lastName}`}</p>
                    <p>{articleData.intro}</p>
                    <img id="front-img" src={this.state.frontImageSrc} alt={articleData.frontImg.alt} />
                </header>
                <hr />
                <div id="content">{this.state.contentComponent}</div>
                <footer id="article_reference">

                </footer>
            </article>
        );
    }
}
ArticlePage.defaultProps = {
    articleID: 123456
}