import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
  const [articles,setArticles] = useState([]);
  const [loading,setLoading] = useState(true);
  const [page,setPage] = useState(1);
  const [totalResults,setTotalResults] = useState(0);
  
  const capitalize = (element) => {
    return element.charAt(0).toUpperCase() + element.slice(1);
  }

  const updateNews = async()=> {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  }
  useEffect(()=>{
    document.title = `${capitalize(props.category)} - NewsEngine`
    updateNews();
    //eslint-disable-next-line
  },[])

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3b2e6423130a480baabb4ab203031eaa&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  }

    return (
      <>
        <div className="container">

          <h1 className="d-flex justify-content-center" style={{ margin: '26px 0px',marginTop: '95px' }}>NewsEngine - Top {capitalize(props.category)} Headlines</h1>
          {loading && <Spinner />}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<h4><Spinner /></h4>}
          >
            <div className=" row my-3">
              {!loading && articles.map((element,index) => {
                return <div className="col-md-4" key={index}>
                  <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://cdn.thewire.in/wp-content/uploads/2022/06/29153934/Black_hole_NASA.jpg"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
              })}
            </div>
          </InfiniteScroll>
        </div>
      </>
    )
}

export default News

 News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general'
}
 News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}