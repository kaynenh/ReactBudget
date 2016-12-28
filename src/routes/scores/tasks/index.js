/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Scores from '../Scores';
import fetch from '../../../core/fetch';
import Layout from '../../../components/Layout';

export default {
    path: '/scores/:user_id/:action',
    async action({ path, params, query }) {
        console.log(path);                // => '/path/hello'
        console.log(params);              // => { any: 'hello' }
        console.log(query);               // => { the: 'query' }
        return {
            title: 'Scores for User '+params.user_id+' '+params.action,
            component: <Layout><Scores user={params.user_id} /></Layout>
        };
    }
};
