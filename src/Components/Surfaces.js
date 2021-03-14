import React, { useState } from 'react';
import Details from './Details';

const Surfaces = ({ data }) => {
    const [itemId, setItemId] = useState(null)

    const getRowId = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const id = e.target.parentNode.getAttribute('id');
        setItemId(id)
    }

    return (
        <div className='gridContainer'>
            <div className='grid'>
                <div className='headerTitleContainer'>
                    <p className='headerTitle venue'>Venue Name</p>
                    <p className='headerTitle surface'>Surface Name</p>
                    <p className='headerTitle status'>Status</p>
                    <p className='headerTitle sport'>Sport</p>
                </div>
                <div className="scrollContainer">
                    {
                        data !== undefined ?
                        data.map(rowItem => {
                            return (
                                <button onClick={getRowId} className='gridRow' key={rowItem.id} id={rowItem.id}>
                                    <p className="gridItem venue">{rowItem.venueName}</p>
                                    <p className="gridItem surface">{rowItem.surfaceName}</p>
                                    <p className="gridItem status">{rowItem.status}</p>
                                    <p className="gridItem sport">{rowItem.sport}</p>
                                </button>
                            )
                        })
                        : null
                    }
                </div>
            </div>
            
            <Details data={data} id={parseInt(itemId)} />
        </div>
    )
}

export default Surfaces;