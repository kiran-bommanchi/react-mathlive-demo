import React, { useState, useEffect } from "react";
import "./App.css";
import { MathfieldComponent } from "react-mathlive";

function App() {
  const [latex, setLatex] = React.useState("");

  function onLatexChange(mathText) {
    setLatex(mathText);
    console.log(mathText);
  }

  return (
    <React.Fragment>
      <div className="mathfield">
        <MathfieldComponent
          latex={latex}
          mathfieldConfig={{
            scriptDepth: 5,
            smartMode: true,
            // defaultMode: "text",
            virtualKeyboardMode: "manual",
          }}
          onChange={onLatexChange}
        />
      </div>
      {/* <div className="mathfield">
        <MathfieldComponent
          latex={escapeHtml(latex)}
          mathfieldConfig={{
            smartMode: true,
            // defaultMode: "text",
            virtualKeyboardMode: "manual",
          }}
          onChange={onLatexChange}
        />
      </div> */}
      {/* <textarea
        className="output"
        type="text"
        value={latex}
        onChange={(ev) => onLatexChange(ev.target.value)}
      /> */}
      <div>
        <MathfieldComponent
          mathfieldConfig={{ readOnly: true }}
          latex={latex}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
