import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Mentordetail from "./Mentordetail";
import  MentorProfileDetail from "./MentorProfileDetail";
import Mysubjectdetail from "./Mysubjectdetail";
import JuniorOlympiad from "./JuniorOlympiad";
import SelectedSubjects from "./SelectedSubjects";
import LocalTutor from "./LocalTutor";


import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/mentordetail" component={Mentordetail} />
         <Route path="/mentorprofile" component={MentorProfileDetail} />
           <Route path="/mysubjectdetail" component={ Mysubjectdetail} />
              <Route path="/selectedsubjects" component={ SelectedSubjects} />
              <Route path="/juniorolympiad" component={   JuniorOlympiad} />
  <Route path="/localtutor" component={LocalTutor} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
