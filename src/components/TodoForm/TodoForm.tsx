import React from "react";
import classes from "./TodoForm.module.css";
import taskStore from "../../store/taskStore";
import { useState } from "react";

export default function TodoForm() {
  const [taskName, setTaskName] = useState("");

  return (
    <form className={classes.todo_list__form}>
      <div className={classes.todo_list__input_container}>
        <input
          type="text"
          className={classes.todo_list__input_box}
          placeholder="добавь новую задачку, ну добавь ну..."
          onChange={(e) => setTaskName(e.target.value)}
          value={taskName}
        />
        <button
          className={classes.todo_list__btn}
          type="button"
          onClick={() => {
            taskStore.addTask(taskName);
            setTaskName("");
          }}
        >
          тык
        </button>
      </div>
    </form>
  );
}
