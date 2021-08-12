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
import {useInformationStyles} from "../../styles/InformationStyle";
import Link from 'next/link'

interface BookId {
    id: string;
}

interface MediaI {
    source: string
}

// @ts-ignore
const SingleBook = ({query}) => {
    const classes = useInformationStyles()
    const id = get(query, 'id')

    const returnPictures = (): MediaI[] | undefined => {
        if (data?.book.photos) {
            return (data?.book.photos.map((photo) => {
                return {source: photo.uri}
            }))
        } else {
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
            <AwesomeSlider
                media={returnPictures()}
            />
            <Typography variant={'h4'}>Title</Typography>
            <a className={classes.link}>{data?.book.title}</a>
            <Typography variant={'h4'}>Author</Typography>
            <Link href={`/authors/${data?.book.author.id}`}>
                <a className={classes.link}>{data?.book.author.name}</a>
            </Link>
            <Typography variant={'h4'}>Chapters</Typography>
            <a className={classes.link}>{data?.book.chapters[0].title.match(/\d+/)}</a>
            <Typography variant={'h5'}>Where to Buy</Typography>
            {data?.book.stores.map((store, index) => {
                return (
                    <div key={index}>
                        <a className={classes.link}>{store.name}</a>
                        <a className={classes.link}>{store.address}</a>
                    </div>
                )
            })}

        </div>
    );
};

export default withApollo1(SingleBook, {getDataFromTree});