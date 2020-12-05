import React from 'react';
import CollectionItem from '../CollectionItems/CollectionItems'
import './previewcollection.scss';

const PreviewCollection = ({title, items})=>{
 return(
     <div className='collection-preview'>
         <h1 className="title">{title.toUpperCase()}</h1>
         <div className='preview'>
            {
                items
                .filter((item, index) => index < 4)
                .map(({id, ...otherItemProos})=>(
                    <CollectionItem key={id} {...otherItemProos} />
                ))
            }
         </div>
     </div>
 )
}

export default PreviewCollection;