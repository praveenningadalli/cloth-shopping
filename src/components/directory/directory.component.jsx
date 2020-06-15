import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { SelectDirectorySections } from '../../redux/directory/directory.selector';

const Directory =({sections}) =>(
            <div className='directory-menu'>
                {sections.map(({id, ...othersectionprops}) => (
                      <MenuItem key={id} {...othersectionprops}/>
                ))}
            </div>
        );

const mapStateToProps= createStructuredSelector({
    sections: SelectDirectorySections,
})
export default connect(mapStateToProps)(Directory);