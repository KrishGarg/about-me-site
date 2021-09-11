import React from "react";
import { graphql, Link } from "gatsby";

// Styles
import {
  post,
  title as titleStyle,
  btn as buttonStyle,
} from "../../styles/BlogPage.module.scss";

// Components
import Layout from "../../components/Layout";

const BlogPost = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { date, title },
      html,
    },
  } = data;

  return (
    <Layout title={title}>
      <Link to="/">
        <div className={buttonStyle}>
          <button>Back to Home</button>
        </div>
      </Link>
      <div className={post}>
        <div className={titleStyle}>{title}</div>
        {date}

        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;

export default BlogPost;
