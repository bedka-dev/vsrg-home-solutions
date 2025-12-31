import { ReactNode } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

interface LayoutProps {
  children: ReactNode;
  transparentHeader?: boolean; // Pass true for pages with hero images (like Home)
}

const Layout = ({ children, transparentHeader = false }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent={transparentHeader} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
