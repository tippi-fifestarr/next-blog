import utilStyles from "../styles/utils.module.css";
import Yourself from "./yourself";
import Link from "next/link";

const Introduction = () => {
  return (
    <section className={utilStyles.headingMd}>
      <Yourself />
      <article>
        <h1>
          Hi [if (profile) => username],
          <div className={utilStyles.friends}> I'm Aang.</div>
        </h1>
        <p>
          This is my first hackathon,{" "}
          <div className={utilStyles.friends}> what should I do first? </div>{" "}
          <br />
          <h2>
            <Link href="/instructions">
              <a>1. read teh instructions</a>
            </Link>{" "}
            <br />
            <Link href="/start">
              <a>2. start playing immediately</a>
            </Link>{" "}
            <br />
            <Link href="/start">
              <a>3. create a profile from scratch</a>
            </Link>{" "}
            <br />
            <Link href="/len-frens">
              <a>4. meet lifelong friends</a>
            </Link>{" "}
            <br />
            <Link href="https://ethglobal.tv/">
              <a>5. give up already</a>
            </Link>{" "}
            <br />
          </h2>
          <br />
          在这个世界里，谁能让您十分满意? <br /> Tippi Fifestarr.
          <br /> That's who. <br />
          <h2>
            I am <div className={utilStyles.friends}> Tippi Fifestarr: </div>
            Web 0.1 to 3.0 Hackathon{" "}
            <div className={utilStyles.friends}> Wingbird</div>, iterating...
          </h2>
          <p></p>
        </p>
      </article>
      <p>
        (This is an adaptation of the sample website you can build on{" "}
        <a href="https://nextjs.org/learn">Next.js's tutorial</a>.)
      </p>
    </section>
  );
};

export default Introduction;
