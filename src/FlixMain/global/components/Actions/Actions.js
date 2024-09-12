import React from "react";
import { MdAdd, MdPlaylistAdd } from "react-icons/md";
import { LuThumbsUp } from "react-icons/lu";
import { IoShareSocialSharp } from "react-icons/io5";
import { CgPlayListRemove } from "react-icons/cg";
import styles from "./Actions.module.css";
import { isMovieOnUserList } from "../../../utils/isMovieOnUserList";

const Actions = ({
  userMovies = [], // Default to an empty array
  addToUserList,
  removeFromUserList,
  movieId,
}) => {
  const onList = isMovieOnUserList(userMovies, movieId);

  console.log(onList, 'onList')

 

  const actions = [
    {
      text: "My List",
      icon: onList ? <CgPlayListRemove /> : <MdPlaylistAdd />,
      onClick: () => {
        if (onList) {
          removeFromUserList(movieId);
        } else {
          addToUserList(movieId);
        }
      },
    },
    {
      text: "Like",
      icon: <LuThumbsUp />,
      onClick: () => {
        // Handle like action
      },
    },
    {
      text: "Share",
      icon: <IoShareSocialSharp />,
      onClick: () => {
        // Handle share action
      },
    },
  ];

  return (
    <div className="d-flex gap-4 align-items-center">
      {actions.map((action, index) => (
        <div
          key={index}
          className={`${styles.actionsContainer} d-flex flex-column align-items-center gap-1`}
        >
          <div 
            onClick={action.onClick}
            className={`${styles.iconContainer} fs-5`}
          >
            {action.icon}
          </div>
          <small>{action.text}</small>
        </div>
      ))}
    </div>
  );
};

export default Actions;
