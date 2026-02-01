import Banner from "../components/Banner";
import CardsList from "../components/CardsList";

function Home() {
    return (
        <>
            <Banner
                image="/images/banner-home.jpg"
                text="Chez vous, partout et ailleurs"
            />
            <CardsList />
        </>
  );
}

export default Home;
