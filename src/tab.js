import React, { useEffect, useState } from "react";
import note from "./assets/note.mp3";
import F2 from "./assets/F2.wav";
import Fs2 from "./assets/F#2.wav";
import G2 from "./assets/G2.wav";
import Gs2 from "./assets/G#2.wav";
import A2 from "./assets/A2.wav";
import As2 from "./assets/A#2.wav";
import B2 from "./assets/B2.wav";
import C2 from "./assets/C2.wav";
import Cs2 from "./assets/C#2.wav";
import D2 from "./assets/D2.wav";
import Ds2 from "./assets/D#2.wav";
import E3 from "./assets/E3.wav";
import F3 from "./assets/F3.wav";
import Fs3 from "./assets/F#3.wav";
import G3 from "./assets/G3.wav";
import Gs3 from "./assets/G#3.wav";
import A3 from "./assets/A3.wav";
import As3 from "./assets/A#3.wav";
import B3 from "./assets/B3.wav";
import C3 from "./assets/C3.wav";
import Cs3 from "./assets/C#3.wav";
import D3 from "./assets/D3.wav";
import Ds3 from "./assets/D#3.wav";
import E4 from "./assets/E4.wav";
import F4 from "./assets/F4.wav";
import Fs4 from "./assets/F#4.wav";
import G4 from "./assets/G4.wav";
import Gs4 from "./assets/G#4.wav";
import A4 from "./assets/A4.wav";
import As4 from "./assets/A#4.wav";
import B4 from "./assets/B4.wav";
import C4 from "./assets/C4.wav";
import Cs4 from "./assets/Csharp4.wav";
import D4 from "./assets/D4.wav";
import Ds4 from "./assets/D#4.wav";
import E5 from "./assets/E5.wav";
import F5 from "./assets/F5.wav";
import Fs5 from "./assets/Fsharp5.wav";
import G5 from "./assets/G5.wav";
import Gs5 from "./assets/G#5.wav";
import A5 from "./assets/A5.wav";
import As5 from "./assets/A#5.wav";
// import B5 from "./assets/B5.wav";
// import C5 from "./assets/C5.wav";
// import Cs5 from "./assets/C#5.wav";
// import D5 from "./assets/D5.wav";
// import Ds5 from "./assets/D#5.wav";

const note_map = {
  e1: [
    E4,
    F4,
    Fs4,
    G4,
    Gs4,
    A4,
    As4,
    B4,
    C4,
    Cs4,
    D4,
    Ds4,
    E5,
    F5,
    Fs5,
    G5,
    Gs5,
    A5,
    As5,
  ],
  b: [
    B3,
    C3,
    Cs3,
    D3,
    Ds3,
    E4,
    F4,
    Fs4,
    G4,
    Gs4,
    A4,
    As4,
    B4,
    C4,
    Cs4,
    D4,
    Ds4,
    E5,
    F5,
  ],
  g: [
    G3,
    Gs3,
    A3,
    As3,
    B3,
    C3,
    Cs3,
    D3,
    Ds3,
    E4,
    F4,
    Fs4,
    G4,
    Gs4,
    A4,
    As4,
    B4,
    C4,
    Cs4,
  ],
  d: [
    D2,
    Ds2,
    E3,
    F3,
    Fs3,
    G3,
    Gs3,
    A3,
    As3,
    B3,
    C3,
    Cs3,
    D3,
    Ds3,
    E4,
    F4,
    Fs4,
    G4,
    Gs4,
  ],
  a: [
    A2,
    As2,
    B2,
    C2,
    Cs2,
    D2,
    Ds2,
    E3,
    F3,
    Fs3,
    G3,
    Gs3,
    A3,
    As3,
    B3,
    C3,
    Cs3,
    D3,
    Ds3,
  ],
  e0: [
    E3,
    F2,
    Fs2,
    G2,
    Gs2,
    A2,
    As2,
    B2,
    C2,
    Cs2,
    D2,
    Ds2,
    E3,
    F3,
    Fs3,
    G3,
    Gs3,
    A3,
    As3,
  ],
};

