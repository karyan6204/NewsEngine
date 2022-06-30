import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  
  static defaultProps={
    country: 'in',
    pageSize : 8,
    category : 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor(){
    super();
    this.state = {
      articles : [],
      loading : false,
      page : 1
    }
  }
  async updateNews(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3b2e6423130a480baabb4ab203031eaa&page=${this.props.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles : parsedData.articles,
      totalResults : parsedData.totalResults,
      loading : false
    });
  }
  async componentDidMount(){
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3b2e6423130a480baabb4ab203031eaa&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   articles : parsedData.articles,
    //   totalResults : parsedData.totalResults,
    //   loading : false
    // });
    this.updateNews();
  }

  handleNextClick = async ()=>{
    // if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){
    //   let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=3b2e6423130a480baabb4ab203031eaa&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading: true});
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   this.setState({
    //     articles : parsedData.articles,
    //     page : this.state.page+1,
    //     loading : false
    //   });
    this.setState({
      page: this.state.page+1
    })
    this.updateNews();
  }

  handlePrevClick = async ()=>{
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=3b2e6423130a480baabb4ab203031eaa&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   articles : parsedData.articles,
    //   page : this.state.page-1,
    //   loading : false
    // });
    this.setState({
      page: this.state.page-1
    })
    this.updateNews();
  }

  render(){
    return (
      <div className = "container">
        <h1 className = "d-flex justify-content-center" style = {{margin: '35px 0px'}}>NewsEngine - Top Headlines</h1>
        <div className = "d-flex justify-content-center">
          {this.state.loading && <Spinner/>}
        </div>
        <div className = "row my-3">
          {!this.state.loading&&this.state.articles.map((element)=>{
            return <div className = "col-md-4" key = {element.url}>
                <NewsItem title = {element.title?element.title:""} description = {element.description?element.description:""} imageUrl = {element.urlToImage?element.urlToImage:"https://cdn.thewire.in/wp-content/uploads/2022/06/29153934/Black_hole_NASA.jpg"} newsUrl = {element.url} author = {element.author} date = {element.publishedAt} source = {element.source.name}/>
            </div>
          })}
        </div>
        <div className = "d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" style={{margin:'4px 0px'}} onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" style={{margin:'4px 0px'}} onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
