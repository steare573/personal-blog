import React from 'react';
import { Link } from 'react-router';
import sortBy from 'lodash/sortBy';
import moment from 'moment';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import access from 'safe-access';
import { config } from 'config';
import SiteSidebar from '../components/SiteSidebar';
import Header from '../components/Header';

class SiteIndex extends React.Component {
  render() {
    const pageLinks = [];
    // Sort pages.
    const sortedPages = sortBy(this.props.route.pages, page => access(page, 'data.date')).reverse();
    sortedPages.forEach((page) => {
      if (access(page, 'file.ext') === 'md' && access(page, 'data.layout') === 'post' && access(page, 'data.publish') === true) {
        const title = access(page, 'data.title') || page.path;
        const description = access(page, 'data.description');
        const datePublished = access(page, 'data.date');
        const category = access(page, 'data.category');

        pageLinks.push((
          <div className="blog-post" key={title}>
            <time dateTime={moment(datePublished).format('MMMM D, YYYY')}>
              {moment(datePublished).format('MMMM YYYY')}
            </time>
            <h2><Link style={{ borderBottom: 'none' }} to={prefixLink(page.path)}>{title}</Link></h2>
            <span className="blog-category">{category}</span>
            <p dangerouslySetInnerHTML={{ __html: description }} />
            <Link className="readmore" to={prefixLink(page.path)}>Read</Link>
          </div>
        ));
      }
    });

    return (
      <div>
        <Helmet title={config.siteTitle} />
        <Header />
        <SiteSidebar {...this.props} />
        <div className="content">
          <div className="main">
            <div className="main-inner">
              <div style={{ display: 'none' }}className="article-title">Articles</div>
              {pageLinks}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SiteIndex.propTypes = {
  route: React.PropTypes.object,
};

export default SiteIndex;
