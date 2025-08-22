import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #e6e6e6',
      padding: '2rem 0',
      marginTop: '4rem',
      textAlign: 'center',
      color: '#666',
      fontSize: '0.9rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <p style={{ margin: 0 }}>
          © 2025 Kenta Tanaka. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
