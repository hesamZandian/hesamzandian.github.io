import Loading from './components/loading';
import { PAGE_ROUTES } from './routes';
import { DarkModeProvider } from './context/DarkModeContext';
import { Routes, Route } from 'react-router-dom';
import useLoading from './hooks/useLoading';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/layouts/navigation';

// pages
import "./styles/globals.css";

const App = () => {
  const { loading } = useLoading();

  return (
    <DarkModeProvider>
      <Loading loading={loading}>
        <BrowserRouter>
          <Navigation />
          <Routes>
            {PAGE_ROUTES.map(({ id, path, element }) => (
              <Route key={id} path={path} element={element} />
            ))}
          </Routes>
        </BrowserRouter>
      </Loading>
    </DarkModeProvider>
  );
};

export default App;
