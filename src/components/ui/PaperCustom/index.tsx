import React from 'react';

import { Paper } from '@mui/material';
import styles from './PaperCustom.module.scss';

interface PaperCustomProps {
    children: React.ReactNode;
}

export const PaperCustom: React.FC<PaperCustomProps> = ({ children }) => {
    return <Paper className={styles.wrapper}>{children}</Paper>;
};
