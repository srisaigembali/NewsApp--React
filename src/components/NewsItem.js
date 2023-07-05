import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let {
      title,
      description,
      imageUrl,
      newsUrl,
      author,
      date,
      source,
      category,
    } = this.props;

    let type = 'danger';
    if (category === 'business') type = 'warning';
    else if (category === 'general') type = 'primary';
    else if (category === 'entertainment') type = 'success';
    else if (category === 'health') type = 'warning';
    else if (category === 'sports') type = 'primary';
    else if (category === 'technology') type = 'success';

    return (
      <div className="my-3">
        <div className="card">
          <div>
            <span
              className={`badge rounded-pill bg-${type}`}
              style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'absolute',
                right: '0',
              }}
            >
              {source}
            </span>
          </div>
          <img
            src={
              imageUrl ? imageUrl : require('../assets/images/defaultimg.jpg')
            }
            className="card-img-top"
            alt="..."
            style={{ height: '250px' }}
          />
          <div className="card-body">
            <h5 className="card-title">{title ? title.slice(0, 45) : ''} </h5>
            <p className="card-text">
              <small className="text-body-secondary">
                By <b>{author ? author : 'Unknown'}</b> on{' '}
                {new Date(date).toUTCString()}
              </small>
            </p>
            <p className="card-text">
              {description ? description.substr(0, 88) : ''}
            </p>
            <a
              href={newsUrl}
              className="btn btn-sm btn-dark"
              target="_blank"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
