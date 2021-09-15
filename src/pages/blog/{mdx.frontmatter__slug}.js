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
import { MDXRenderer } from "gatsby-plugin-mdx";

const BlogPost = ({ data }) => {
  const {
    mdx: {
      body: html,
      frontmatter: { date, title },
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

        <MDXRenderer className={htmlStyle}>{html}</MDXRenderer>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

export default BlogPost;
