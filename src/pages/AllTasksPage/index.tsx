import React from 'react';
import { AppContext } from '../../services/context';
import { AddTaskField } from '../../components/AddTaskField';
import { ListTask } from '../../components/ListTask';
import { PaperCustom } from '../../components/ui/PaperCustom';

import { Paper, Divider, List } from '@mui/material';
import styles from './AllTasksPage.module.scss';

type TasksProps = {
    id: number;
    text: string;
}[];

interface ContextProps {
    taskText: string;
    setTaskText: (taskText: string) => {};
    stateTasks: TasksProps;
    setStateTasks: (tasks: TasksProps) => {};
}

export const AllTasksPage = () => {
    const { taskText, setTaskText, stateTasks, setStateTasks } = React.useContext<ContextProps>(AppContext);

    const addTask = (taskText: string) => {
        if (!taskText) return;

        const id = stateTasks.length + 1;

        setStateTasks([...stateTasks, { id, text: taskText }]);
        setTaskText('');
    };

    const deleteTask = (idDeleteTask: number) => {
        if (window.confirm('Вы точно хотите удалить данную задачу?')) {
            const filteredState = stateTasks.filter(({ id }) => id !== idDeleteTask);
            setStateTasks(filteredState);
        }
    };

    return (
        <PaperCustom>
            <Paper className={styles.header} elevation={0}>
                <h4>Список задач</h4>
            </Paper>
            <AddTaskField onClickAdd={addTask} setTaskText={setTaskText} taskText={taskText} />
            <Divider />
            {stateTasks && (
                <List>
                    {stateTasks.map((obj) => (
                        <ListTask key={obj.id} id={obj.id} text={obj.text} onClickDelete={deleteTask} />
                    ))}
                </List>
            )}
        </PaperCustom>
    );
};
