import React from "react";
import '../Button/Button.css'

    const styles = {
        button: {
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          fontSize: '16px',
          cursor: 'pointer',
          outline: 'none',
        },
        primary: {
          backgroundColor: '#007BFF',
          color: '#ffffff',
        },
        secondary: {
          backgroundColor: '#6C757D',
          color: '#ffffff',
        },
      };

    

    export default function Button({ type = "button", children = "Default Label", variant="primary" }) {
        return (
            <button className="button" type={type} style={{ ...styles.button, ...styles[variant]}}>
                {children}
            </button>
        );
    }