import Head from "next/head";
import Layout from "components/layout/Layout";
import About from "components/about/About";
import Category from "components/category/Category";
import Contact from "components/contact/Contact";

const ABOUT_INFO = {
  header: "Hi, I am ",
  magicHeader: "Try Wijono",
  details:
    "I am a *software engineer* based in *Singapore*.\n\nAn avid fan of Star Wars and Big Bang Theory.\n\nMy tech fortes are *Next JS*, *React JS* ,*Node JS* and *Python*.",
};

const CATEGORY_INFO = {
  career: {
    header: "Career",
    details: [
      {
        title: "99.co",
        titleUrl: "https://99.co",
        description: "Frontend Engineering Lead",
        subDescription: "Jan 2023 - Present",
      },
      {
        title: "99.co",
        titleUrl: "https://99.co",
        description: "Lead Developer",
        subDescription: "Oct 2022 - Dec 2022",
      },
      {
        title: "99.co",
        titleUrl: "https://99.co",
        description: "Software Engineer",
        subDescription: "Apr 2021 - Sep 2022",
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

function Home() {
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
          <Category info={CATEGORY_INFO?.career} />
          <Category info={CATEGORY_INFO?.projects} />
          <Contact />
        </main>
      </Layout>
    </>
  );
}

export default Home;
