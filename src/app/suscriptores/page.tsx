"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import axios from "axios";
import Header from "@/layout/Header/Header";

const PasswordProtect = dynamic(
  () => import("@/components/PasswordProtect/PasswordProtect"),
  { ssr: false }
);

// Tipado de los datos que devuelve el endpoint
interface Subscriber {
  id: number;
  nombre: string;
  correo: string;
  telefono: string;
  mensaje: string;
  fecha_registro: string;
  origen: string;
}

const Page: React.FC = () => {
  const router = useRouter();
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const handleLogout = () => {
    localStorage.removeItem("access_granted");
    router.push("/");
  };

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await axios.get<Subscriber[]>(
          "https://semilleros-lazox-newsletter.vercel.app/subscribers"
        );
        setSubscribers(response.data);
      } catch (error) {
        console.error("Error al obtener los suscriptores:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscribers();
  }, []);

  return (
    <PasswordProtect>
      <Header />
      <main className="container mx-auto py-10 relative">
        <div className="flex items-center pb-5 sticky top-0">
          <h3 className="text-3xl font-bold">
            Panel de control / Suscriptores
          </h3>

          <button
            onClick={handleLogout}
            className="mt-4 bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-full ml-auto"
          >
            Cerrar sesión
          </button>
        </div>

        {loading ? (
          <p className="text-center text-gray-500">Cargando suscriptores...</p>
        ) : (
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-6 py-3">ID</th>
                  <th className="px-6 py-3">Nombre</th>
                  <th className="px-6 py-3">Correo</th>
                  <th className="px-6 py-3">Teléfono</th>
                  <th className="px-6 py-3">Mensaje</th>
                  <th className="px-6 py-3">Fecha de Registro</th>
                  <th className="px-6 py-3">Origen</th>
                </tr>
              </thead>
              <tbody>
                {subscribers.map((sub) => (
                  <tr
                    key={sub.id}
                    className="bg-white border-b border-gray-200"
                  >
                    <td className="px-6 py-4">{sub.id}</td>
                    <td className="px-6 py-4">{sub.nombre}</td>
                    <td className="px-6 py-4">{sub.correo}</td>
                    <td className="px-6 py-4">{sub.telefono}</td>
                    <td className="px-6 py-4">{sub.mensaje}</td>
                    <td className="px-6 py-4">
                      {new Date(sub.fecha_registro).toLocaleString("es-MX")}
                    </td>
                    <td className="px-6 py-4">{sub.origen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </PasswordProtect>
  );
};

export default Page;
