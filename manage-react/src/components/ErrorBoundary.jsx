/*
 * @Author: Tiny
 * @Date: 2019-08-20 17:57:01
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-08-20 18:05:58
 */
import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    }
  }
  componentDidCatch (error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }
  render() {
    if (this.state.errorInfo) {
      // error
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            { this.state.error && this.state.error.toString() } <br/>
            { this.state.errorInfo.componentStack }
          </details>
        </div>
      )
    }
    // normally
    return this.props.children;
  }
}