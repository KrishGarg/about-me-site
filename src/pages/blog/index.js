import React from "react";
import { graphql } from "gatsby";

// Componenets
import Layout from "../../components/Layout";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Button from "../../components/Button";

// Styles
import {
  wrapper,
  heading,
  postTitle,
  postDate,
  postItem,
} from "../../styles/BlogList.module.scss";

const BlogList = ({
  data: {
    allMdx: { nodes: posts },
  },
}) => {
  return (
    <Layout title="Blogs">
      <div>
        <Button to="/" text="Back To Home" />
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
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          slug
          title
        }
        id
      }
    }
  }
`;

export default BlogList;
