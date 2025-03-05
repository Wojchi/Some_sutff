import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import About from './About.tsx';
import Blog from './Blog.tsx';
import FAQ from './FAQ.tsx';
import Contact from './Contact.tsx';
import Services from './Services.tsx';
import AIChat from './services/AIChat.tsx';
import CRMIntegration from './services/CRMIntegration.tsx';
import WebsiteCreation from './services/WebsiteCreation.tsx';
import AIAutomation from './services/AIAutomation.tsx';
import CustomSolutions from './services/CustomSolutions.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/faq",
    element: <FAQ />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/services/ai-chat-agents",
    element: <AIChat />,
  },
  {
    path: "/services/crm-ai-integration",
    element: <CRMIntegration />,
  },
  {
    path: "/services/website-creation",
    element: <WebsiteCreation />,
  },
  {
    path: "/services/ai-automation",
    element: <AIAutomation />,
  },
  {
    path: "/services/custom-ai-solutions",
    element: <CustomSolutions />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);