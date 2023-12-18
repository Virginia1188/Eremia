import { Component } from 'react';
import NotFound from './NotFound/NotFound';

export default class ErrorBoundary extends Component {
    constructor() {
        super()

        this.state = {
            hasError: false,
        }
    }
    
    static getDerivedStateFromError(err) {
        console.log('GetDerivedStateFromError', err);
        return {
            hasError: true,
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch')
        console.log('ErrorBoundary: ',error);
    }

    render() {
        if (this.state.hasError) {
            return <NotFound />
        }

        return this.props.children;
    }
}