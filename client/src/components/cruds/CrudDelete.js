import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { apilink } from "./CrudDetails";

function CrudDelete() {
  const [crud, setCrud] = useState({});
  const { _id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function deleteCrudById() {
      try {
        const response = await axios.get(`${apilink}/api/cruds/${_id}`, { timeout: 5000 });
        setCrud(response.data);
      } catch (error) {
        console.log("error", error);
      }
    }
    deleteCrudById();
  }, [_id]);

  async function handleDelete() {
    try {
      await axios.delete(`https://backend-five-fawn.vercel.app/api/cruds/${_id}`);
      navigate("/cruds");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container">
      <h2>{crud.companyName}</h2>
      <p>
        <b>Phone</b>: <a href={`tel:+${crud.phone}`}> {crud.phone} </a>
      </p>
      <p>
        <b>Email</b>: {crud.email}
      </p>
      <p>
        <b>Location</b>: {crud.location}
      </p>
      <p>
        <b>Link</b>:<a href={`${crud.link}`}> {crud.link} </a>
      </p>
      <p>
        <b>Description</b>: {crud.description}
      </p>
      <p>
        <small>
          <b>ID</b>: {crud._id}
        </small>
      </p>
      <div className="btn-group">
        <button onClick={handleDelete} className="btn btn-danger">
          Delete
        </button>
        <Link to="/cruds" className="btn btn-secondary">
          Cancel{" "}
        </Link>
      </div>
      <hr />
    </div>
  );
}

export default CrudDelete;
