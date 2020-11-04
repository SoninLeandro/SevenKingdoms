import React from "react";
import infoImg from "../assets/WhatsApp Image 2020-10-15 at 16.47.53.jpeg";
import instituteImg from "../assets/WhatsApp Image 2020-10-15 at 18.21.39.jpeg";
import "../style/body.css";

function Body() {
  return (
    <div className="body">
      <div class="container">
        <div class="row">
          <h3>Estudiá inglés de la manera más divertida!</h3>
        </div>

        <div class="row">
          <div class="col">
            <img
              src={instituteImg}
              padding-top="50px"
              height="400px"
              width="400px"
              alt="info"
            />
            <h5>
              Nuestro instituto ubicado en una hermosa zona de Haedo Sur, en la
              esquina de El Ceibo y Libertad
            </h5>
          </div>

          <div class="col">
            <p>
              ¡Aprendizaje de inglés para todas las edades y niveles de manera
              dinámica y divertida en Haedo!
            </p>
            <img
              src={infoImg}
              padding-top="50px"
              height="400px"
              width="400px"
              alt="info"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
