import styles from "./Category.module.css";

const Category = ({ info }) => (
  <section className={styles.categoryWrapper}>
    <h2 className={styles.header}>{info?.header}</h2>
    <div className={styles.details}>
      {info?.details?.map((detail, id) => (
        <div key={`${info?.header}Detail${id}`}>
          <h4 className={styles.title} key={`${info?.header}Title${id}`}>
            <a href={detail?.titleUrl}>{detail.title}</a>
          </h4>
          <b
            className={styles.description}
            key={`${info?.header}Description${id}`}
          >
            {detail.description}
          </b>
          <p
            className={styles.subDescription}
            key={`${info?.header}SubDescription${id}`}
          >
            <a href={detail?.subDescriptionUrl}>{detail.subDescription}</a>
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Category;
