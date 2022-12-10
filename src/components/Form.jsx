import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { addPost } from "../store/postSlice";
const Form = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({ id: null, title: "", desc: "" });
  const getValues = (eo) => {
    const { name, value } = eo.target;
    setValues({ ...values, [name]: value });
  };
  const submitHandler = (eo) => {
    eo.preventDefault();
    if (values.title === "" || values.desc === "") {
      alert("write something");
    } else {
      let data = values;
      data.id = uuid();
      dispatch(addPost(data));
      setValues({ id: null, title: "", desc: "" });
    }
  };
  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <input
          value={values.title}
          type="text"
          name="title"
          id="title"
          placeholder="Enter Post Title"
          onChange={getValues}
          autoComplete="off"
        />
        <input
          value={values.desc}
          type="text"
          name="desc"
          id="desc"
          placeholder="Enter Post Desc"
          onChange={getValues}
          autoComplete="off"
        />
        <button type="submit">add post</button>
      </form>
    </div>
  );
};

export default Form;
