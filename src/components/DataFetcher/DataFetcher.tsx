import { useEffect, useState, useRef } from "react";
import FetcherControls from "./FetcherControls";
import CatImage from "./CatImage";
import { FetcherContainer, ButtonContainer } from "./styles/DataFetcherStyles";
import { fetchCatImage } from "../../utils/fetchCat";

export default function DataFetcher() {
  const [imageUrl, setImageUrl] = useState<string | undefined>();
  const [status, setStatus] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleFetch = async () => {
    try {
      const url = await fetchCatImage();
      setImageUrl(url);
    } catch (e) {
      console.error("error fetching cat image:", e);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  useEffect(() => {
    if (autoRefresh) {
      intervalRef.current = setInterval(() => {
        handleFetch();
      }, 5000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [autoRefresh]);

  return (
    <FetcherContainer>
      <FetcherControls
        status={status}
        setStatus={setStatus}
        autoRefresh={autoRefresh}
        setAutoRefresh={setAutoRefresh}
      />
      <ButtonContainer onClick={handleFetch} disabled={!status}>
        Get cat
      </ButtonContainer>
      <CatImage imageUrl={imageUrl} />
    </FetcherContainer>
  );
}
