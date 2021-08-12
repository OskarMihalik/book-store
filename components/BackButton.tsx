import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Link from 'next/link'
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            display: 'flex',
            padding: '10px 20px 10px 20px',
            cursor: 'pointer',
            justifyContent: 'center',
            width: '200px',
            alignSelf: 'center'

        },
        link: {
            margin: '0',
            fontFamily: theme.typography.h6.fontFamily,
            fontWeight: 1000,
            fontSize: theme.typography.h6.fontSize,
            lineHeight: theme.typography.h6.lineHeight,
            letterSpacing: theme.typography.h6.letterSpacing
        }
    }),
);

const BackButton = () => {
    const classes = useStyles()
    return (
        <Link href={'/'} passHref>
            <Paper variant={"outlined"} className={classes.button}>
                <a className={classes.link}>Back</a>
            </Paper>
        </Link>

    );
};

export default BackButton;