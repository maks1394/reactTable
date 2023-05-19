import { ReactElement, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PATH_LIST } from 'constants/routes';

const ReactTablePage = lazy(() => import('pages/ReactTablePage'));

function SuspenseWrapper(page: ReactElement) {
  return <Suspense fallback={<div>Loading...</div>}>{page}</Suspense>;
}

export function Router() {
  return (
    <Routes>
      <Route path={PATH_LIST.ROOT} element={SuspenseWrapper(<ReactTablePage />)} />
    </Routes>
  );
}
