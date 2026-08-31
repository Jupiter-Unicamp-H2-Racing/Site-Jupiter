import { useEffect, useState } from 'react';

/**
 * Hook simples para consumir uma função assíncrona (tipicamente um método
 * de `services/api.js`) e expor os estados de carregamento/erro/dados.
 *
 * @param {() => Promise<any>} fetcher
 * @param {any[]} deps
 */
export function useFetch(fetcher, deps = []) {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('loading'); // 'loading' | 'success' | 'error'
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    setStatus('loading');
    fetcher()
      .then((result) => {
        if (cancelled) return;
        setData(result);
        setStatus('success');
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err);
        setStatus('error');
      });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { data, status, error };
}

export default useFetch;
