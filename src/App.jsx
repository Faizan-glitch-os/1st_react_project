import { useState } from "react";
import Header from "./components/Header.jsx";
import ConceptArticles from "./components/ConceptArticle.jsx";
import MenuButtons from "./components/MenuButtons.jsx";

import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";

function App() {
  const [selected, toSelect] = useState();
  function onClick(selectedTab) {
    toSelect(selectedTab);
  }

  let tabDescription = <p>press a tab to show its description</p>;

  if (selected) {
    tabDescription = (
      <div id="tab-content">
        <h3>{EXAMPLES[selected].title}</h3>
        <p>{EXAMPLES[selected].description}</p>
        <pre>
          <code>{EXAMPLES[selected].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((article) => (
              <ConceptArticles key={article.title} {...article} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <menu>
            <MenuButtons
              pressed={selected === "components"}
              onClick={() => onClick("components")}
            >
              Components
            </MenuButtons>
            <MenuButtons
              pressed={selected === "jsx"}
              onClick={() => onClick("jsx")}
            >
              JSX
            </MenuButtons>
            <MenuButtons
              pressed={selected === "props"}
              onClick={() => onClick("props")}
            >
              Props
            </MenuButtons>
            <MenuButtons
              pressed={selected === "state"}
              onClick={() => onClick("state")}
            >
              State
            </MenuButtons>
          </menu>
          {tabDescription}
        </section>
      </main>
    </div>
  );
}

export default App;
