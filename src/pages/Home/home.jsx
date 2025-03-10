import { Layout } from "../../components/Layout/Layout";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <Layout>
            <div className="home-container">
                <div className="background-gradient"></div>

                <img src="/assets/pokemon_banner.jpg" alt="Pokédex Banner" className="banner" />

                <h1 className="title">¡Bienvenido a la Pokédex Online!</h1>
                <p className="intro-text">Explora el mundo de los Pokémon, consulta sus estadísticas y aprende más sobre ellos.</p>

                <button className="explore-btn" onClick={() => navigate("/pokedex")}>
                    ¡Explora la Pokédex!
                </button>

                <h2 className="featured-title">Pokémon Destacados</h2>
                <div className="featured-pokemon">
                    <div className="pokemon-card">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="Pikachu" />
                    </div>
                    <div className="pokemon-card">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Bulbasaur" />
                    </div>
                    <div className="pokemon-card">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="Charmander" />
                    </div>
                </div>

                <div className="ash-running">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Ash corriendo" />
                </div>
            </div>
        </Layout>
    );
}

export { Home };
