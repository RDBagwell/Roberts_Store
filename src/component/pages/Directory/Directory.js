import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../Menu-Item/MenuItem';

import { selectDirectorySections } from '../../../redux/directory/directory.selectors';
import './directory.scss';

const Directory = ({ sections })=> {
  return(
      <div className="directory-menu">
          {
              sections.map( ({id, ...otherSectinProps})=> (
                  <MenuItem key={id} {...otherSectinProps} />
              ) )
          }
      </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);