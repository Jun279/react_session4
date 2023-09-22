import TodoItem from "../list-item/todo-item";
// import React from "react";

const TodoList = ({data}) => {
    return (
        <>
          {data.map((item, index) => {
            return (
              <TodoItem
                key = {index}
                title = {item.title}
              />
            )
          })}
        </>
    )
}

export default TodoList;