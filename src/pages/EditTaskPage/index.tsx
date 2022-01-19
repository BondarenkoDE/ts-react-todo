import React from 'react';
import { AppContext } from '../../services/context';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { PaperCustom } from '../../components/ui/PaperCustom';

import { Paper, TextField, Button } from '@mui/material';
import styles from './EditTaskPage.module.scss';

type TasksProps = {
    id: number;
    text: string;
}[];

interface ContextProps {
    stateTasks: TasksProps;
    setStateTasks: (tasks: TasksProps) => {};
}

export const EditTaskPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const idEditTask = Number(id);

    const { stateTasks, setStateTasks } = React.useContext<ContextProps>(AppContext);
    const [editText, setEditText] = React.useState(stateTasks[idEditTask - 1].text);

    const handleEditTaskText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditText(e.target.value);
    };

    const editTask = (idEditTask: number, editText: string) => {
        if (window.confirm('Вы точно хотите изменить задачу?')) {
            const editedState = stateTasks.map(({ id, text }) => {
                if (id === idEditTask) {
                    return { id, text: editText };
                }

                return { id, text };
            });

            setStateTasks(editedState);
        }
    };

    return (
        <PaperCustom>
            <Paper className={styles.wrapper}>
                <TextField className={styles.field} fullWidth autoFocus value={editText} onChange={handleEditTaskText} />

                <div className={styles.btns}>
                    <Link to="/" onClick={() => editTask(idEditTask, editText)}>
                        <Button>Применить</Button>
                    </Link>

                    <Button onClick={() => navigate(-1)}>Назад</Button>
                </div>
            </Paper>
        </PaperCustom>
    );
};
