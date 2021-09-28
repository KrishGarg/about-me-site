import React from "react";
import { graphql } from "gatsby";

// Styles
import {
  post,
  title as titleStyle,
  htmlStyle,
  btnsFlex,
  btn,
} from "../../styles/BlogPage.module.scss";

// Components
import Layout from "../../components/Layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Button from "../../components/Button";

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
        <Button to="/" text="Back To Home" className={btn} />
        <Button to="/blog" text="Back To Blogs" className={btn} />
      </div>
      <div className={post}>
        <div className={titleStyle}>{title}</div>
        {date}

        <div className={htmlStyle}>
          <MDXRenderer>{html}</MDXRenderer>
        </div>
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
