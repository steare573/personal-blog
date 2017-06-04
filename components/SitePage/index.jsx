import React from 'react';
import SiteSidebar from '../SiteSidebar';
import './style.css';
import Header from '../Header';

class SitePage extends React.Component {
  render() {
    const { route } = this.props;
    const post = route.page.data;

    return (
      <div>
        <Header />
        <SiteSidebar {...this.props} />
        <div className="content">
          <div className="main">
            <div className="main-inner">
              <div className="blog-page">
                <div className="text">
                  <h1>{post.title}</h1>
                  <div dangerouslySetInnerHTML={{ __html: post.body }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SitePage.propTypes = {
  route: React.PropTypes.object.isRequired,
};

export default SitePage;
