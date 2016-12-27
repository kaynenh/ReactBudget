/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Scores from './Scores';
import fetch from '../../core/fetch';
import Layout from '../../components/Layout';

export default [{

  path: '/scores',

  async action() {
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: '{news{title,link,contentSnippet}}',
      }),
      credentials: 'include',
    });
    const { data } = await resp.json();
    if (!data || !data.news) throw new Error('Failed to load the news feed.');
    return {
      title: 'Scores',
      component: <Layout><Scores news={data.news} /></Layout>,
    };
  },
},
{
  path: '/scores/:user_id',
  async action() {
    const resp = await fetch(`/api/tasks/${params.id}`);
    const data = await resp.json();
    return data && {
          title: 'Scores',
          component: <Layout><Scores user={data.user} /></Layout>
        };
  }
}];
