import React from "react";
import Form from "./components/Form";
import PostList from "./components/PostList";

const App = () => {
  return (
    <div className="App">
      <h1>CRUD app using redux toolkit</h1>
      <Form />
      <PostList />
    </div>
  );
};

export default App;
