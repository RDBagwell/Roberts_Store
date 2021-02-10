import React from 'react';
import PreviewCollection from '../PreviewCollection/PreviewCollection';

const ShopPage = ({collections})=>{
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map( ({id, ...otherCollectionProps}) => (
                        <PreviewCollection key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;

