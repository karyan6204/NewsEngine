import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="container my-2">
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style = {{zIndex: '1'}}>
              {source}
            </span></h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {date}</small></p>
            <a href={newsUrl} target="__blank" className="btn btn-sm btn-primary">In Detail</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
