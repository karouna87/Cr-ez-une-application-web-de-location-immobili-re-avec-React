import Card from "./Card";
import logements from "../data/logements.json";

function CardsList() {
    return (
        <section className="cards">
            {logements.map((logement) => (
                <Card
                    key={logement.id}     
                    id={logement.id}
                    title={logement.title}
                    cover={logement.cover}
                />
        ))}
        </section>
    );
}

export default CardsList;

