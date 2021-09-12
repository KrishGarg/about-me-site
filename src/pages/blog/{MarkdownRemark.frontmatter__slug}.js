import React from "react";
import { graphql } from "gatsby";

// Styles
import {
  post,
  title as titleStyle,
  btn as buttonStyle,
  htmlStyle,
  btnsFlex,
} from "../../styles/BlogPage.module.scss";

// Components
import Layout from "../../components/Layout";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const BlogPost = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { date, title },
      html,
    },
  } = data;

  return (
    <Layout title={title}>
      <div className={btnsFlex}>
        <AniLink
          className={buttonStyle}
          hex="#1d1d1d"
          duration={1}
          paintDrip
          to="/"
        >
          <button>Back to Home</button>
        </AniLink>
        <AniLink
          className={buttonStyle}
          hex="#1d1d1d"
          duration={1}
          paintDrip
          to="/blog"
        >
          <button>Back to Blogs</button>
        </AniLink>
      </div>
      <div className={post}>
        <div className={titleStyle}>{title}</div>
        {date}

        <div
          className={htmlStyle}
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
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
