import styles from "./App.module.css";
import kreedLogo from "./assets/kreedLogo.svg";
import menuLogo from "./assets/menuLogo.svg";

function App() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.headerLogo}>
          <img src={kreedLogo} alt="kreedLogo" />
          <img src={menuLogo} alt="menuLogo" />
        </div>
        <div className={styles.content}>
          <h1>Search Our Customer Database</h1>
          <input
            className={styles.input}
            type="text"
            placeholder="Find your customer here..."
          />
          <p>Get your customers onboarded with our technolgy</p>
          <button>Let's go</button>
        </div>
      </div>
    </>
  );
}

export default App;
