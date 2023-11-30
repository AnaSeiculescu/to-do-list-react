import express from "express";
import cors from "cors";

const app = express();
const port = 3030;

app.use(cors({ origin: "*" }));
app.use(express.json());

const todoItems = [];
let nextId = 1;

const isValidId = (id) => {
  return todoItems.some((item) => item.id === parseInt(id));
};

const todoProperties = ["text", "isCompleted"];

const isValidTodo = (todo) => {
  for (const key of Object.keys(todo)) {
    if (!todoProperties.includes(key)) {
      return false;
    }

    if (key === "text" && typeof todo[key] !== "string") {
      return false;
    }

    if (key === "isCompleted" && typeof todo[key] !== "boolean") {
      return false;
    }
  }

  return true;
};

const hasAllTodoProperties = (todo) => {
  return todoProperties.every((prop) => todo[prop] !== undefined);
};

app.get("/api/todos", (req, res) => {
  res.json(todoItems);
});

app.post("/api/todos", (req, res) => {
  const todo = req.body;
  if (!isValidTodo(todo)) {
    res
      .status(400)
      .send(
        "Invalid todo. Allowed properties: text (string), isCompleted (boolean)"
      );
    return;
  }

  if (!hasAllTodoProperties(todo)) {
    res
      .status(400)
      .send(
        `Todo must have all properties: ${todoProperties.join(
          ", "
        )}. Received: ${Object.keys(todo).join(", ")}`
      );
    return;
  }

  const newTodo = { id: nextId, isCompleted: false, ...todo };
  nextId++;
  todoItems.push(newTodo);

  res.status(201).json(newTodo);
});

app.patch("/api/todos/:id", (req, res) => {
  const todoId = req.params.id;
  if (!isValidId(todoId)) {
    res.status(404).send(`Todo with ID ${todoId} not found`);
    return;
  }

  const todo = req.body;
  if (!isValidTodo(todo)) {
    res
      .status(400)
      .send(
        "Invalid todo. Allowed properties: text (string), isCompleted (boolean)"
      );
    return;
  }

  const todoIndex = todoItems.findIndex((item) => item.id === parseInt(todoId));
  todoItems[todoIndex] = { ...todoItems[todoIndex], ...todo };
  res.json(todoItems[todoIndex]);
});

app.delete("/api/todos/:id", (req, res) => {
  const todoId = req.params.id;
  if (!isValidId(todoId)) {
    res.status(404).send(`Todo with ID ${todoId} not found`);
    return;
  }

  const todoIndex = todoItems.findIndex((item) => item.id === todoId);
  todoItems.splice(todoIndex, 1);
  res.status(204).end();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
