import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import YourComponent from "../../components/hexaimage";
import Yourself from "../../components/yourself";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Yourself />
      <h1>First Post</h1>
      <YourComponent>text</YourComponent>
      <article>
        <p>
          Beginners may look foolish, but the journey from mr robot to actual
          robot is one that begins with a single step, a mountain becoming a
          mountain, and then on the next step, the mountain isn't a mountain,
          it's lorem ipsum and computer science, and on the next step, it's a
          mountain again.{" "}
          <div className={utilStyles.friends}>
            Reaching the summit is the center{" "}
          </div>{" "}
          and the story goes on from there... <br />
          <h3>The end is when you stop asking "what's next?"</h3>
        </p>
      </article>
      <h2>
        <Link href="/">
          <a>fly home, wingbird</a>
        </Link>
      </h2>
    </Layout>
  );
}
