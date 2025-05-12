import styles from "./styles/FetcherControls.module.scss";

interface FetcherControlsProps {
  status: boolean;
  setStatus: (value: boolean) => void;
  autoRefresh: boolean;
  setAutoRefresh: (value: boolean) => void;
}

export default function FetcherControls({
  status,
  setStatus,
  autoRefresh,
  setAutoRefresh,
}: FetcherControlsProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <input type='checkbox' checked={status} onChange={(e) => setStatus(e.target.checked)} />
        Enabled
      </label>
      <label className={styles.label}>
        <input
          type='checkbox'
          checked={autoRefresh}
          onChange={(e) => setAutoRefresh(status && e.target.checked)}
          disabled={!status}
        />
        Auto Refresh every 5 seconds
      </label>
    </div>
  );
}
