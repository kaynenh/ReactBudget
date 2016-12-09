/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import SpreadsheetComponent from 'react-spreadsheet-component';

// Example Two
var exampleTwo = {};
exampleTwo.initialData = {
  rows: [
    ['Customer', 'Job', 'Contact', 'City', 'Revenue'],
    ['iDiscovery', 'Build', 'John Doe', 'Boston, MA', '500,000'],
    ['SxSW', 'Build', 'Tom Fuller', 'San Francisco, CA', '600,000'],
    ['CapitalTwo', 'Failed', 'Eric Pixel', 'Seattle, WA', '450,000']
  ]
};

exampleTwo.cellClasses = {
  rows: [
    ['', '', '', '', '', '', '', ''],
    ['green', '', '', '', '', '', '', 'dollar'],
    ['purple', '', '', '', '', '', '', 'dollar'],
    ['yellow', 'failed', '', '', '', '', '', 'dollar'],
  ]
};

exampleTwo.config = {
  rows: 5,
  columns: 5,
  headColumn: true,
  headColumnIsString: true,
  headRow: true,
  headRowIsString: true,
  canAddRow: false,
  canAddColumn: false,
  emptyValueSymbol: '-',
  letterNumberHeads: false
};


class Home extends React.Component {
  static propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      contentSnippet: PropTypes.string,
    })).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1 className={s.title}></h1>
          <div className='sheet'>
            <SpreadsheetComponent initialData={exampleTwo.initialData} config={exampleTwo.config} cellClasses={exampleTwo.cellClasses} spreadsheetId="mainSheet" />
          </div>
          {/*<ul className={s.news}>
            {this.props.news.map((item, index) => (
              <li key={index} className={s.newsItem}>
                <a href={item.link} className={s.newsTitle}>{item.title}</a>
                <span
                  className={s.newsDesc}
                  dangerouslySetInnerHTML={{ __html: item.contentSnippet }}
                />
              </li>
            ))}
          </ul>*/}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
