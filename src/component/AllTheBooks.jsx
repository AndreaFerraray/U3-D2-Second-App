import React from "react";
import { Card } from "react-bootstrap";
import booksData from "../book.json";

function AllTheBooks() {
  return (
    <div className="row">
      {booksData.map((book, index) => (
        <div className="col-md-4 mb-3" key={index}>
          <Card>
            <Card.Img variant="top" src={book.img} alt={book.title} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>{book.price}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
      ;
    </div>
  );
}

export default AllTheBooks;
