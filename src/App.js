import React, { useState } from "react";
import "./styles.css";
const bookData = require("./data");

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("Mathematics");

  var categories = Object.keys(bookData);

  return (
    <div className="App">
      <header>
        
        <nav>
          <ul className="list-non-bullet nav-pills">
            {categories.map((category, index) => {
              return selectedCategory === category ? (
                <li
                  key={index}
                  className="list-item-inline"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </li>
              ) : (
                <li
                  key={index}
                  className="list-item-inline"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </li>
              );
            })}
          </ul>
        </nav>

        <h1>Books for Enginnering Students</h1>
      </header>
      <div className="container">
        {bookData[selectedCategory].map((bookDetails) => {
          return (
            <div className="book-card">
              <img src={bookDetails.thumbnailUrl} alt=""></img>
              <div className="book-info">
                <h3>{bookDetails.bookName}</h3>
                <p><b>Author:</b> {bookDetails.author}</p>
                <p><b>Price:</b> {bookDetails.price}</p>
                <a href={bookDetails.buy} target="_blank">Buy Now</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
