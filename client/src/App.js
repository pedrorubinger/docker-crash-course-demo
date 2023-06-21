import React, { useState, useEffect } from 'react'

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000')
      .then((response) => response.json())
      .then((data) => setBooks(data))
  }, [])

  return (
    <div className="App">
      Books:
      <ul>
        {books?.map((book) => {
          return <li key={book.id}>{book.title}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
