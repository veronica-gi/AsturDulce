import React from "react";
import "../css/Header.css"; // Asegúrate de que el CSS esté disponible

export default function Header() {
  return (
    <header className="header">
      <div className="logo">🍰 AsturDulce</div>
      <nav className="nav">
        <a href="/">Inicio</a>
        <a href="/recetas">Recetas</a>
      </nav>
    </header>
  );
}

