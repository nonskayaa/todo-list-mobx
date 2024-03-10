import React from "react";
import classes from "./TaskItem.module.css";
import delete_img from "../../assets/images/delete.png";
import DeleteButton from "../Buttons/DeleteButton/DeleteButton";
import CheckButton from "../Buttons/CheckButton/CheckButton";
import { Task } from "../../store/taskStore";
import { observer } from "mobx-react";
import classNames from "classnames";


const TaskItem = observer(({ task }: { task: Task }) => {
  return (
    <li className={classes.task_list__item}>
      <div className={classes.task__left_side}>
        <CheckButton taskChecked={task.check} taskId={task.id} />

        <h5
          className={
            task.check
              ? classNames(classes.task__title, classes.task__title__done)
              : classes.task__title
          }
        >
          {task.name}
        </h5>
      </div>
      <DeleteButton taskId={task.id} />
    </li>
  );
});

export default TaskItem;
