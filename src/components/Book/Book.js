import { Button } from "@mui/material";
import "./Book.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Book = (props) => {
  const [visible,setVisible]=useState(true)
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:3005/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
    setVisible((prev)=>!prev)
  };
  return (
    <>
      {visible && (
        <div className="card">
          <img src={image} alt={name} />
          <article>By {author}</article>
          <h3>{name}</h3>
          <p>{description}</p>
          <h3>Rs {price}</h3>
          <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>
            {/* how link this to throuth the details page */}
            Update
          </Button>
          <Button onClick={deleteHandler} sx={{ mt: "auto" }}>
            Delete
          </Button>
        </div>
      )}
    </>
  );
};

export default Book;
