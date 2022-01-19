import React from 'react';
import { Link } from 'react-router-dom';

import { IconButton, ListItem, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import styles from './ListTask.module.scss';

interface ListTaskProps {
    id: number;
    text: string;
    onClickDelete: (id: number) => void;
}

export const ListTask: React.FC<ListTaskProps> = ({ id, text, onClickDelete }) => {
    return (
        <>
            <ListItem className={styles.listItem}>
                <div className={styles.flex}>
                    <Typography className={styles.text}>{text}</Typography>
                    <div className={styles.buttons}>
                        <Link to={`/edit/${id}`}>
                            <IconButton>
                                <EditIcon style={{ fontSize: 20 }} />
                            </IconButton>
                        </Link>
                        <IconButton onClick={() => onClickDelete(id)}>
                            <DeleteOutlineIcon style={{ fontSize: 20 }} />
                        </IconButton>
                    </div>
                </div>
            </ListItem>
        </>
    );
};
