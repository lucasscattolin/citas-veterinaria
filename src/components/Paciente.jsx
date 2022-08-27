const Paciente = ({ paciente, setPacienteEdit, eliminarPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas } = paciente;

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3  text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3  text-gray-700 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3  text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3  text-gray-700 uppercase">
        Fecha de Alta: <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3  text-gray-700 uppercase">
        Síntomas: <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-between mx-3">
        <button
          className="py-2 px-10 bg-green-600 hover:bg-green-700 text-white rounded-md font-bold uppercase"
          type="button"
          onClick={() => setPacienteEdit(paciente)}
        >
          Editar
        </button>
        <button
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white rounded-md font-bold uppercase"
          type="button"
          onClick={() => eliminarPaciente(paciente)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
