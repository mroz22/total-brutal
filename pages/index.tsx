import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Post from "../interfaces/post";
import { Intro } from "../components/dusan/intro";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>TOTALBRUTAL</title>
        </Head>
        <Intro allPosts={allPosts} />
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",

    "price",
    "address",
    "size",
  ]);

  return {
    props: { allPosts },
  };
};
