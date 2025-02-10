"use client";
import React, { useState } from "react";

interface FormState {
  nombre: string;
  correo: string;
  telefono: string;
  mensaje: string;
  origen: string;
}

const NewsLetterForm: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
    origen: "Web Semilleros",
  });

  const [mensaje, setMensaje] = useState<string>("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMensaje("");

    try {
      const res = await fetch("http://localhost:4242/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setMensaje("Registro exitoso!");
        setForm({
          nombre: "",
          correo: "",
          telefono: "",
          mensaje: "",
          origen: "Web Semilleros",
        });
      } else {
        setMensaje(data.error || "Error en el registro");
      }
    } catch (error) {
      console.error(error);
      setMensaje("Error de conexión con el servidor");
    }
  };

  return (
    <>
      <form
        className="flex flex-col p-3 mx-auto w-[80%]"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleInputChange}
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:border-main block w-full p-2.5 mb-4"
          placeholder="Escribe tu nombre"
          required
        />

        <input
          type="text"
          name="telefono"
          value={form.telefono}
          onChange={handleInputChange}
          pattern="\d{10}"
          maxLength={10}
          title="Debe ser un número de 10 dígitos"
          className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-main focus:border-main block w-full p-2.5 mb-4"
          placeholder="Escribe tu teléfono"
          required
        />

        <input
          type="email"
          name="correo"
          value={form.correo}
          onChange={handleInputChange}
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          title="Debe ser un correo electrónico válido (ejemplo@dominio.com)"
          className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-main focus:border-main block w-full p-2.5 mb-4"
          placeholder="Escribe tu correo electrónico"
          required
        />

        <textarea
          name="mensaje"
          value={form.mensaje}
          onChange={handleInputChange}
          placeholder="Déjanos un mensaje"
          className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-main focus:border-main block w-full p-2.5 mb-4"
          rows={5}
        ></textarea>

        <button
          type="submit"
          className="text-white bg-main hover:bg-main focus:ring-4 focus:ring-blue-300 rounded-lg text-lg px-5 py-2.5 me-2 mb-2 font-bold"
        >
          Enviar mensaje
        </button>

        {mensaje && (
          <p className="mt-2 text-center text-green-600">{mensaje}</p>
        )}
      </form>
    </>
  );
};

export default NewsLetterForm;
