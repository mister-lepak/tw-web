import Head from "next/head";
import Layout from "components/layout/Layout";
import About from "components/about/About";
import Category from "components/category/Category";
import Contact from "components/contact/Contact";

const ABOUT_INFO = {
  header: "Hi, I am Try\nSoftware Engineer",
  details:
    "I am a *software engineer* based in *Singapore*.\n\nA self learned engineer tampered with 5 years of multi million dollar project management in Energy industry.\n\nCurrently dealing mostly with *React JS* and *Node JS*. Also equipped with *Python*, *Tableau* and *PowerBI*.",
};

const CATEGORY_INFO = {
  career: {
    header: "Career",
    details: [
      {
        title: "99.co",
        titleUrl: "https://99.co",
        description: "Technical Development Lead",
        subDescription: "Oct 2022 - Present",
      },
      {
        title: "99.co",
        titleUrl: "https://99.co",
        description: "Software Engineer",
        subDescription: "Apr 2021 - Sep 2022",
      },
      {
        title: "ExxonMobil",
        titleUrl: "https://corporate.exxonmobil.com/",
        description: "Applications Analyst",
        subDescription: "Sep 2020 - Apr 2021",
      },
    ],
  },
  projects: {
    header: "Projects",
    details: [
      {
        title: "Resume Builder",
        titleUrl: "https://mister-lepak.github.io/ResumeBuilder",
        description: "",
        subDescription: "View code",
        subDescriptionUrl: "https://github.com/mister-lepak/ResumeBuilder",
      },
      {
        title: "Weather Forecast App",
        titleUrl: "https://mister-lepak.github.io/weatherApp",
        description: "",
        subDescription: "View code",
        subDescriptionUrl: "https://github.com/mister-lepak/weatherApp",
      },
      {
        title: "Memory Game",
        titleUrl: "https://mister-lepak.github.io/memoryGame",
        description: "",
        subDescription: "View code",
        subDescriptionUrl: "https://github.com/mister-lepak/memoryGame",
      },
    ],
  },
};

const Home = () => {
  return (
    <>
      <Head>
        <title>Welcome to Try&apos;s page</title>
        <meta name="description" content="Try's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <About info={ABOUT_INFO} />
          <Category info={CATEGORY_INFO?.projects} />
          <Category info={CATEGORY_INFO?.career} />
          <Contact />
        </main>
      </Layout>
    </>
  );
};

export default Home;
