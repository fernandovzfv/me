import React from 'react';
import Layout from '../../components/Layout';

const BlogPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Blog</h2>
        <p>Stay tuned for exciting content!</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>Under Construction</h3>
          <div className="warning-message" style={{
            marginTop: '2rem',
            padding: '1rem',
            backgroundColor: '#fff3cd',
            color: '#856404',
            borderRadius: '0.25rem',
            border: '1px solid #ffeeba'
          }}>
            <strong>Note:</strong> Our blog is currently under construction. We're working hard to bring you interesting and informative content. Please check back soon!.
          </div>
        </div>
      </section>
    </article>
  </Layout>
);

export default BlogPage;
