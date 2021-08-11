import React, {FC} from 'react';
import withApollo1 from '../../lib/withApollo1'
import {getDataFromTree} from "@apollo/client/react/ssr";
import {useQuery} from "@apollo/client";
import bookQuery from '../../queries/bookQuery'
import {get} from 'lodash'
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import SingleBookI from "../../queryInterface/SingleBookI";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            padding: '20px 20% 0px 20%',
            minWidth: '380px'
        },
        imgContainer: {
            marginBottom: '50px'
        },
        adressContainer:{
            backgroundColor: theme.palette.info.main,
            borderRadius: theme.shape.borderRadius,
            maxWidth: '360px',
            padding: '10px 20px 10px 20px'
        }

    }),
);

interface BookId {
    id: string;
}

interface MediaI {
    source: string
}

// @ts-ignore
const SingleBook = ({query}) => {
    const classes = useStyles()
    const id = get(query, 'id')

    const returnPictures = (): MediaI[] | undefined=>{
        if (data?.book.photos) {
            return (data?.book.photos.map((photo) => {
                return {source: photo.uri}
            }))
        }else{
            return [{source: '/imageNotFound.svg'}]
        }
    }

    const {data} = useQuery<SingleBookI, BookId>(bookQuery, {
        variables: {
            id,
        }
    })

    return (
        <div className={classes.root}>
            <div className={classes.imgContainer}>
                <AwesomeSlider
                    media={returnPictures()}
                />
            </div>
            <Typography variant={'h4'}>Title: {data?.book.title}</Typography>
            <Typography variant={'h5'}>Author: {data?.book.author.name}</Typography>
            <Typography variant={'h5'}>Chapters: {data?.book.chapters.map((chapter)=>{
                return(`${chapter.title.match(/\d+/)} `)
            })}
            </Typography>
            <Typography variant={'h5'}>Where to Buy:</Typography>
            <div className={classes.adressContainer}>
                {data?.book.stores.map((store, index)=>{
                    return(
                        <div key={index}>
                            <Typography variant={'h6'}>{store.name}</Typography>
                            <Typography variant={'h6'}>{store.address}</Typography>
                        </div>
                    )
                })}
            </div>

        </div>
    );
};

export default withApollo1(SingleBook, {getDataFromTree});