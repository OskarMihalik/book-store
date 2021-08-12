import React, {FC} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import withApollo1 from '../lib/withApollo1'
import {useQuery} from "@apollo/client";
import {authorsQuery} from '../queries/authorsQuery'
import {Authors} from "../queryInterface/AuthorsI";
import Link from 'next/link'
import Image from "next/image";
import {getDataFromTree} from "@apollo/client/react/ssr";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: '2px 4px 2px 4px',
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '20px',
        },
        authorContainer: {
            display: 'flex',
            margin: '10px 0px 0px 0px',
        },
        imgContainer: {
            borderRadius: '50%',
            boxShadow: theme.shadows[10],
            marginRight: '10px',
            width: '50px',
            height: '50px',
            minWidth: '50px',
            minHeight: '50px'
        },
        img: {
            borderRadius: '50%',
        },
        authorLink: {
            margin: '10px 0 0 0',
            fontFamily: theme.typography.body1.fontFamily,
            fontWeight: theme.typography.body1.fontWeight,
            fontSize: theme.typography.body1.fontSize,
            lineHeight: theme.typography.body1.lineHeight,
            letterSpacing: theme.typography.body1.letterSpacing
        },
    }),
);

const AuthorList:FC = ()=> {
    const classes = useStyles()
    const {data} = useQuery<Authors>(authorsQuery)

    return (
        <div className={classes.root}>
            <Typography variant={'h4'}>Authors</Typography>
            {data?.authors.map((author, index)=>{
                return(
                    <div key={index} className={classes.authorContainer}>
                        <div className={classes.imgContainer}>
                            <Image
                                className={classes.img}
                                width={50}
                                height={'50px'}
                                src={author.photos.length > 0 ? author.photos[0].uri : '/imageNotFound.svg'}
                                alt={''}
                            />
                        </div>
                        <Link href={`/authors/${author.id}`} passHref>
                            <a className={classes.authorLink}>{author.name}</a>
                        </Link>
                    </div>
                )
            })}
        </div>
    );
};

export default withApollo1(AuthorList, {getDataFromTree});