import Head from "next/head";
import React from "react";

import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../helpers/posts-util";

const AllPostsPage = (props) => {
  return (
    <>
      <Head></Head>
      <title>All Posts</title>
      <meta
        name="description"
        content="A list of all programming-related tutorials and posts!"
      />
      <AllPosts posts={props.posts} />
    </>
  );
};

export async function getStaticProps() {
  const allPosts = getAllPosts();
  return { props: { posts: allPosts } };
}

export default AllPostsPage;
