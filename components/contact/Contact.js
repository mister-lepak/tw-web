import Image from "next/image";

import arrow from "public/arrow.svg";
import styles from "./Contact.module.css";

const Contact = () => (
  <section className={styles.contactWrapper}>
    <div className={styles.caption}>
      I am thrilled to connect with you{" "}
      <span>
        <Image
          src={arrow}
          height={20}
          width={24}
          className={styles.arrow}
          alt="contact-arrow"
        />
      </span>
    </div>

    <div className={styles.details}>
      <a href="mailto:try.wijono@gmail.com">try.wijono@gmail.com</a>
      <br />
      <a
        href="https://www.linkedin.com/in/try-wijono"
        className={styles.resume}
      >
        View Resume
      </a>
    </div>
  </section>
);
export default Contact;
