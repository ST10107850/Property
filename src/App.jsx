import "@fortawesome/fontawesome-free/css/all.min.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { MainLayout } from "./Layout/MainLayout";
import { HomePage } from "./Pages/HomePage";
import {ProductDetailPage} from "./Pages/ProductDetailPage";
import {ContactPage} from "./Pages/ContactPage";
import { PropertiesPage } from "./Pages/PropertiesPage";

import ErrorBoundary from "./Components/ErrorBoundary";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/property-details" element={<ProductDetailPage />} />
      </Route>
    )
  );

  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
