import React from 'react';
import { Outlet } from 'react-router-dom';

import Box from '@mui/material/Box';
import styles from './Layout.module.scss';

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = () => {
    return (
        <Box className={styles.wrapper}>
            <Outlet />
        </Box>
    );
};
