import { ReactNode } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import StickyMobileCTA from "@/components/common/StickyMobileCTA";

interface LayoutProps {
  children: ReactNode;
  transparentHeader?: boolean; // Pass true for pages with hero images (like Home)
  hideStickyMobileCTA?: boolean;
}

const Layout = ({ children, transparentHeader = false, hideStickyMobileCTA = false }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent={transparentHeader} />
      <main className="flex-1 pb-20 md:pb-0">
        {children}
      </main>
      <Footer />
      {!hideStickyMobileCTA && <StickyMobileCTA />}
    </div>
  );
};

export default Layout;
