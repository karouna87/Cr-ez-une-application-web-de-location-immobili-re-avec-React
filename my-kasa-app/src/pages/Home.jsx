import Banner from "../components/Banner";
import CardsList from "../components/CardsList";

function Home() {
    return (
        <>
        <main className="page-container">
            <Banner
                image="/images/banner-home.jpg"
                text="Chez vous, partout et ailleurs"
            />
            <CardsList />
        </main>
        </>
  );
}

export default Home;
