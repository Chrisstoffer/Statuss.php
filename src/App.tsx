
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Result from "./pages/Result";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function RequireAuth({ children }: { children: React.ReactNode }) {
  const loggedIn = typeof window !== "undefined" && localStorage.getItem("bgc_loggedin") === "1";
  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
          <Route path="/result" element={<RequireAuth><Result /></RequireAuth>} />
          {/* Placeholder routes for unused pages */}
          <Route path="/course-evaluation" element={<RequireAuth><Home /></RequireAuth>} />
          <Route path="/preregistration" element={<RequireAuth><Home /></RequireAuth>} />
          <Route path="/schedule" element={<RequireAuth><Home /></RequireAuth>} />
          <Route path="/registration" element={<RequireAuth><Home /></RequireAuth>} />
          <Route path="/billing" element={<RequireAuth><Home /></RequireAuth>} />
          <Route path="/admit-card" element={<RequireAuth><Home /></RequireAuth>} />
          <Route path="/profile" element={<RequireAuth><Home /></RequireAuth>} />
          <Route path="/current-status" element={<RequireAuth><Home /></RequireAuth>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
