import React, {FC} from 'react';
import {get} from 'lodash'
import withApollo1 from '../../lib/withApollo1'
import {getDataFromTree} from "@apollo/client/react/ssr";
import {useQuery} from "@apollo/client";
import authorInfoQuery from "../../queries/authorInfoQuery";
import {AuthorsInfosI} from "../../queryInterface/AuthorInfoI";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Link from 'next/link'
import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            minWidth: '380px'
        },
    }),
);

interface MediaI {
    source: string
}

// @ts-ignore
const AuthorInfo: FC = ({query}) => {
    const classes = useStyles()

    const id = get(query, 'id')
    const {data} = useQuery<AuthorsInfosI>(authorInfoQuery, {
        variables: {
            id,
        }
    })

    const returnPictures = (): MediaI[] | undefined=>{
        if (data?.author.photos) {
            return (data?.author.photos.map((photo) => {
                return {source: photo.uri}
            }))
        }else{
            return [{source: '/imageNotFound.svg'}]
        }
    }

    return (
        <div className={classes.root}>
            <AwesomeSlider
                media={returnPictures()}
            />
            <Typography variant={'h5'}>Name</Typography>
            <a>{data?.author.name}</a>
            <Typography variant={'h5'}>Birthplace</Typography>
            <a>{data?.author.birthplace}</a>
            <Typography variant={'h5'}>Date of birth</Typography>
            <a>{data?.author.date_of_birth}</a>
            <Typography variant={'h5'}>Date of death</Typography>
            <a>{data?.author.date_of_death}</a>
            <Typography variant={'h5'}>Date of death</Typography>
            {data?.author.books.map((book)=>{
                return(
                    <div key={book.id}>
                        <a>{book.title}</a>
                    </div>
                )
            })}
        </div>
    );
};

export default withApollo1(AuthorInfo, {getDataFromTree});