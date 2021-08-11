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
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import imageNotFound from '../../public/imageNotFound.svg'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column'
        },
        imgContainer: {
            display: 'flex',
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
    const id = get(query, 'id')

    const returnPictures = (): MediaI[] | undefined=>{
        if (data?.book.photos) {
            return (data?.book.photos.map((photo) => {
                return {source: photo.uri}
            }))
        }else{
            return [{source: '../../public/imageNotFound.svg'}]
        }
    }

    const {data} = useQuery<SingleBookI, BookId>(bookQuery, {
        variables: {
            id,
        }
    })
    return (
        <div>
            <AwesomeSlider
                media={returnPictures()}
            />
        </div>
    );
};

export default withApollo1(SingleBook, {getDataFromTree});