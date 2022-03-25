import utilStyles from "../styles/utils.module.css";

const Introduction = () => {
  return (
    <section className={utilStyles.headingMd}>
      <p>[Your Self Introduction]</p>
      <article>
        <h1>
          wingbirds are
          <div className={utilStyles.friends}> friends you fly with</div>
        </h1>
        <p>
          flying friends from around the world, <br />
          one by one, escape from tutorial purgatory. <br />
          理解万岁！千里马？我是白老师的学生。欢迎大家来到老百青云的网网络加油站，
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
