// src/hooks/useFetch.js
import { useState, useEffect } from "react";

// 외부에서 데이터 불러올 때 성공/실패/로딩중 화면 작업
export function useFetch(fetcher, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    let alive = true;            // 정리용 flag   
    setLoading(true);
    setError(null);

    async function load() {
      try {
        const result = await fetcher();
        if (alive) setData(result);
      } catch (e) {
        if (alive) setError(e.message);
      } finally {
        if (alive) setLoading(false);
      }
    }
    load();

    return () => { alive = false; };
  }, [reloadKey, ...deps]);

  const reload = () => setReloadKey((k) => k + 1);
  return { data, loading, error, reload };
}