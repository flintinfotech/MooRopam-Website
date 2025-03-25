import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

// Import created page components
import AboutPage from "./pages/about";
import ProductsPage from "./pages/products";
import ContactPage from "./pages/contact";
import { Alert, Snackbar } from "@mui/material";
import { Provider, useDispatch, useSelector } from "react-redux";
import { RootState, store } from "./store";
import { setReduxState } from "./slice/commonSlice";
import { snackInitialState } from "./helpers";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const { snackState } = useSelector((state: RootState) => state.all);
  const dispatch = useDispatch()

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-scree overflow-x-hidden">
        <Snackbar
          open={snackState.open}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          autoHideDuration={6000}
          onClose={(e) => {
            dispatch(setReduxState({
              name: 'snackState',
              value: { ...snackInitialState }
            }))
          }}
          sx={{
            zIndex: 'calc(var(--top-z-index) + 1)'
          }}
        >
          <Alert
            onClose={(e) => {
              dispatch(setReduxState({
                name: 'snackState',
                value: { ...snackInitialState }
              }))
            }}
            severity={snackState.severity}
            variant="filled"
            sx={{
              width: '100%',
              zIndex: 'calc(var(--top-z-index) + 1)'
            }}
          >
            {snackState.message}
          </Alert>
        </Snackbar>

        <Navbar />
        <main className="flex-grow">
          <Router />
        </main>
        <Footer />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
