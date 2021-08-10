import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div id="tideChart" className="mt-2">
          <h4>Tides</h4>
          <p>No Report for this location</p>
        </div>)
    }

    return this.props.children;
  }
}

export default ErrorBoundary;