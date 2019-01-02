import React from 'react';
import articlesData from '../data/articles/articles-data.json';
import ReactMarkdown from 'react-markdown';

export default class ArticlePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contentComponent: "Loading..."
        }
    }
    componentDidMount() {
        const articleData = articlesData.find(x => x.id === this.props.articleID);
        import(`../data/articles${articleData.contentSrc}`) //gets markdown url
            .then((module) => { //markdown url stored in module
                fetch(module.default).then(response => //gets text from module with module url
                    response.text()
                ).then(text =>
                    this.setState({ contentComponent: <ReactMarkdown source={text} /> }) //renders Markdown text into component 
                )
            }
            ).catch(
                e => console.log(e)
            );
    }
    render() {
        const articleData = articlesData.find(x => x.id === this.props.articleID);
        return (
            <div className="article-page">
                <h1>{articleData.title}</h1>
                <p>{articleData.intro}</p>
                {this.state.contentComponent}
            </div>
        );
    }
}
ArticlePage.defaultProps = {
    articleID: 123456
}