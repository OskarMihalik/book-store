import Head from 'next/head'
import {ApolloClient, ApolloQueryResult, InMemoryCache, QueryResult} from '@apollo/client';
import {RestLink} from 'apollo-link-rest';
import {gql} from '@apollo/client';
import {JsonApiLink} from "apollo-link-json-api";
import {useEffect, useState} from "react";
import React from 'react';
import {useQuery} from '@apollo/client';
import client from '../lib/withApollo'
import {booksQuery, booksQuery as query} from '../queries/booksQuery'
import Book from "../components/Book";
import {Box} from "@material-ui/core";
import {Grid} from "@material-ui/core";
import Search from "../components/Search";
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import withApollo1 from '../lib/withApollo1'
import {getDataFromTree} from "@apollo/client/react/ssr";
import Link from 'next/link'
import BooksI from "../queryInterface/booksI";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            alignItems: 'center',
            flexDirection:'column',
        },
    }),
);

function Home() {
    const classes = useStyles()

    const {data} = useQuery<BooksI>(booksQuery)

// Invoke the query and log the person's name
    return (
        <div className={classes.root}>
            <Head>
                <title>Book store</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Search/>
            <Box alignSelf={'flex-start'} marginLeft={'15px'}>
                <Typography variant={'h4'}>Browse</Typography>
            </Box>
            <Box width={'100%'} display={'flex'} flexWrap={'wrap'} justifyContent={'space-between'} padding={'0 10px 0 10px'}>
                {data?.books.map((book, index)=> {
                    return (
                        <Book key={index} book={book}/>
                    )
                })}
            </Box>
        </div>
    )
}

export default withApollo1(Home, { getDataFromTree })