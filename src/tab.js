import React, { useEffect, useState } from "react";

const col = (notes = {}) => {
  return (
    <span>
      <p className="invisible">---</p>
      <hr></hr>
      <div>{notes.e0 ? notes.e0 : "-"}</div>
      <div>{notes.a ? notes.a : "-"}</div>
      <div>{notes.d ? notes.d : "-"}</div>
      <div>{notes.g ? notes.g : "-"}</div>
      <div>{notes.b ? notes.b : "-"}</div>
      <div>{notes.e1 ? notes.e1 : "-"}</div>
      <hr></hr>
    </span>
  );
};

const tuning = () => {
  return (
    <span>
      <p className="invisible">---</p>
      <hr></hr>
      <div>E -</div>
      <div>A -</div>
      <div>D -</div>
      <div>G -</div>
      <div>B -</div>
      <div>e -</div>
      <hr></hr>
    </span>
  );
};

export const Bar = () => {
  const [cols, setCols] = useState([]);

  return (
    <>
      <div className="bar">
        {tuning()}
        {col({ e1: 15 })}
        {col({ d: 13 })}
        {col({ b: 11 })}
        {col({ e1: 15 })}
        {col()}
        {col()}
        {col()}
        {col()}
        {col()}
        {col({ e1: 15 })}
        {col({ d: 13 })}
        {col({ b: 11 })}
        {col({ e1: 15 })}
        {col()}
        {col()}
        {col()}
        {col()}
        {col()}
        {col({ e1: 15 })}
        {col({ d: 13 })}
        {col({ b: 11 })}
        {col({ e1: 15 })}
        {col()}
        {col()}
        {col()}
        {col()}
        {col()}
        {col({ e1: 15 })}
        {col({ d: 13 })}
        {col({ b: 11 })}
        {col({ e1: 15 })}
        {col()}
        {col()}
        {col()}
        {col()}
        {col()}
        {col({ e1: 15 })}
        {col({ d: 13 })}
        {col({ b: 11 })}
        {col({ e1: 15 })}
        {col()}
        {col()}
        {col()}
        {col()}
        {col()}
        {col({ e1: 15 })}
        {col({ d: 13 })}
        {col({ b: 11 })}
        {col({ e1: 15 })}
        {col()}
        {col()}
        {col()}
        {col()}
        {col()}
        {col({ e1: 15 })}
        {col({ d: 13 })}
        {col({ b: 11 })}
        {col({ e1: 15 })}
        {col()}
        {col()}
        {col()}
        {col()}
        {col()}
        {col({ e1: 15 })}
        {col({ d: 13 })}
        {col({ b: 11 })}
        {col({ e1: 15 })}
        {col()}
        {col()}
        {col()}
        {col()}
        {col()}
        {col({ e1: 15 })}
        {col({ d: 13 })}
        {col({ b: 11 })}
        {col({ e1: 15 })}
        {col()}
        {col()}
        {col()}
        {col()}
        {col()}
        {col({ e1: 15 })}
        {col({ d: 13 })}
        {col({ b: 11 })}
        {col({ e1: 15 })}
        {col()}
        {col()}
        {col()}
        {col()}
        {col()}
        {col({ e1: 15 })}
        {col({ d: 13 })}
        {col({ b: 11 })}
        {col({ e1: 15 })}
        {col()}
        {col()}
        {col()}
        {col()}
        {col()}
        {col({ e1: 15 })}
        {col({ d: 13 })}
        {col({ b: 11 })}
        {col({ e1: 15 })}
        {col()}
        {col()}
        {col()}
        {col()}
        {col()}
      </div>
    </>
  );
};
