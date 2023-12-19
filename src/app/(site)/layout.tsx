// import { Header } from '@/components/landing-page/header';
import React from 'react';
// import Header from '@/components/landing-page/header';
// import { Header } from '@/components/landing-page/header';

import { Footer } from '@/components/landing-page/footer';
import Header from '@/components/landing-page/header';
// import Header

const HomePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default HomePageLayout;
