import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppContext } from './services/context';

import { Layout } from './components/Layout';
import { AllTasksPage } from './pages/AllTasksPage';
import { EditTaskPage } from './pages/EditTaskPage';

import CssBaseline from '@mui/material/CssBaseline';

type TasksProps = {
    id: number;
    text: string;
}[];

function App() {
    const [taskText, setTaskText] = React.useState<string>('');

    const [stateTasks, setStateTasks] = React.useState<TasksProps>([
        {
            id: 1,
            text: 'Задача1'
        },
        {
            id: 2,
            text: 'Задача2'
        }
    ]);

    return (
        <>
            <CssBaseline />
            <AppContext.Provider value={{ taskText, setTaskText, stateTasks, setStateTasks }}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<AllTasksPage />} />
                        <Route path="edit/:id" element={<EditTaskPage />} />
                    </Route>
                </Routes>
            </AppContext.Provider>
        </>
    );
}

export default App;
