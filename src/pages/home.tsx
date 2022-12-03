import { ReactElement } from 'react';
import Navbar from '../components/Navbar';
import type { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return <h1>Ola Pedro</h1>;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Navbar />
      {page}
    </>
  );
};

export default Home;
