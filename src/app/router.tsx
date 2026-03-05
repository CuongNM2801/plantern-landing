import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import PrivacyPolicyPage from "../pages/PolicyPage/PrivacyPolicyPage";
import TermsOfServicePage from "../pages/TermsOfServicePage";
import DownloadPage from "../pages/DownloadPage/DownloadPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "privacy-policy", element: <PrivacyPolicyPage /> },
      { path: "terms-of-service", element: <TermsOfServicePage /> },
      { path: "download", element: <DownloadPage /> },
    ],
  },
]);
