import { GlobalStyle } from "./styles/global";

import { Dashboard } from "./components/Dashboard/Dashboard";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <Footer />
      <GlobalStyle />
    </>
  );
}
