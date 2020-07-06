import React, { useState, useEffect, useRef } from "react";
import api from "./services/api";
import reactLogo from "./assets/reactjs-logo.svg";
import nodeLogo from "./assets/nodejs-logo.svg";

import Button from "./components/button";
import { Container, GlobalStyles } from "./styles";

const App = () => {
  let createText = useRef("");
  let updateText = useRef("");
  const [data, setData] = useState([]);
  const [selectedTodos, setSelectedTodos] = useState([]);
  const [uncheck, setUncheck] = useState(null);

  useEffect(() => {
    getData();
  }, [data]);

  const getData = async () => {
    const res = await api.get("/todos");
    setData(res.data);
  };

  const handleSelect = (item) => {
    selectedTodos.length > 0
      ? selectedTodos.forEach((todo) => {
          todo._id !== item._id
            ? setSelectedTodos([...selectedTodos, item])
            : setSelectedTodos(
                selectedTodos.filter((todo) => todo._id !== item._id)
              );
        })
      : setSelectedTodos([...selectedTodos, item]);
  };

  const createTodo = () => {
    api.post("/todos", { title: createText.current.value });
    createText.current.value = "";
  };

  const updateTodo = () => {
    selectedTodos.forEach((todo) =>
      api.put(`/todos/${todo._id}`, { title: updateText.current.value })
    );
    updateText.current.value = "";
    setUncheck(Math.random());
  };

  const deleteTodo = () => {
    selectedTodos.forEach((todo) => api.delete(`/todos/${todo._id}`));
    setSelectedTodos([]);
  };

  return (
    <>
      <GlobalStyles />
      <Container>
        <div className="header-container">
          <h1>Fullstack TodoList</h1>
          <img className="node-logo" src={nodeLogo} />
          <img className="react-logo" src={reactLogo} />
        </div>
        <div className="cards-container">
          <div className="card">
            <h2>MY TODOS</h2>
            {data.map((item) => (
              <div key={`${item._id}-${uncheck}`} className="todo-container">
                <input
                  type="checkbox"
                  value={item._id}
                  onChange={() => handleSelect(item)}
                />
                <p>{item.title}</p>
              </div>
            ))}
          </div>

          <div className="card">
            <h2>ACTIONS</h2>
            <h3>Create todo</h3>
            <div className="box-action">
              <input ref={createText} />
              <Button color="#0041F8" text="Create" click={createTodo} />
            </div>

            <h3>Update todo</h3>
            <div className="box-action">
              <input ref={updateText} />
              <Button color="#D203AB" text="Update" click={updateTodo} />
            </div>
            <div
              style={{
                width: 300,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  disabled={selectedTodos.length === 0}
                  size="165px"
                  color="#000"
                  text="Delete"
                  click={deleteTodo}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default App;
