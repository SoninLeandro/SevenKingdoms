import React from "react";
import "../style/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <div class="row">
        <div class="col">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            style={{ fontSize: "x-large", color: "white" }}
          />
          <a
            href="https://www.google.com/maps/place/El+Ceibo+498,+B1706AEJ+Haedo,+Provincia+de+Buenos+Aires/@-34.6527305,-58.591105,17z/data=!4m5!3m4!1s0x95bcc799e3830ecb:0xb4df7f2e7d64de92!8m2!3d-34.6527305!4d-58.5889163"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h5>Cómo llegar</h5>
          </a>
        </div>
        <div class="col">
          <FontAwesomeIcon
            icon={faWhatsapp}
            style={{ color: "green", fontSize: "x-large" }}
          />
          <a
            href="https://web.whatsapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h5>1130570984LL</h5>
          </a>
        </div>
        <div class="col">
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ fontSize: "x-large", color: "pink" }}
          />
          <a
            href="mailto: sevenk.ingles@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>Contactar por correo</h4>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
