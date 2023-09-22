import TodoList from "../components/list/todo-list";
import TodoDataSet from "../util/todo-dataset"
import React, { useState } from 'react';
import TodoItem from "../components/list-item/todo-item";

const Home = () => {
    const [data, setData] = useState(TodoDataSet)
    return(
        <>
            <TodoList data={data}/>
        </>
    )
}

export default Home;