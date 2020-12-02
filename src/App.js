import { useEffect, useState } from 'react';
import './App.css';

const COLORS = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

const API_URL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

function App() {

  const [color, setColor] = useState({color: '#16a085'});
  const [background, setBackground] = useState({backgroundColor: '#16a085'});

  const [quote, setQuote] = useState({
    quote: 'Do what you can, where you are, with what you have.',
    author: 'Teddy Roosevelt'
  })


  useEffect(() => {
    document.body.style.backgroundColor = background.backgroundColor;
    
  })



  const changeColor = () => {
    let newColor = COLORS[Math.round(Math.random() * COLORS.length)];

    setColor({ color: newColor });
    setBackground({ backgroundColor: newColor });
  
  }


  const fetchQuoteData = () => {
    fetch(API_URL)
        .then(response => response.json()) 
        .then(data => {
          let randomQuote = data.quotes[Math.round(Math.random() * data.quotes.length)];
          console.log(Math.round(Math.random() * data.quotes.length));
          console.log(randomQuote)
          setQuote(randomQuote);
          changeColor();
        })
  }




  return (
    <div className="App">
      <div className="quote-machine">
        <div className="quote">
          <h2 
            className="quote-text" 
            style={color}
          >
              {quote.quote}
          </h2>
          <span 
            className="quote-author" 
            style={color}
          >
              - {quote.author}

          </span>

        </div>
        <button 
          className="btn-quote"
          onClick={fetchQuoteData}
          style={background}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
