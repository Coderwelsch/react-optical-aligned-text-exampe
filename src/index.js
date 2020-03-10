import React, { useState } from "react";
import ReactDOM from "react-dom";
import OpticalAlignment from "optical-aligned-text";

import Rules from "./rules";
import "./styles.css";

function Content() {
  return (
    <section>
      <div className="container">
        <h1>Willy Wonka is awesome!</h1>
        <p>
          Dies ist ein Typo&shy;blind&shy;text. An ihm kann man sehen, ob alle
          Buch&shy;staben da sind und wie sie aussehen. Manchmal benutzt man
          Worte wie Hamburge&shy;fonts, Raf&shy;gen&shy;duks oder
          Hand&shy;gloves, um Schriften zu testen. Manchmal Sätze, die alle
          Buch&shy;staben des Alpha&shy;bets ent&shy;halten - man nennt diese
          Sätze »Pangrams«. Sehr bekannt ist dieser: The quick brown fox jumps
          over the lazy old dog. Oft werden in Typo&shy;blind&shy;texte auch
          fremd&shy;sprachige Satz&shy;teile ein&shy;ge&shy;baut (AVAIL® and
          Wefox™ are testing aussi la Kerning), um die Wirkung in anderen
          Sprachen zu testen. In La&shy;tein&shy;isch sieht zum Beispiel fast
          jede Schrift gut aus. Quod erat demon&shy;stran&shy;dum. Seit 1975
          fehlen in den meisten Test&shy;texten die Zahlen, weswegen nach
          TypoGb. 204 § ab dem Jahr 2034 Zahlen in 86 der Texte zur Pflicht
          werden. Nicht&shy;einhalt&shy;ung wird mit bis zu 245 € oder 368 $
          bestraft. Genauso wichtig in sind mittler&shy;weile auch Âçcèñtë, die
          in neueren Schriften aber fast immer enthalten sind. Ein wichtiges
          aber schwierig zu inte&shy;grie&shy;rendes Feld sind
          OpenType-Funktionali&shy;täten. Je nach Software und
          Vor&shy;ein&shy;stellungen können ein&shy;ge&shy;baute
          Kapi&shy;tälchen, Kerning oder Ligaturen (sehr pfiffig) nicht richtig
          dar&shy;ge&shy;stellt werden. Dies ist ein Typo&shy;blind&shy;text. An
          ihm kann man sehen, ob alle Buch&shy;staben da sind und wie sie
          aussehen.
        </p>
      </div>
    </section>
  );
}

function Example() {
  const [isDisabled, changeDisableState] = useState(false);

  return (
    <React.Fragment>
      <button
        className={isDisabled ? undefined : "enabled"}
        onClick={() => changeDisableState(!isDisabled)}
      >
        {isDisabled ? "× Disable Alignment" : "✓ Enable Alignment"}
      </button>

      {isDisabled ? (
        <Content />
      ) : (
        <OpticalAlignment
          rules={Rules}
          debug={true}
          debugAlignedWordBackground={"#472222"}
          debugIdleWordBackground={"#394351"}
        >
          <Content />
        </OpticalAlignment>
      )}
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Example />
  </React.StrictMode>,
  rootElement
);
