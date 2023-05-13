import React, { useEffect, useState } from "react";
import note from "./assets/note.mp3";
import E2 from "./assets/E2.wav";
import F2 from "./assets/F2.wav";
import Fs2 from "./assets/Fsharp2.wav";
import G2 from "./assets/G2.wav";
import Gs2 from "./assets/Gsharp2.wav";
import A2 from "./assets/A2.wav";
import As2 from "./assets/Asharp2.wav";
import B2 from "./assets/B2.wav";
import C3 from "./assets/C3.wav";
import Cs3 from "./assets/Csharp3.wav";
import D3 from "./assets/D3.wav";
import Ds3 from "./assets/Dsharp3.wav";
import E3 from "./assets/E3.wav";
import F3 from "./assets/F3.wav";
import Fs3 from "./assets/Fsharp3.wav";
import G3 from "./assets/G3.wav";
import Gs3 from "./assets/Gsharp3.wav";
import A3 from "./assets/A3.wav";
import As3 from "./assets/Asharp3.wav";
import B3 from "./assets/B3.wav";
import C4 from "./assets/C4.wav";
import Cs4 from "./assets/Csharp4.wav";
import D4 from "./assets/D4.wav";
import Ds4 from "./assets/Dsharp4.wav";
import E4 from "./assets/E4.wav";
import F4 from "./assets/F4.wav";
import Fs4 from "./assets/Fsharp4.wav";
import G4 from "./assets/G4.wav";
import Gs4 from "./assets/Gsharp4.wav";
import A4 from "./assets/A4.wav";
import As4 from "./assets/Asharp4.wav";
import B4 from "./assets/B4.wav";
import C5 from "./assets/C5.wav";
import Cs5 from "./assets/Csharp5.wav";
import D5 from "./assets/D5.wav";
import Ds5 from "./assets/Dsharp5.wav";
import E5 from "./assets/E5.wav";
import F5 from "./assets/F5.wav";
import Fs5 from "./assets/Fsharp5.wav";
import G5 from "./assets/G5.wav";
import Gs5 from "./assets/Gsharp5.wav";
import A5 from "./assets/A5.wav";
import As5 from "./assets/Asharp5.wav";
import { useRef } from "react";
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
    C5,
    Cs5,
    D5,
    Ds5,
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
    C4,
    Cs4,
    D4,
    Ds4,
    E4,
    F4,
    Fs4,
    G4,
    Gs4,
    A4,
    As4,
    B4,
    C5,
    Cs5,
    D5,
    Ds5,
    E5,
    F5,
  ],
  g: [
    G3,
    Gs3,
    A3,
    As3,
    B3,
    C4,
    Cs4,
    D4,
    Ds4,
    E4,
    F4,
    Fs4,
    G4,
    Gs4,
    A4,
    As4,
    B4,
    C5,
    Cs5,
  ],
  d: [
    D3,
    Ds3,
    E3,
    F3,
    Fs3,
    G3,
    Gs3,
    A3,
    As3,
    B3,
    C4,
    Cs4,
    D4,
    Ds4,
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
    C3,
    Cs3,
    D3,
    Ds3,
    E3,
    F3,
    Fs3,
    G3,
    Gs3,
    A3,
    As3,
    B3,
    C4,
    Cs4,
    D4,
    Ds4,
  ],
  e0: [
    E2,
    F2,
    Fs2,
    G2,
    Gs2,
    A2,
    As2,
    B2,
    C3,
    Cs3,
    D3,
    Ds3,
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

export const Bar = (props) => {
  const cols = props.tabs
  // const [cols, setCols] = useState([
  //   { d: 12 },
  //   { b: 15 },
  //   { g: 14 },
  //   { g: 12 },
  //   { e1: 15 },
  //   { g: 14 },
  //   { e1: 14 },
  //   { g: 14 },
  //   { d: 12 },
  //   { b: 15 },
  //   { g: 14 },
  //   { g: 12 },
  //   { e1: 15 },
  //   { g: 14 },
  //   { e1: 14 },
  //   { g: 14 },
  //   { d: 14 },
  //   { b: 15 },
  //   { g: 14 },
  //   { g: 12 },
  //   { e1: 15 },
  //   { g: 14 },
  //   { e1: 14 },
  //   { g: 14 },
  //   { d: 14 },
  //   { b: 15 },
  //   { g: 14 },
  //   { g: 12 },
  //   { e1: 15 },
  //   { g: 14 },
  //   { e1: 14 },
  //   { g: 14 },

  //   { g: 12 },
  //   { b: 15 },
  //   { g: 14 },
  //   { g: 12 },
  //   { e1: 15 },
  //   { g: 14 },
  //   { e1: 14 },
  //   { g: 14 },
  //   { g: 12 },
  //   { b: 15 },
  //   { g: 14 },
  //   { g: 12 },
  //   { e1: 15 },
  //   { g: 14 },
  //   { e1: 14 },
  //   { g: 14 },

  //   { e1: 12 },
  //   { g: 12 },
  //   { b: 15 },
  //   { g: 12 },
  //   { e1: 12 },
  //   { g: 12 },
  //   { e1: 14 },
  //   { g: 12 },
  //   { e1: 15 },
  //   { g: 12 },
  //   { e1: 14 },
  //   { g: 12 },
  //   { e1: 12 },
  //   { g: 12 },
  //   { b: 14 },
  // ]);

  const [liveCol, setLiveCol] = useState(0);
  const paused = useRef(0);

  // const getPausedVal = () => {
  //   return paused;
  // }

  const makeLive = (i) => {
    let date = new Date();
    //let isPaused = getPausedVal();
    console.log("playing: ", i, "  Paused: ", paused.current, "  timestamp: ", (date.getSeconds()));
    if(i === cols.length || paused.current === 1){
      return;
    }

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
    setTimeout(makeLive,500, i+1);
    //new Audio(note).play();
  };

  const playTabs = () => {
    paused.current = 0;
    let len = cols.length;
    console.log(len);

    //for (let i = 0; i < len; i++) {
    setTimeout(makeLive, 500, liveCol);
    //}
  };

  const pauseTabs = () => {
    console.log("Pause");
    paused.current = 1;
    console.log(paused);
  };

  const rewind = () => {
    paused.current = 1;
    if(liveCol > 0){
      setLiveCol(liveCol-1);
    }
  }

  const forward = () => {
    paused.current = 1;
    if(liveCol < cols.length){
      setLiveCol(liveCol+1);
    }
  }

  return (
    <div className="tab-player-parent">
      <div className="tab-player-group">
        <div className="player-btns">
          <button style={{fontSize: "24px"}} onClick={rewind}><i className="fa fa-step-backward"></i></button>
          <button className="payer-btn" onClick={playTabs}>play</button>
          <button className="payer-btn" onClick={pauseTabs}>pause</button>
          <button style={{fontSize: "24px"}} onClick={forward}><i className="fa fa-step-forward"></i></button>
        </div>
        <div className="bar">
          {tuning()}
          {cols.map((column, i) =>
            col(column, i == liveCol ? "alive" : "dormant")
          )}
        </div>
      </div>
    </div>
  );
};
