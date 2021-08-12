import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 400,
            margin: '30px 0 30px 0'
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
        },
        iconButton: {
            padding: 10,
        },
    }),
);

interface Iprops{
    filterStr: string;
    setFilterStr: Dispatch<SetStateAction<string>>
}

const Search:FC<Iprops> = ({filterStr, setFilterStr}) => {
    const classes = useStyles()

    return (
        <Paper variant={'outlined'} className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Search books"
                inputProps={{ 'aria-label': 'Search books' }}
                value={filterStr}
                onChange={(event => setFilterStr(event.target.value))}
            />
            <IconButton className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
};

export default Search;