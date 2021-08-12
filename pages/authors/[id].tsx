import React, {FC} from 'react';
import {get} from 'lodash'
import withApollo1 from '../../lib/withApollo1'
import {getDataFromTree} from "@apollo/client/react/ssr";
import {useQuery} from "@apollo/client";
import authorInfoQuery from "../../queries/authorInfoQuery";
import {AuthorsInfosI} from "../../queryInterface/AuthorInfoI";
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
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
        link: {
            margin: '0px 0 10px 0',
            fontFamily: theme.typography.h6.fontFamily,
            fontWeight: theme.typography.h6.fontWeight,
            fontSize: theme.typography.h6.fontSize,
            lineHeight: theme.typography.h6.lineHeight,
            letterSpacing: theme.typography.h6.letterSpacing
        },
        heading: {
            margin: '0px 0 10px 0',
            fontFamily: theme.typography.h6.fontFamily,
            fontWeight: theme.typography.h6.fontWeight,
            fontSize: theme.typography.h6.fontSize,
            lineHeight: theme.typography.h6.lineHeight,
            letterSpacing: theme.typography.h6.letterSpacing
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

    const returnPictures = (): MediaI[] | undefined => {
        if (data?.author.photos) {
            return (data?.author.photos.map((photo) => {
                return {source: photo.uri}
            }))
        } else {
            return [{source: '/imageNotFound.svg'}]
        }
    }

    return (
        <div className={classes.root}>
            <AwesomeSlider
                media={returnPictures()}
            />
            <Typography variant={'h4'}>Name</Typography>
            <Link href={`/authors/${data?.author.id}`}>
                <a className={classes.link}>{data?.author.name}</a>
            </Link>
            <Typography variant={'h4'}>Birthplace</Typography>
            <a className={classes.link}>{data?.author.birthplace}</a>
            <Typography variant={'h4'}>Date of birth</Typography>
            <a className={classes.link}>{data?.author.date_of_birth}</a>
            <Typography variant={'h4'}>Date of death</Typography>
            <a className={classes.link}>{data?.author.date_of_death}</a>
            <Typography variant={'h4'}>Books</Typography>
            {data?.author.books.map((book) => {
                return (
                    <Link href={`/books/${book.id}`} key={book.id}>
                        <a className={classes.link}>{book.title}</a>
                    </Link>
                )
            })}
        </div>
    );
};

export default withApollo1(AuthorInfo, {getDataFromTree});