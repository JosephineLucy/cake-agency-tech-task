import React from "react";
import ErrorMessage from "./ErrorMessage";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  override state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error, errorInfo);
  }

  override render() {
    if (this.state.hasError) {
      return <ErrorMessage /> || this.props.fallback;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
