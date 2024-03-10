import React from "react";
import classes from "./CheckButton.module.css";
import taskStore from "../../../store/taskStore";
import classNames from "classnames";
import { observer } from "mobx-react";

const CheckButton = observer(
  ({ taskChecked, taskId }: { taskChecked: boolean; taskId: number }) => {
    return (
      <button
        className={
          taskChecked
            ? classNames(classes.btn_check, classes.btn_check__done)
            : classes.btn_check
        }
        onClick={() => {
          taskStore.checkTask(taskId);
        }}
      ></button>
    );
  }
);

export default CheckButton;
