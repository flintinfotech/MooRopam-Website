import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./variables.css";
import { ThemeProvider } from "./components/ui/theme-provider";
import { Provider } from "react-redux";
import { store } from "./store";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="light" storageKey="nutrigraze-theme">
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
