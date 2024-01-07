import styles from "./Category.module.css";

const Category = ({ info }) => (
  <section className={styles.categoryWrapper}>
    <h2 className={styles.header}>{info?.header}</h2>
    <div className={styles.details}>
      {info?.details?.map((detail, id) => (
        <div key={`${info?.header}Detail${id}`}>
          <p className={styles.title} key={`${info?.header}Title${id}`}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={detail?.titleUrl}
            >
              {detail.title}
            </a>
          </p>
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
            {detail?.subDescriptionUrl && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={detail?.subDescriptionUrl}
              >
                {detail.subDescription}
              </a>
            )}
            {!detail?.subDescriptionUrl && detail.subDescription}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Category;
