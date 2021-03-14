import React, {useState} from 'react';
import Details from './Details';

const Servers = ({serverList}) => {
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
                    <p className='headerTitle ip'>Ip4</p>
                    <p className='headerTitle dns'>Dns</p>
                </div>
                <div className="scrollContainer">
                    {
                        serverList !== undefined ?
                            serverList.map(rowItem => {
                                return (
                                    <button onClick={getRowId} className='gridRow' key={rowItem.id} id={rowItem.id}>
                                        <p className="gridItem ip">{rowItem.server.ip4}</p>
                                        <p className="gridItem dns">{rowItem.server.dns}</p>
                                    </button>
                                )
                            })
                        : null
                    }
                </div>

                
            </div>

            <Details data={serverList} id={parseInt(itemId)} />
        </div>
    )
}

export default Servers;