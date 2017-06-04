import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import ReadNext from '../ReadNext';
import './style.css';
import '../../static/css/highlight.css';
import Header from '../Header';
class SitePost extends React.Component {
  render() {
    const { route } = this.props;
    const post = route.page.data.publish === true ? route.page.data : {
      date: moment().format('D MMM YYYY'),
      title: 'Invalid Article',
      body: '<p>This article is not ready for prime-time yet.  Please check back later.</p>',
      author: 'Unknown',
      authorTwitterUrl: 'None',
    };

    return (
      <div>
        <Header />
        <div className="blog-single">
          <div className="text">
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
            <div className="date-published">
              <em>Published {moment(post.date).format('D MMM YYYY')}</em>
            </div>
          </div>
          <div className="footer">
            <ReadNext post={post} {...this.props} />
            <hr />
            <p>
              {config.siteDescr}
              <a href={post.authorTwitterUrl ? post.authorTwitterUrl : config.siteTwitterUrl}>
                <br /> <strong>{post.author ? post.author : config.siteAuthor}</strong> on Twitter
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

SitePost.propTypes = {
  route: React.PropTypes.object.isRequired,
};

export default SitePost;
