import coreConceptImg from "../assets/react-core-concepts.png";

import "./Header.css";

const randomWords = ["Kaka", "Nana", "Wawa"];

function getRandomNumber() {
  return Math.floor(Math.random() * randomWords.length);
}

export default function Header() {
  const receivedRandomNumber = getRandomNumber();
  console.log(receivedRandomNumber);

  return (
    <header>
      <img src={coreConceptImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {randomWords[receivedRandomNumber]} React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  );
}
