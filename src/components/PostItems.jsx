import React, { useState } from "react";
import { editPost } from "../store/postSlice";

const PostItems = ({ post, removeHandler, dispatch }) => {
  const [valuesEdit, setValuesEdit] = useState({
    id: null,
    title: null,
    desc: null,
  });
  const [edit, setEdit] = useState(false);
  const editHandler = (id) => {
    setEdit(true);
    setValuesEdit({ ...valuesEdit, id: id });
  };
  const submitHandler = () => {
    dispatch(editPost(valuesEdit));
    setEdit(false);
  };
  return (
    <>
      {post.length > 0 ? (
        post.map((item) => {
          return (
            <div className="post" key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <div className="btns">
                <button onClick={() => editHandler(item.id)}>edit</button>
                <button onClick={() => removeHandler(item.id)}>delete</button>
              </div>
              {edit && valuesEdit.id === item.id && (
                <div className="edit">
                  <input
                    placeholder="update title"
                    type="text"
                    name="editTitle"
                    id="editTitle"
                    onChange={(eo) =>
                      setValuesEdit({ ...valuesEdit, title: eo.target.value })
                    }
                  />
                  <input
                    placeholder="update desc"
                    type="text"
                    name="editDesc"
                    id="editDesc"
                    onChange={(eo) =>
                      setValuesEdit({ ...valuesEdit, desc: eo.target.value })
                    }
                  />
                  <button onClick={submitHandler}>update</button>
                </div>
              )}
            </div>
          );
        })
      ) : (
        <h3 style={{ textAlign: "center" }}>No Post Yet</h3>
      )}
    </>
  );
};

export default PostItems;
