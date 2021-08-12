import React from 'react';
import {Grid} from "@material-ui/core";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export interface LayoutProps  {
    children: React.ReactNode
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        rootLayout: {
            padding: '0% 10% 30px 10%',
            background: theme.palette.background.paper,
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'
        }
    }),
);

const Layout = (props: LayoutProps) => {
    const classes = useStyles()

    return (
        <div className={classes.rootLayout}>
            {props.children}
        </div>
    );
};

export default Layout;