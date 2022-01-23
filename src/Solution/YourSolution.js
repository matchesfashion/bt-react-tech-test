import '../AdditionalFiles/App.css';
import * as React from "react";

//This is the API url to fetch from
const API_URL = 'https://matchesfashion.com/api/products';
const TAX_RATE = 0.08;

function YourSolution() {
    return (
    <div className="App">
      <table id="products">
        <thead>
          <td>Id</td>
          <td>Brand</td>
          <td>Name</td>
          <td>Quantity Sold</td>
          <td>Sold Price</td>
          <td>Cost To Business</td>
        </thead>
          <tbody>
          </tbody>
      </table>
      <button>First Page</button>
      <button>Previous Page</button>
      <button>Next Page</button>
      <button>Last Page</button>
    </div>
  );
}

export default YourSolution;
