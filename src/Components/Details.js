import React, {useEffect, useState} from 'react';

const Details = ({id, data}) => {
    const [rowDetails, setRowDetails] = useState()

    useEffect(() => {
        if (data !== undefined) {
            data.map(rowItem => {
                if (id === rowItem.id) {
                    setRowDetails(rowItem)
                }
            })
        }
    })

    return (
        <div className='detailsContainer'>
            <p className='detailsHeader'>Details</p>
            <div className='detailsTextBoxContainer'>
                {
                    rowDetails !== undefined ?
                    <div>
                        <div className='detailItem'>
                            <p className='detailsText space'>Venue Name:</p>
                            <p className='detailsText'>{rowDetails.venueName}</p>
                        </div>
                        <div className='detailItem'>
                            <p className='detailsText space'>Surface Name:</p>
                            <p className='detailsText'>{rowDetails.surfaceName}</p>
                        </div>
                        <div className='detailItem'>
                            <p className='detailsText space'>Status:</p>
                            <p className='detailsText'>{rowDetails.status}</p>
                        </div>
                        <div className='detailItem'>
                            <p className='detailsText space'>Sport:</p>
                            <p className='detailsText'>{rowDetails.sport}</p>
                        </div>
                    </div>
                    : null
                }
            </div>
        </div>
    )
}

export default Details