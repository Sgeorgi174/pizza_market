import styles from "./NotFoundComponent.module.scss";

export const NotFoundBlock = () => {
  return (
    <h1 className={styles.root}>
      <span className={styles.title}>=(</span>
      <br />
      404 NOT FOUND
    </h1>
  );
};
