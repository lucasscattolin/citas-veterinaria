import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [pacienteEdit, setPacienteEdit] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) || [];
      setPacientes(pacientesLS);
    };

    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (data) => {
    let isError = window.confirm("¿Desea eliminar el registro?");

    if (isError) {
      const pacientesActualizados = pacientes.filter(
        (paciente) => paciente.id !== data.id
      );
      setPacientes(pacientesActualizados);
    }
  };

  return (
    <>
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          pacienteEdit={pacienteEdit}
          setPacienteEdit={setPacienteEdit}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPacienteEdit={setPacienteEdit}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </>
  );
}

export default App;
