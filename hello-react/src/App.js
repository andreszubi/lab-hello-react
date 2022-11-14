import './App.css';
import ironhackLogo from './images/ironhack-logo-xs.png';
import menuBar from './images/menu-top-xs.png';
import iconWrench from './images/icon1.png';
import iconVideo from './images/icon2.png';
import iconCog from './images/icon3.png';
import iconCode from './images/icon4.png';

function App() {
  return (
    <div className="App">
    <section className="firstSection">
     <header>
        <img src={ironhackLogo} alt="Ironhack logo" />
        <img src={menuBar} alt="Menu" />
      </header>
      
      <h1> Say hello to <br></br> ReactJS </h1>
      <p> You will learn how to use
         the most popular frontend library,
          and become a super Ninja developer. </p>



      <button> Awesome! </button>

      
    </section>

    <section className="flexbox">
      <div>
      <img src={iconWrench} alt="Icon wrench" />
      <h2> Declarative </h2>
      <p> React makes it painless to create interactive UIs. </p>
    </div>

    <div>
      <img src={iconVideo} alt="Icon video" />
      <h2> Components </h2>
      <p> Build encapsulated components that manage their state. </p>
    </div>

    <div>
      <img src={iconCog} alt="Icon cog" />
      <h2> Single-Way </h2>
      <p> A set of immutable values are passed to the component's. </p>
    </div>

    <div>
      <img src={iconCode} alt="Icon code" />
      <h2> JSX </h2>
      <p> Statically-typed, designed to run on modern browsers. </p>
    </div>
    </section>
    </div>
  );
};

export default App;