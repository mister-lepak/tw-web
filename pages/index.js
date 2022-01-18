import Head from "next/head";
import Layout from "components/layout/Layout";
import About from "components/about/About";
import Category from "components/category/Category";
import Contact from "components/contact/Contact";

const ABOUT_INFO = {
  header: "Hi, I am Try\nFrontend Engineer",
  details:
    "I am a *frontend engineer* based in *Singapore*.\n\nA self learned software engineer tampered with 5 years of multi million dollar project management in Energy industry.\n\nCurrently dealing mostly with *React JS* and *Node JS*. Also equipped with *Python*, *Tableau* and *PowerBI*.",
};

const CATEGORY_INFO = {
  career: {
    header: "Career",
    details: [
      {
        title: "99.co",
        titleUrl: "https://99.co",
        description: "Frontend Engineer",
        subDescription: "Apr 2021 - Present",
      },
      {
        title: "ExxonMobil",
        titleUrl: "https://corporate.exxonmobil.com/",
        description: "Applications Analyst",
        subDescription: "Sep 2020 - Apr 2021",
      },
      {
        title: "ExxonMobil",
        titleUrl: "https://corporate.exxonmobil.com/",
        description: "Project Engineer",
        subDescription: "Jun 2020 - Sep 2020",
      },
      {
        title: "ExxonMobil",
        titleUrl: "https://corporate.exxonmobil.com/",
        description: "Project Controls Engineer",
        subDescription: "Nov 2018 - Aug 2020",
      },
      {
        title: "ExxonMobil",
        titleUrl: "https://corporate.exxonmobil.com/",
        description: "Cost & Schedule Engineer",
        subDescription: "Nov 2015 - Jan 2019",
      },
    ],
  },
  projects: {
    header: "Projects",
    details: [
      {
        title: "Resume Builder",
        titleUrl: "https://mrlepak.github.io/ResumeBuilder",
        description: "",
        subDescription: "View code",
        subDescriptionUrl: "https://github.com/mrlepak/ResumeBuilder",
      },
      {
        title: "Weather Forecast App",
        titleUrl: "https://mrlepak.github.io/weatherApp",
        description: "",
        subDescription: "View code",
        subDescriptionUrl: "https://github.com/mrlepak/weatherApp",
      },
      {
        title: "Memory Game",
        titleUrl: "https://mrlepak.github.io/memoryGame",
        description: "",
        subDescription: "View code",
        subDescriptionUrl: "https://github.com/mrlepak/memoryGame",
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
