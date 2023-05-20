import { ReactElement, Suspense, lazy } from 'react';
import { Route, Routes, Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { PATH_LIST } from 'constants/routes';

const ReactTablePage = lazy(() => import('pages/ReactTablePage/ReactTablePage'));
const StartPage = lazy(() => import('pages/StartPage/StartPage'));

function SuspenseWrapper(page: ReactElement) {
  return <Suspense fallback={<div>Loading...</div>}>{page}</Suspense>;
}

export function Router() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path={PATH_LIST.ROOT} element={SuspenseWrapper(<StartPage />)} />
        <Route path={PATH_LIST.TABLE} element={SuspenseWrapper(<ReactTablePage />)} />
      </Routes>
    </>
  );
}

function Navigation() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={1}>
        <Link component={RouterLink} to={PATH_LIST.ROOT}>
          Start page
        </Link>
      </Grid>
      <Grid item xs={1}>
        <Link component={RouterLink} to={PATH_LIST.TABLE}>
          Table
        </Link>
      </Grid>
    </Grid>
  );
}
