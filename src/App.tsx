import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import EventsExample from "./components/EventsExample";
import {BrowserRouter, NavLink, Route} from 'react-router-dom'
import UsersPage from "./components/UsersPage";
import TodosPage from './components/TodosPage';
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from './components/TodoItemPage';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <div>
                    <NavLink to="/users">Пользователи</NavLink>
                    <NavLink to="/todos">Список дел</NavLink>
                    <NavLink to="/card">Card</NavLink>
                </div>
                <Route path={'/users'} exact>
                    <UsersPage/>
                </Route>
                <Route path={'/users/:id'}>
                    <UserItemPage/>
                </Route>
                <Route path={'/todos'} exact>
                    <TodosPage/>
                </Route>
                <Route path={'/todos/:id'} exact>
                    <TodoItemPage/>
                </Route>
                <Route path={'/card'} exact>
                    <EventsExample/>
                    <Card
                        width={'300px'}
                        height={'50px'}
                        variant={CardVariant.primary}
                        onClick={(num) => console.log(num)}>
                        <button>Button</button>
                        <div>Safari</div>
                    </Card>
                </Route>
            </div>
        </BrowserRouter>
    );
};

export default App;