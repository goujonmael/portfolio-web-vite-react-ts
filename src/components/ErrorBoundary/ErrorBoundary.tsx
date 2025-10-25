import React from 'react';

interface State {
  hasError: boolean;
  error?: Error | null;
}

// Use `unknown` for props generic to avoid `{}` lint warning
class ErrorBoundary extends React.Component<React.PropsWithChildren<unknown>, State> {
  constructor(props: React.PropsWithChildren<unknown>) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Log to console - can be replaced with external logging
    console.error('Uncaught error:', error, info);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <main role="main" aria-live="polite" style={{ padding: 24 }}>
          <h1>Une erreur est survenue</h1>
          <p>Rechargez la page ou consultez la console pour plus de détails.</p>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
