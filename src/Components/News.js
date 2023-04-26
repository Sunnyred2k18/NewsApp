import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = []

    constructor() {
        super();
        console.log("Im a construtor")
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount() {
        console.log("CDM");
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9fc3535193334023a2b205323ba6b22c";
        //  let url2 = "https://newsapi.org/v2/everything?q=tesla&from=2023-03-24&sortBy=publishedAt&apiKey=9fc3535193334023a2b205323ba6b22c"
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({ articles: parsedData.articles })
    }
    handlePreviousClick = async () => {
        console.log("Previous")
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9fc3535193334023a2b205323ba6b22c&page=${this.state.page - 1}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
        console.log("previous done")
    }
    
    handleNextClick = async () => {
        console.log("Next")
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9fc3535193334023a2b205323ba6b22c&page=${this.state.page + 1}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);

        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })
        console.log("Next done")
    }

    render() {
        return (
            <div className='container my-3'>
                <h2>Top Headlines</h2>
                <div className='row'>
                    {this.state.articles.map((element) => {
                        return <div className='col md-4' key={element.url}>
                            <NewsItem title={element.title} description={element.description}
                                imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick} >&larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News