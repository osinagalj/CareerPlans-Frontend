import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Button from "@mui/material/Button";
import "./StylesCustom.css";

import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function Denied({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
}) {
  let navigate = useNavigate();
  let history = useNavigate();

  const search = useLocation().search;

  const year = new URLSearchParams(search).get("year");
  const planId = new URLSearchParams(search).get("planId");

  const initialForm = {
    id: null,
    name: "",
    year: year,
    quarter: 1,
  };
  const [todo, setTodo] = useState(initialForm);

  const [db, setDb] = useState([]);
  const totalYears = 5;
  const years = [];

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setTodo({
      ...todo,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const goToPreviousPath = (e) => {
    e.preventDefault();
    history(-1);
  };

  const goToNextPath = (e) => {
    e.preventDefault();
    let pickups = [];

    db.map((año) => {
      año.materias.map((materia) => {
        if (materia.isSelected === true) {
          pickups.push(materia.text);
        }
      });
    });

    const newSubject = {
      name: todo.name,
      year: todo.year,
      quarter: 1,
      subjects: pickups,
      planId: planId,
    };

    //todo validar plan id?

    //axios.post('http://localhost:4000/api/subjects', newSubject)

    navigate(`../plans/${planId}`, { replace: true });
  };

  return (
    <>
      <div className="container md-5">
        <h3>{dataToEdit ? "Edit" : "Create subject"}</h3>

        <form>
          {/*  onSubmit={handleSubmit}  TODO*/}

          <div style={{ float: "left" }}>Subjects's name</div>
          <input
            name="name"
            type="text"
            className="form-control mb-2"
            placeholder="Subject's name"
            onChange={handleChange}
            value={todo.name}
          />
        </form>
      </div>
    </>
  );
}
