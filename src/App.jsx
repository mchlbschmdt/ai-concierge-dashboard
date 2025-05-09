import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PropertyManager from "./pages/PropertyManager"; 
import GuestList from "./pages/GuestList";
import Dashboard from "./pages/Dashboard";
import MessagesDashboard from "./pages/MessagesDashboard";
import PropertyAnalytics from "./pages/PropertyAnalytics";
import Layout from "./components/Layout";
import FaqEditor from "./pages/FaqEditor";
import GuestManager from "./pages/GuestManager";
import SmartInsights from "./pages/SmartInsights";
import AddProperty from './pages/AddProperty';
import { Toaster } from "@/components/ui/toaster";

export default function Layout({ children }) {
  return (
    <>
      <Toaster />
      {/* rest of your layout */}
    </>
  );
}


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
      <Route
        path="/dashboard/guests"
        element={
          <Layout>
            <GuestList />
          </Layout>
        }
      />
      <Route
        path="/dashboard/messages"
        element={
          <Layout>
            <MessagesDashboard />
          </Layout>
        }
      />
      <Route
        path="/dashboard/analytics"
        element={
          <Layout>
            <PropertyAnalytics />
          </Layout>
        }
      />
      <Route
        path="/dashboard/faq-editor"
        element={
          <Layout>
            <FaqEditor />
          </Layout>
        }
      />
      <Route
        path="/dashboard/guests-manager"
        element={
          <Layout>
            <GuestManager />
          </Layout>
        }
      />
      <Route
        path="/dashboard/properties-manager"
        element={
          <Layout>
            <PropertyManager />
          </Layout>
        }
      />
      <Route
        path="/dashboard/properties"
        element={
          <Layout>
            <PropertyManager />
          </Layout>
        }
      />
      <Route
        path="/dashboard/add-property"
        element={
          <Layout>
             <AddProperty />
          </Layout>
        }
      />
      <Route
        path="/dashboard/insights"
        element={
          <Layout>
            <SmartInsights />
          </Layout>
        }
      />
    </Routes>
  );
}

