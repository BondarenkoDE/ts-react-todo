import React from 'react';

import { TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import styles from './AddTaskField.module.scss';

interface AddTaskFieldProps {
    taskText: string;
    setTaskText: (taskText: string) => void;
    onClickAdd: (taskText: string) => void;
}

export const AddTaskField: React.FC<AddTaskFieldProps> = ({ taskText, setTaskText, onClickAdd }) => {
    const handleChangeTaskText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskText(e.target.value);
    };

    return (
        <div className={styles.field}>
            <TextField
                placeholder="Введите текст задачи..."
                variant="standard"
                fullWidth
                value={taskText}
                InputProps={{ disableUnderline: true }}
                onChange={handleChangeTaskText}
            />
            <Button onClick={() => onClickAdd(taskText)}>
                <AddIcon />
            </Button>
        </div>
    );
};
