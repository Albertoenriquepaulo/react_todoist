import React from 'react';
import { FaPizzaSlice } from "react-icons/fa";
import { Md3DRotation } from "react-icons/md";

export const Header = () => {
    return (
        <header className="header" data-testid="header">
            <nav>
                <div className="logo">
                    <img src="/images/logo.png" alt="Todoist" />
                </div>
                <div className="settings">
                    <ul>
                        <li>+</li>
                        <li><FaPizzaSlice /></li>
                        <li><Md3DRotation /></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}