import React from 'react';
import { useEffect, useState } from 'react'

function Cursos() {
  const [insertCurso, setInsertCurso] = useState({
      id_instructor: '', duracion: '',
      hora: '', dias: '', nombre: ''
  })
  const [cursos, setCursos] = useState([]);
  const inputsHandler = (e) => { 
      setInsertCurso({ ...insertCurso, [e.target.name]: e.target.value});
  }
  const submitButton = () => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(insertCurso)
    };
    fetch('http://localhost:8080/addcurso', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
    fetch("http://localhost:8080/cursos")
      .then(res => res.json())
      .then((result) => { setCursos(result); });
  }
  useEffect(() => {
    fetch("http://localhost:8080/cursos")
      .then(res => res.json())
      .then((result) => { setCursos(result); })
  }, [])
  return (
    <div className="row px-5 pt-5">
      <div className="mb-3 col-lg-4">
        <label className="form-label">Nombre del curso</label>
        <input name="nombre" onChange={inputsHandler} type="text" className="form-control"/>
      </div>
      <div className="mb-3 col-lg-4">
        <label className="form-label">Instructor</label>
        <select name="id_instructor" onChange={inputsHandler} className="form-select">
            <option selected>Seleccione un instructor</option>
            <option value="1">Instructor 1</option>
            <option value="2">Instructor 2</option>
            <option value="3">Instructor 3</option>
        </select>
      </div>
      <div className="mb-3 col-lg-4">
        <label className="form-label">Duración</label>
        <select name="duracion" onChange={inputsHandler} className="form-select">
            <option selected>Seleccione una duración</option>
            <option value="1">1 hora</option>
            <option value="2">2 horas</option>
            <option value="3">3 horas</option>
        </select>
      </div>
      <div className="mb-3 col-lg-4">
        <label className="form-label">Hora del día</label>
        <select name="hora" onChange={inputsHandler} className="form-select">
            <option selected>Seleccione una hora del día</option>
            <option value="1">8:00 am</option>
            <option value="2">9:00 am</option>
            <option value="3">10:00 am</option>
            <option value="4">11:00 am</option>
        </select>
      </div>
      <div className="mb-3 col-lg-4">
        <label className="form-label">Días de la semana</label>
        <select name="dias" onChange={inputsHandler} className="form-select">
            <option selected>Seleccione los días de la semana</option>
            <option value="1">Lunes y Martes</option>
            <option value="2">Martes y Miercoles</option>
            <option value="3">Jueves y Viernes</option>
        </select>
      </div>
      <div className="mt-3">
        <button onClick={submitButton} className="btn btn-primary col-lg-3">Crear Curso</button>
      </div>
      <table className="table mt-4">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">ID Instructor</th>
                <th scope="col">Duración</th>
                <th scope="col">Hora del día</th>
                <th scope="col">Días de la semana</th>
                <th scope="col">Nombre</th>
            </tr>
        </thead>
        <tbody>
            {cursos.map(curso => (
                <tr>
                    <th scope="row">{curso.id}</th>
                    <td>{curso.id_instructor}</td>
                    <td>{curso.duracion}</td>
                    <td>{curso.hora}</td>
                    <td>{curso.dias}</td>
                    <td>{curso.nombre}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cursos;