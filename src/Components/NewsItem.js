import React from 'react'

const NewsItem = (props)=> {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="container my-2">
        
        
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <span className="badge rounded-pill bg-danger ">{source}</span>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {date}</small></p>
            <a href={newsUrl} target="__blank" className="btn btn-sm btn-primary">In Detail</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem
