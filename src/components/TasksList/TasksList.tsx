import React from "react";
import classes from "./TasksList.module.css";
import ClearAllButton from "../Buttons/ClearAllButton/ClearAllButton";
import taskStore from "../../store/taskStore";
import { observer } from "mobx-react";
import sad_emoji from "../../assets/images/emoji_sad.png";

import TaskItem from "../TaskItem/TaskItem";

const TasksList = observer(() => {
  return (
    <ul className={classes.task_list}>
      {taskStore.taskList.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
      {taskStore.taskList.length > 0 ? (
        <ClearAllButton />
      ) : (
        <li className={classes.task_list__item_empty}>
          <p className={classes.item_empty__title}>
            Пока у тебя <br /> нет задачек :(
          </p>
          <img src={sad_emoji} alt="" className={classes.item_empty__emoji} />
        </li>
      )}
    </ul>
  );
});

export default TasksList;
