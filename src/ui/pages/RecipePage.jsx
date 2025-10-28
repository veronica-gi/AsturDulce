import React from "react";
import { useParams } from "react-router-dom";
import { desserts } from "../../core/data/desserts";
import { images } from "../assets/images";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/RecipePage.css";

const RecipePage = () => {
  const { id } = useParams();
  const dessert = desserts.find((d) => d.id === parseInt(id));

  if (!dessert) return <p>Receta no encontrada.</p>;

  return (
  <div>
    <Header />
    <main className="recipe-page">
      <h1>{dessert.name}</h1>
      <p className="recipe-description">{dessert.description}</p>

      <img src={images[dessert.key]} alt={dessert.name} className="recipe-image" />

    <section className="recipe-info">
        <h3>Información</h3>
        <ul className="info-list">
          {dessert.info.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
    </section>


      <section className="recipe-ingredients">
        <h3>Ingredientes</h3>
        <ul className="ingredients-list">
          {dessert.ingredientes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="recipe-instructions">
        <h3>Preparación</h3>
        <ul className="instructions-list">
            {dessert.fullRecipe.map((step, index) => (
                <li key={index}>{step}</li>
            ))}
        </ul>
    </section>
</main>
<Footer />
</div>
);

};

export default RecipePage;

