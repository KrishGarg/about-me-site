import React from "react";
import { graphql } from "gatsby";

// Componenets
import Layout from "../../components/Layout";
import { Link } from "gatsby";

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
      <div className={buttonStyle}>
        <Link to="/">
          <button>Back to Home</button>
        </Link>
      </div>
      <div className={wrapper}>
        <header className={heading}>Blogs</header>
        <hr />
        {posts.map((post) => {
          return (
            <Link
              to={`/blog/${post.frontmatter.slug}`}
              key={post.id}
              className={postItem}
            >
              <div className={postTitle}>{post.frontmatter.title}</div>
              <div className={postDate}>{post.frontmatter.date}</div>
              <hr />
            </Link>
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
