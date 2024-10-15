"use client"
import React from 'react';

const ErrorComponent: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Something went wrong</h1>
            <p>We're sorry, but an unexpected error has occurred.</p>
        </div>
    );
};

export default ErrorComponent;