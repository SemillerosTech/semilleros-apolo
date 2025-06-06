// components/PasswordProtect.tsx
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import logoDesktop from "../../../public/logo-semilleros.svg";

export default function PasswordProtect({
  children,
}: {
  children: React.ReactNode;
}) {
  const [accessGranted, setAccessGranted] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const hasAccess = localStorage.getItem("access_granted");
    if (hasAccess === "true") setAccessGranted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/check-password", {
      method: "POST",
      body: JSON.stringify({ password }),
    });
    const { success } = await res.json();

    if (success) {
      localStorage.setItem("access_granted", "true");
      setAccessGranted(true);
    } else {
      setError("Contraseña incorrecta 😅");
    }
  };

  if (accessGranted) return <>{children}</>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Image
        src={logoDesktop}
        alt="Logo semilleros"
        className="hidden md:inline m-3"
      />
      <h1 className="text-3xl mt-5">Panel de control</h1>
      <p className="text-sm mb-3">
        Ingresa tu contraseña para ingresar al panel de control
      </p>
      <form onSubmit={handleSubmit} className="max-w-sm w-full">
        <input
          type="password"
          placeholder="Escribe la contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-full mb-2 text-center text-base"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-full mt-2"
        >
          Entrar
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
}
