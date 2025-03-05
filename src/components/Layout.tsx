import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useScrollToTop } from '../hooks/useScrollToTop';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <div className="pt-20">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;