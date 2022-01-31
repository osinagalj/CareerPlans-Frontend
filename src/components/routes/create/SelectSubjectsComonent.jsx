import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import "./StylesCustom.css";

import CardOption from "./CardOption";

export default function SelectSubjectComponent({ db, setDb, year }) {
  const classes = useStyle();

  return (
    <div style={{ marginTop: "20px" }}>
      <label>Choose previus Subjects</label>

      <div className="conteinerPlan">
        {db.map((listitem) => (
          <li
            className={classes.year}
            style={{ width: "100%" }}
            key={listitem.id}
          >
            <ul key={listitem.id}>
              {listitem.materias.length === 0 ? (
                <div>- </div>
              ) : (
                listitem.materias.map((s) => (
                  <li className={classes.subject} key={s._id}>
                    {s.year <= year ? (
                      <CardOption
                        s={s}
                        db={db}
                        setDb={setDb}
                        name={s.text}
                      ></CardOption>
                    ) : (
                      ""
                    )}
                  </li>
                ))
              )}
            </ul>
          </li>
        ))}
      </div>
    </div>
  );
}

const useStyle = makeStyles((theme) => ({
  subject: {
    display: "inline-block",
  },
  year: {
    marginLeft: "auto",
    marginRight: "auto",
    listStyleType: "none",
    paddingLeft: "0rem",
  },
}));
