import React, { useState, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Container } from 'react-bootstrap';
function Quote(data) {

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  // http://api.quotable.io/random

  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);
          setAuthor(quote.author);
        }
      )
  }, []);

  let fetchNewQuote = () => {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);
          setAuthor(quote.author);
        }
      )
  }
  return (
    <div className="App my-3 p-3 rounded">
      <Container>
        <div className="quote">
          <h2>{quote}</h2>
          <small>-{author}-</small>
          <i class="fa-solid fa-bookmark"></i>
        </div>
      </Container><br />

      <DropdownButton id="dropdown-basic-button" title="Bookmarks"><br/><br/>
      <div className='drop'>
      <Dropdown.Item href="#">Action</Dropdown.Item><br/>
      <Dropdown.Item href="#">Another action</Dropdown.Item><br/>
      <Dropdown.Item href="#">Something else</Dropdown.Item><br/>
      </div>
    </DropdownButton>

      <div>

      </div>
      <span className='span'>
        .
      </span>
      <div>
        <button className="btn" onClick={fetchNewQuote}>Next Quote</button>
      </div>


    </div>
  );
}


export default Quote;