const col = (notes = {}, colStyle) => {
  return (
    <span className="col">
      <p className="invisible">---</p>
      <hr></hr>
      <div className={`${colStyle}`}>
        <div>{notes.e1 ? `-${notes.e1} ` : "-"}</div>
        <div>{notes.b ? `-${notes.b} ` : "-"}</div>
        <div>{notes.g ? `-${notes.g} ` : "-"}</div>
        <div>{notes.d ? `-${notes.d} ` : "-"}</div>
        <div>{notes.a ? `-${notes.a} ` : "-"}</div>
        <div>{notes.e0 ? `-${notes.e0} ` : "-"}</div>
      </div>
      <hr></hr>
    </span>
  );
};

const tuning = () => {
  return (
    <span>
      <p className="invisible">---</p>
      <hr></hr>
      <div>e -</div>
      <div>B -</div>
      <div>G -</div>
      <div>D -</div>
      <div>A -</div>
      <div>E -</div>
      <hr></hr>
    </span>
  );
};

export const Bar = () => {
  const [cols, setCols] = useState([
    { d: 12 },
    { b: 15 },
    { g: 14 },
    { g: 12 },
    { e1: 15 },
    { g: 14 },
    { e1: 14 },
    { g: 14 },
    { d: 12 },
    { b: 15 },
    { g: 14 },
    { g: 12 },
    { e1: 15 },
    { g: 14 },
    { e1: 14 },
    { g: 14 },
    { d: 14 },
    { b: 15 },
    { g: 14 },
    { g: 12 },
    { e1: 15 },
    { g: 14 },
    { e1: 14 },
    { g: 14 },
    { d: 14 },
    { b: 15 },
    { g: 14 },
    { g: 12 },
    { e1: 15 },
    { g: 14 },
    { e1: 14 },
    { g: 14 },

    { g: 12 },
    { b: 15 },
    { g: 14 },
    { g: 12 },
    { e1: 15 },
    { g: 14 },
    { e1: 14 },
    { g: 14 },
    { g: 12 },
    { b: 15 },
    { g: 14 },
    { g: 12 },
    { e1: 15 },
    { g: 14 },
    { e1: 14 },
    { g: 14 },

    { e1: 12 },
    { g: 12 },
    { b: 15 },
    { g: 12 },
    { e1: 12 },
    { g: 12 },
    { e1: 14 },
    { g: 12 },
    { e1: 15 },
    { g: 12 },
    { e1: 14 },
    { g: 12 },
    { e1: 12 },
    { g: 12 },
    { b: 14 },
  ]);

  const [liveCol, setLiveCol] = useState(0);

  const makeLive = (i) => {
    setLiveCol(i);

    if (cols[i].e0) {
      new Audio(note_map.e0[cols[i].e0]).play();
    } else if (cols[i].a) {
      new Audio(note_map.a[cols[i].a]).play();
    } else if (cols[i].d) {
      new Audio(note_map.d[cols[i].d]).play();
    } else if (cols[i].g) {
      new Audio(note_map.g[cols[i].g]).play();
    } else if (cols[i].b) {
      new Audio(note_map.b[cols[i].b]).play();
    } else if (cols[i].e1) {
      //console.log(cols[i].e1);
      //console.log(note_map.e1[cols[i].e1]);
      new Audio(note_map.e1[cols[i].e1]).play();
    }

    //new Audio(note).play();
  };

  const playTabs = () => {
    let len = cols.length;
    console.log(len);

    for (let i = 0; i < len; i++) {
      setTimeout(makeLive, (i + 1) * 500, i);
    }
  };

  return (
    <>
      <div>
        <button onClick={playTabs}>play</button>
      </div>
      <div className="bar">
        {tuning()}
        {cols.map((column, i) =>
          col(column, i == liveCol ? "alive" : "dormant")
        )}
      </div>
    </>
  );
};
