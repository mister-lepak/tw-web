import { useEffect } from "react";
import Image from "next/image";
import matrixifyText from "utils/matrixifyText";

import photo from "public/images/Try-Photo.webp";
import styles from "./About.module.css";

const About = ({ info }) => {
  useEffect(() => {
    matrixifyText({ text: info.magicHeader, elementId: "magicHeader" });
  }, []);

  return (
    <section className={styles.aboutWrapper}>
      <section className={styles.captionWrapper}>
        <h2 className={styles.header}>
          {info.header}
          <span className={styles.magic} id="magicHeader"></span>
        </h2>
        <p className={styles.details}>
          {info.details.split("*").map((detail, id) => {
            if (id % 2 === 1) {
              return <b key={id}>{detail}</b>;
            }
            return detail;
          })}
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://registry.jsonresume.org/try99"
          className={styles.resume}
        >
          View Resume
        </a>
      </section>
      <div className={styles.photoWrapper}>
        <Image
          src={photo}
          alt="Picture of Try"
          priority
          fill
        />
      </div>
    </section>
  );
};

export default About;
