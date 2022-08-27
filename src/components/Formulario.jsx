import React, { useState, useEffect } from "react";
import Mensaje from "./Mensaje";

const Formulario = ({
  setPacientes,
  pacientes,
  pacienteEdit,
  setPacienteEdit,
}) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(pacienteEdit).length) {
      setNombre(pacienteEdit.nombre);
      setPropietario(pacienteEdit.propietario);
      setEmail(pacienteEdit.email);
      setFecha(pacienteEdit.fecha);
      setSintomas(pacienteEdit.sintomas);
    }
  }, [pacienteEdit]);

  const generarId = () => {
    const random = Math.random().toString(36).slice(2);
    const date = Date.now().toString(36);

    return random + date;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del formaulario

    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    // Objeto de paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if (pacienteEdit.id) {
      // Editar registro
      objetoPaciente.id = pacienteEdit.id;

      const pacientesActualiados = pacientes.map((paciente) =>
        paciente.id === pacienteEdit.id ? objetoPaciente : paciente
      );

      setPacientes(pacientesActualiados);
      setPacienteEdit({});
    } else {
      // Nuevo registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    // Reiniciar el formulario
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className=" text-lg mt-5 text-center">
        Añade Pacientes y{" "}
        <span className="text-green-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="m-3 bg-white shadow-md rounded-lg py-10 px-5"
      >
        {error && (
          <Mensaje
            msg="Todos los campos son obligatorios"
            bgColor={"bg-red-500"}
          />
        )}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota..."
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario..."
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Ingrese su email..."
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Síntomas
          </label>
          <textarea
            id="sintomas"
            type="date"
            placeholder="Ingrese los síntomas..."
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value={pacienteEdit.id ? "Editar Paciente" : "Agregar Paciente"}
          className="bg-green-600 w-full p-3 text-white uppercase font-bold hover:bg-green-700 rounded-md cursor-pointer transition-colors"
        />
      </form>
    </div>
  );
};

export default Formulario;
