import { useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import "./Contacto.css";

// Almacenamos los valores del form en una variable
const Contacto = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        mensaje: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`✅ Mensaje enviado correctamente!\n 📌 Nombre: ${formData.nombre}\n📧 Email: ${formData.email}\n📝 Mensaje: ${formData.mensaje}`);

        //  Para que no aparezcan de nuevo los datos al enviar el formulario lo reinciamos de esta manera.
        setFormData({ nombre: "", email: "", mensaje: "" });
    };

    return (
        <Layout>
            <div className="contact-container">
                <h2 className="contact-title">¡Entrenador, Contáctanos! ⚡</h2>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id="nombre" placeholder="Ej. Pika pika" value={formData.nombre} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input type="email" id="email" placeholder="pikachu@pokemon.com" value={formData.email} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea id="mensaje" placeholder="Escribe tu mensaje..." rows="5" value={formData.mensaje} onChange={handleChange} required></textarea>
                    </div>

                    <button type="submit" className="pokeball-btn">
                        Enviar <span className="pokeball">⚪🔴</span>
                    </button>
                </form>
            </div>
        </Layout>
    );
};

export { Contacto };

