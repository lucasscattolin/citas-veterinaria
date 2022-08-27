import { useEffect } from "react";
import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPacienteEdit, eliminarPaciente }) => {

  

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      {pacientes && pacientes.length ? (
        <>
          <p className="text-xl mt-5 text-center ">
            Administra tus{" "}
            <span className="text-green-600 font-bold">Citas</span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPacienteEdit={setPacienteEdit}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <p className="text-xl mt-5 text-center ">
            Añade tus <span className="text-green-600 font-bold">Citas</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
