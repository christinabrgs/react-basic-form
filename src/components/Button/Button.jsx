import React from "react";
import '../Button/Button.css'

export default function Button ({children}) {
    return (
        <button>
            {children}
        </button>
    )
}