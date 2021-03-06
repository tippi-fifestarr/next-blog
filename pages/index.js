import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Introduction from "../components/introduction";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Introduction />

      <footer>
        <h1 className="title">
          Meet{" "}
          <Link href="/posts/mr-robot">
            <a>Mr. Robot!</a>
          </Link>
        </h1>
      </footer>
    </Layout>
  );
}
