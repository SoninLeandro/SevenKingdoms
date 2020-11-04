import React from "react";
import "../style/about.css";
import foto2 from "../assets/WhatsApp Image 2020-10-15 at 16.47.44.jpeg";
import examsImg from "../assets/examenes.jpg";
import quizImg from "../assets/quiz.jpg";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

function About() {
  return (
    <div className="about">
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={foto2} />
          <Card.Body>
            <div className="card-title">
              <Card.Title>Inglés para adultos tambien!</Card.Title>
            </div>
            <Card.Text>
              ¡Animate! Aprender inglés no es solo para los más chiquitos. Así
              lo demuestran nuestras alumnas de Adultos - Beginner!
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={examsImg} />
          <Card.Body>
            <div className="card-title">
              <Card.Title>Preparate para rendir cualquier examen</Card.Title>
            </div>
            <Card.Text>
              Si estás buscando rendir los exámenes internacionales de
              Cambridge, te contamos que podés prepararlos en Seven Kingdoms
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={quizImg} />
          <Card.Body>
            <div className="card-title">
              <Card.Title>
                Quiz! Una de las tantas formas de aprender jugando
              </Card.Title>
            </div>
            <Card.Text>
              Divertirse es una de las maneras de aprender, sumate vos también
              para participar de diferentes actividades y aprender mientras
              disfrutas viendo series, pelis o escuchando tu banda favorita!
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
}

export default About;
