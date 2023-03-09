import Router from 'next/router';

import { useEffect, useState } from 'react';

export const usePageLoader = () => {
  const [loading, setLoading] = useState(false);

  const start = () => setLoading(true);
  const end = () => setLoading(false);

  useEffect(() => {
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  return [loading, setLoading] as const;
};
