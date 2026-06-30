import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import WhatsAppFloat from "./components/WhatsAppFloat";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Architecture from "./pages/Architecture";
import Roadmap from "./pages/Roadmap";
import Solutions from "./pages/Solutions";
import UseCases from "./pages/UseCases";
import Security from "./pages/Security";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/quem-somos"} component={About} />
      <Route path={"/servicos"} component={Services} />
      <Route path={"/arquitetura"} component={Architecture} />
      <Route path={"/roadmap"} component={Roadmap} />
      <Route path={"/solucoes"} component={Solutions} />
      <Route path={"/casos-de-uso"} component={UseCases} />
      <Route path={"/seguranca"} component={Security} />
      {/* Rota antiga de preços agora aponta para a página unificada de Serviços */}
      <Route path={"/precos"} component={Services} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/contato"} component={Contact} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
          <WhatsAppFloat />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
