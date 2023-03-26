import React from "react";

import Hero from "../components/homePage/Hero";
import FeaturedPosts from "../components/homePage/FeaturedPosts";
import { getFeaturedPosts } from "../helpers/posts-util";
import Head from "next/head";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Kuldip' Blog</title>
        <meta
          name="description"
          content="I post about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
};

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return { props: { posts: featuredPosts } };
}

export default HomePage;
