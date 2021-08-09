import React, {FC} from 'react';
import {BookI, AuthorI, PhotoI} from '../pages'
import {Box, SvgIconTypeMap} from "@material-ui/core";
import Image from "next/image";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import {OverridableComponent} from "@material-ui/core/OverridableComponent";

interface Iprops {
    book: BookI,
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            font: 'normal normal bold 20px/34px Montserrat',
            letterSpacing: '0px',
            color: '#140F29'
        },

    }))

const Book: FC<Iprops> = ({book}) => {
    const classes = useStyles()

    return (
        <Box display={'flex'} margin={1} width={350} height={150}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Box>
                <Image width={100} height={150} src={book.photos.length > 0 ? book.photos[0].uri : 'https://picsum.photos/id/821/400/300.jpg'} alt={''} placeholder={'blur'}
                       blurDataURL={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkP+X/HwAEIQIhlw1/iQAAAABJRU5ErkJggg=='}/>
            </Box>
            <Box display={'flex'} flexDirection={'column'} width={"70%"}>
                <h1 className={classes.title}>{book.title}</h1>
                <p>{book.author.name}</p>
            </Box>

        </Box>
    );
};


export default Book;