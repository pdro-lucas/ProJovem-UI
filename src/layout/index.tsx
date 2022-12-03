import { PropsWithChildren } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

interface Props extends PropsWithChildren {
  children?: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
