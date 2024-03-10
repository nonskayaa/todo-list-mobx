import React from "react";
import classes from "./DeleteButton.module.css";
import delete_img from "../../../assets/images/delete.png";
import taskStore from "../../../store/taskStore";

export default function DeleteButton({ taskId }: { taskId: number }) {
  return (
    <button
      className={classes.btn_delete}
      onClick={() => taskStore.deleteTask(taskId)}
    >
      <img src={delete_img} className={classes.btn_delete__icon} alt="delete" />
    </button>
  );
}
