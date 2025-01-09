'use client'

import React, { createContext, useContext, useState } from 'react';
import { LoadingAnimation } from './LoadingAnimation';

// Create loading context
const LoadingContext = createContext({
  setLoading: (loading) => {},
  loading: false,
});

// Loading provider component
export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {loading && <LoadingAnimation />}
      {children}
    </LoadingContext.Provider>
  );
};

// Custom hook to use loading state
export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

// Helper HOC to wrap components that need loading state
export const withLoading = (WrappedComponent) => {
  return function WithLoadingComponent(props) {
    const { setLoading } = useLoading();
    return <WrappedComponent {...props} setLoading={setLoading} />;
  };
};