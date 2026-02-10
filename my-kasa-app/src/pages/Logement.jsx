import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import "./Logement.css";

function Logement() {
  const { id } = useParams();

  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="/404" replace />;
  }

  return (
    <main className="logement-page">

      <Slideshow pictures={logement.pictures} />

      <div className="logement-header">

        <div className="logement-info">
          <h1>{logement.title}</h1>
          <p className="logement-location">{logement.location}</p>

          <div className="logement-tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="logement-host">
          <div className="host-info">
            <p>{logement.host.name}</p>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="host-avatar"
            />
          </div>

          <div className="logement-rating">
            {"★".repeat(Number(logement.rating))}
            {"☆".repeat(5 - Number(logement.rating))}
          </div>
        </div>

      </div>

      <div className="logement-collapses">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul className="equipments-list">
            {logement.equipments.map((eq, index) => (
              <li key={index}>{eq}</li>
            ))}
          </ul>
        </Collapse>
      </div>

    </main>
  );
}

export default Logement;
