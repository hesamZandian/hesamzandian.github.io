import { DarkModeProvider } from "./context/DarkModeContext";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <DarkModeProvider>
      <Home />
    </DarkModeProvider>
  );
};

export default App;
