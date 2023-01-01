import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />

          <div>
            <p style={{color: "white",
        backgroundColor: '#f1356d',
        borderRadius: '8px'
       }}>Hi every one to day i am going to build a self landing page that has only basic info</p>



          </div>

        <p>
          first git hub code space through webapp <span className="heart">♥️</span> React
        </p>
        <p style={{color: "pink", fontSize: '30px',  }}>
           i do not want to relode
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
