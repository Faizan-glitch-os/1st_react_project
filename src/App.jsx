import coreConceptImg from "./assets/react-core-concepts.png";

const randomWords = ["Kaka", "Nana", "Wawa"];

function getRandomNumber() {
  return Math.floor(Math.random() * randomWords.length);
}

function Header() {
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

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
