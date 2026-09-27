import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import ScrollToTop from "@/components/common/ScrollToTop";
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const Challenges = lazy(() => import("./pages/Challenges"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const Locations = lazy(() => import("./pages/Locations"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <MotionConfig reducedMotion="user">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<div className="min-h-screen" aria-busy="true" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="/about" element={<About />} />
              <Route path="/challenges" element={<Challenges />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </MotionConfig>
  </QueryClientProvider>
);

export default App;
