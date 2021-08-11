import React from 'react';
import {Grid} from "@material-ui/core";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export interface LayoutProps  {
    children: React.ReactNode
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: '0% 10% 0% 10%',
            background: theme.palette.background.paper,
            minHeight: '100vh'
        }
    }),
);

const Layout = (props: LayoutProps) => {
    const classes = useStyles()

    return (
        <Grid container direction={'column'} className={classes.root}>
            {props.children}
        </Grid>
    );
};

export default Layout;