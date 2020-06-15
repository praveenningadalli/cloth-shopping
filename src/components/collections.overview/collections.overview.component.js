import React from 'react';
import  './collections.overview.styles.scss';
import CollectionPreview from '../../components/collection-preview-component/collection-preview.component';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

const CollectionOverview = ({ collections })=>(
            
        <div className='collections-overview'>
            {
                collections.map(({id,...otherCollectionsProp})=>(
                    <CollectionPreview key={id} {...otherCollectionsProp} />
                ))
            }
        </div>
)
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionOverview);