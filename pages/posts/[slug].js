import Head from "next/head";
import React from "react";
import PostContent from "../../components/posts/post-detail/PostContent";
import { getPostData, getPostsFiles } from "../../helpers/posts-util";

const PostDetailPage = (props) => {
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </>
  );
};

export async function getStaticProps(context) {
  const { slug } = context.params;
  const postData = getPostData(slug);
  return { props: { post: postData }, revalidate: 600 };
}

export async function getStaticPaths() {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export default PostDetailPage;
