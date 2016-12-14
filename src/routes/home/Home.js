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
    ['Name', 'Hole 1', 'Hole 2', 'Hole 3', 'Hole 4', 'Hole 5', 'Hole 6', 'Hole 7', 'Hole 8', 'Hole 9'],
    ['', '', '', '', '', '', '', '', '', '', ]
  ]
};

exampleTwo.cellClasses = {
  rows: [
    ['', '', '', '', '', '', '', ''],
    ['green', '', '', '', '', '', '', 'dollar'],
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

var Dispatcher = require('../../../node_modules/react-spreadsheet-component/lib/dispatcher.js');

Dispatcher.subscribe('dataChanged', function (data) {
  // data: The entire new data state
  var row1 = data.rows[1];
  console.log(row1);
  var sum = row1.reduce((a, b) => (Number(a)>0?Number(a):0) + (Number(b)>0?Number(b):0), 0);
  console.log(sum);
}, 'mainSheet');


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


console.log(SpreadsheetComponent);

export default withStyles(s)(Home);
