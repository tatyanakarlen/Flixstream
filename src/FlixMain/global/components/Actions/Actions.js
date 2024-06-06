import React from "react";
import { MdAdd } from "react-icons/md";
import { LuThumbsUp } from "react-icons/lu";
import { IoShareSocialSharp } from "react-icons/io5";
import styles from './Actions.module.css'

const Actions = () => {
  const actions = [
    {
      text: "My List",
      icon: <MdAdd />,
    },
    {
      text: "Like",
      icon: <LuThumbsUp />,
    },
    {
      text: "Share",
      icon: <IoShareSocialSharp />,
    },
  ];
  return (
    <div className="d-flex gap-4 align-items-center">
      {actions.map((action, index) => (
        <div
        key={index}
          className={`${styles.actionsContainer} d-flex flex-column align-items-center gap-1`}
        >
          <div className={`${styles.iconContainer} fs-5`}>{action.icon}</div>
          <small>{action.text}</small>
        </div>
      ))}
    </div>
  );
};

export default Actions;
