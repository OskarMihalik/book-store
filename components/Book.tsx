import React, {FC} from 'react';
import {Box} from "@material-ui/core";
import Image from "next/image";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Link from 'next/link'
import {BookI} from "../queryInterface/booksI";

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
            margin: theme.typography.h6.margin,
            fontFamily: theme.typography.h6.fontFamily,
            fontWeight: theme.typography.h6.fontWeight,
            fontSize: theme.typography.h6.fontSize,
            lineHeight: theme.typography.h6.lineHeight,
            letterSpacing: theme.typography.h6.letterSpacing
        },
        author: {
            margin: '10px 0 0 0',
            fontFamily: theme.typography.body1.fontFamily,
            fontWeight: theme.typography.body1.fontWeight,
            fontSize: theme.typography.body1.fontSize,
            lineHeight: theme.typography.body1.lineHeight,
            letterSpacing: theme.typography.body1.letterSpacing
        },
        imgDiv: {
            borderRadius: theme.shape.borderRadius,
            marginRight: '15px',
            boxShadow: theme.shadows[10],
        },
        img:{
            borderRadius: theme.shape.borderRadius,
        }
    }))

const Book: FC<Iprops> = ({book}) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.imgDiv} >
                <Image width={100} height={'130px'}
                       className={classes.img}
                       src={book.photos.length > 0 ? book.photos[0].uri : '/imageNotFound.svg'}
                       alt={''}
                />
            </div>
            <Box display={'flex'} flexDirection={'column'} width={'210px'} margin={'5px 0px 0px 15px'}>
                <Link href={`/books/${book.id}`} passHref={true}>
                    <a className={classes.title}>{book.title}</a>
                </Link>
                <Link href={'/'} passHref>
                    <a className={classes.author}>{book.author.name}</a>
                </Link>
            </Box>
        </div>
    );
};

export default Book;