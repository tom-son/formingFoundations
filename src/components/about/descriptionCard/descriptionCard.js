import React from 'react';
import classes from './descriptionCard.module.scss';

const descriptionCard = ({title, number, children}) => {
  return (
    <div className={classes.descriptionCard}>
      <div className={classes.descriptionCardBadge} style={{position: "relative", width: "80px", height: "80px", backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNNTIgODRsLTIwIC42NDFMMjIuNTU1IDY3IDEyIDUwbDEwLjU1NS0xN0wzMiAxNS4zNTkgNTIgMTZsMjAtLjY0MUw4MS40NDUgMzMgOTIgNTAgODEuNDQ1IDY3IDcyIDg0LjY0MXoiLz48bWFzayBpZD0iYyIgeD0iMCIgeT0iMCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjxwYXRoIGlkPSJiIiBkPSJNNTIgODRsLTIwIC42NDFMMjIuNTU1IDY3IDEyIDUwbDEwLjU1NS0xN0wzMiAxNS4zNTkgNTIgMTZsMjAtLjY0MUw4MS40NDUgMzMgOTIgNTAgODEuNDQ1IDY3IDcyIDg0LjY0MXoiLz48bWFzayBpZD0iZCIgeD0iMCIgeT0iMCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjY5LjI4MiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYiIvPjwvbWFzaz48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyIC0xMCkiIHN0cm9rZT0iIzExMTUxNyIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii4yIj48dXNlIG1hc2s9InVybCgjYykiIHhsaW5rOmhyZWY9IiNhIi8+PHVzZSBtYXNrPSJ1cmwoI2QpIiB0cmFuc2Zvcm09InJvdGF0ZSgtMzAgNTIgNTApIiB4bGluazpocmVmPSIjYiIvPjwvZz48L3N2Zz4=')"}}>
        <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)"}}>No. <br/>{number}</div>
      </div>
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  );
};

export default descriptionCard;