import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Button from "@mui/material/Button";
import "./StylesCustom.css";
import { getSubjects } from "../../services/SubjectService.js";
import { postSubject } from "../../services/SubjectService.js";
import SelectSubjectComponent from "./SelectSubjectsComonent.jsx";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function CreateSubject({
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

  useEffect(async () => {
    var i;
    for (i = 1; i <= totalYears; i++) {
      years.push({ id: i, materias: [] });
    }

    const result = await getSubjects();
    if (result.status === 200) {
      result.data.map((materia) => {
        years.map((año) => {
          if (año.id === materia.year) {
            año.materias.push({
              _id: materia._id,
              text: materia.name,
              comment: "This is rad",
              isSelected: false,
              year: materia.year,
            });
          }
        });
      });

      setDb([...years]);
    }
  }, []);

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

    postSubject(newSubject, planId);
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
          <div style={{ float: "left" }}>Year</div>
          <input
            name="year"
            type="number"
            className="form-control mb-2"
            placeholder="0"
            onChange={handleChange}
            value={todo.year}
          />

          <div className="wrap">
            <div className="formulario">
              <div className="radio">
                <input type="radio" name="quarter" id="Cuatrimestral" />
                <label htmlFor="Cuatrimestral">Cuatrimestral</label>
                <input type="radio" name="quarter" id="Anual" />
                <label htmlFor="Anual">Anual</label>

                <input type="radio" name="quarter" id="Semestral" />
                <label htmlFor="Semestral">Semestral</label>
              </div>
            </div>
          </div>

          <div>
            {todo.year && (
              <SelectSubjectComponent db={db} setDb={setDb} year={todo.year} />
            )}

            <Button onClick={goToPreviousPath}> Back </Button>
            <Button
              disabled={!todo.year || !todo.name}
              onClick={goToNextPath}
              variant="contained"
              endIcon={<ArrowForwardIcon />}
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
