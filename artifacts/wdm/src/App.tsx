import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/index";
import About from "@/pages/about";
import WhatWeDo from "@/pages/what-we-do";
import SectorExpertise from "@/pages/sector-expertise";
import SectorDetail from "@/pages/sector-detail";
import Projects from "@/pages/projects";
import Insights from "@/pages/insights";
import Podcasts from "@/pages/podcasts";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/what-we-do" component={WhatWeDo} />
      <Route path="/sector-expertise" component={SectorExpertise} />
      <Route path="/sector/:id" component={SectorDetail} />
      <Route path="/projects" component={Projects} />
      <Route path="/insights" component={Insights} />
      <Route path="/podcasts" component={Podcasts} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
