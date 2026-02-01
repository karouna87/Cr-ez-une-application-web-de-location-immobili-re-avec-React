function Banner({ image, text }) {
    return (
        <section className="banner">
            <img src={image} alt="Bannière" />
            {text && <h1>{text}</h1>}
        </section>
    );
}

export default Banner;


