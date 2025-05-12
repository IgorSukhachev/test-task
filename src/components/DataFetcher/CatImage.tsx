import styles from "./styles/CatImage.module.css";

export default function CatImage({ imageUrl }: { imageUrl?: string }) {
  return (
    <div className={styles.container}>
      {imageUrl ? (
        <img src={imageUrl} alt='Cat' className={styles.image} />
      ) : (
        <p>No image available</p>
      )}
    </div>
  );
}
