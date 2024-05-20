import CoreConcept from "./Coreconcept.jsx";

function App() {
  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <ul>
            {coreConcepts.map((concept, index) => (
              <CoreConcept
                key={index}
                icon={concept.icon}
                title={concept.title}
                description={concept.description}
              />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
const coreConcepts = [
  {
    icon: "src/assets/components.png",
    title: "Core Concept",
    description: "The core Ul building block - compose the user interface by combining multiple components.",
  },
  {
    icon: "src/assets/jsx-ui.png",
    title: "JSX",
    description: "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered. Props Make components configurable (and therefore reusable) by passing input data to them.",
  },
  {
    icon: "src/assets/config.png",
    title: "Props",
    description: "Make components configurable (and therefore reusable) by passing input data to them.",
  },
  {
    icon: "src/assets/state-mgmt.png",
    title: "State",
    description: "React-managed data which, when changed, causes the component to re-render & the UI to update. ",
  },
];

export default App;