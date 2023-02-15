import React from "react"
import vite from '../images/vite.svg';

export default function Header() {
    return (
        <header className="header">
            <img 
                src={vite} 
                className="header--image"
            />
            <h2 className="header--title">Items</h2>
            <h4 className="header--project">Add Items</h4>
        </header>
    )
}