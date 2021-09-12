import React from "react";
import { graphql } from "gatsby";

// Componenets
import Layout from "../../components/Layout";
import AniLink from "gatsby-plugin-transition-link/AniLink";

// Styles
import {
  wrapper,
  heading,
  postTitle,
  postDate,
  postItem,
  buttonStyle,
} from "../../styles/BlogList.module.scss";

const BlogList = ({
  data: {
    allMarkdownRemark: { nodes: posts },
  },
}) => {
  return (
    <Layout title="Blogs">
      <div>
        <AniLink
          hex="#1d1d1d"
          duration={1}
          paintDrip
          to="/"
          className={buttonStyle}
        >
          <button>Back to Home</button>
        </AniLink>
      </div>
      <div className={wrapper}>
        <header className={heading}>Blogs</header>
        <hr />
        {posts.map((post) => {
          return (
            <AniLink
              hex="#1d1d1d"
              duration={1}
              paintDrip
              to={`/blog/${post.frontmatter.slug}`}
              key={post.id}
              className={postItem}
            >
              <div className={postTitle}>{post.frontmatter.title}</div>
              <div className={postDate}>{post.frontmatter.date}</div>
              <hr />
            </AniLink>
          );
        })}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
      }
    }
  }
`;

export default BlogList;
