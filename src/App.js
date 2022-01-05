import React, { useRef, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const firstRef = useRef(null);
  const secondRef = useRef(null);

  useEffect(() => {

    const { innerText, textContent } = firstRef.current;

    console.log(`innerText: "${innerText}"`);
    console.log(`textContent: "${textContent}"`);

    console.log(`innerText: "${secondRef.current.innerText}"`);
    console.log(`textContent: "${secondRef.current.textContent}"`);

    /*
     Now in our JavaScript world, We're just using those first and second elements and calling innerText and
     textContent or both of them. As you can see innerText return just the text "First Element" while textContent
     has all this extra white space are around it.

     With innerText, we just get second which is the visible portion of the text while with textContent,
     we get the full "Second Element" all the text, even if it's not visible as well as the whitespace.

     The main difference here is that innerText removes all the extra whitespace and pretty much shows you
     exactly what the HTML page renders while textContent doesn't care about visibility or not and it renders
     with all the whitespace so we're going to get things that are even hidden in the HTML.    
    */

  }, [])

  const hide = {
    display: 'none',
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />


        {/* There are two ways to get the text of an element in JavaScript using textContent and innerText.
          but they actually work very differently. As you can see, we have two divs. First div just says 
          "First Element" and the second one says "Second Element" but the element portion is hidden as you
           can see down. 
        */}

        <div ref={firstRef}>
          First        Element
        </div>

        <div ref={secondRef}>
          Second <span style={hide}> Element </span>
        </div>

      </header>
    </div>
  );
}

export default App;
