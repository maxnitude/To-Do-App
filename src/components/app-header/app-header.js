import React from 'react';
import './app-header.css';

const AppHeader = ({importantPosts, allPosts}) => {
    return (
        <div className="app-header">
            <h1>To-Do List</h1>
            <h2>Количество записей: {allPosts}, избранное: {importantPosts}</h2>
        </div>
    )
}

export default AppHeader;
