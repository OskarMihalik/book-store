import React, {FC} from 'react';
import {get} from 'lodash'
import withApollo1 from '../../lib/withApollo1'
import {getDataFromTree} from "@apollo/client/react/ssr";

// @ts-ignore
const AuthorInfo: FC = ({query}) => {
    const id = get(query, 'id')

    return (
        <div>

        </div>
    );
};

export default withApollo1(AuthorInfo, {getDataFromTree});