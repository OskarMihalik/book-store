import React, {FC} from 'react';
import {BookI, AuthorI, PhotoI} from '../pages'
import {Box, Grid, SvgIconTypeMap} from "@material-ui/core";
import Image from "next/image";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import {OverridableComponent} from "@material-ui/core/OverridableComponent";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

interface Iprops {
    book: BookI,
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '350px',
            height: '130px',
            display: 'flex',
            margin: '10px'
        },
        title: {
            margin: '0',
        },
        author: {
            margin: '10px 0 0 0'
        },
        img: {
            borderRadius: theme.shape.borderRadius,
            marginRight: '15px',
            boxShadow: theme.shadows[10]
        }

    }))

const Book: FC<Iprops> = ({book}) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.img} >
                <Image width={100} height={'130px'}
                       src={book.photos.length > 0 ? book.photos[0].uri : 'https://picsum.photos/id/821/400/300.jpg'}
                       alt={''} placeholder={'blur'}
                       blurDataURL={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkP+X/HwAEIQIhlw1/iQAAAABJRU5ErkJggg=='}/>
            </div>

            <Box display={'flex'} flexDirection={'column'} width={'210px'} margin={'5px 0px 0px 15px'}>
                <Typography variant={'h6'} className={classes.title}>{book.title}</Typography>
                <Typography variant={'body1'} className={classes.author}>{book.author.name}</Typography>
            </Box>
        </div>
    );
};


export default Book;