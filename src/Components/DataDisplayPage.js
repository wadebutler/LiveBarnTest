import React, {useState, useEffect} from 'react';
import Surfaces from './Surfaces';
import Servers from './Servers';
import SearchIcon from '../Images/search.png';

const DataDisplayPage = () => {
    const [dataTab, setDataTab] = useState('Surface');
    const [isActive, setIsActive] = useState('Surface');
    const [data, setData] = useState();
    const [originalData, setOriginalData] = useState();
    const [serverList, setServerList] = useState();
    const [searchBar, setSearchBar] = useState();

    useEffect(() => {
        fetch('https://2hsjstzo71.execute-api.us-east-1.amazonaws.com/prod/livebarn-interview-project')
            .then(response => response.json())
            .then(data => {
                let uniqArr = []
                uniqArr = [...new Map(data.map(item => [item.server.id, item])).values()]
                setData(data)
                setOriginalData(data)
                setServerList(uniqArr)
            })
    }, [])

    const handleSurfaceClick = (e) => {
        e.preventDefault()
        setDataTab('Surface')
        setIsActive('Surface')
    }

    const handleServerClick = (e) => {
        e.preventDefault()
        setDataTab('Server')
        setIsActive('Server')
    }

    const handleChange = (e) => {
        let tempArr = [];
        setSearchBar(e.target.value)
        originalData.filter(item => {
            let itemName = item.venueName.toLowerCase()
            
            if (itemName.includes(e.target.value)) {
                tempArr.push(item)
                setData(tempArr)
            }

            return;
        })
    }

    return (
        <div>
            <div className='dataButtonContainer'>
                <button 
                    className={isActive === 'Surface' ? 'dataIsActive' : 'dataButton'} 
                    onClick={handleSurfaceClick}
                >
                    Surfaces
                </button>

                <button 
                    className={isActive === 'Server' ? 'dataIsActive' : 'dataButton'} 
                    onClick={handleServerClick}
                >
                    Servers
                </button>
            </div>

            <div className='dataPageContainer'>
                <div className="searchBarContainer">
                    <img className='searchIcon' src={SearchIcon} alt="search icon" />
                    <input onChange={handleChange} value={searchBar} placeholder='Search a Venue' size="100" />
                </div>

                <div>
                    {
                        dataTab === 'Surface' ?
                            <Surfaces data={data} />
                            :
                            <Servers serverList={serverList} />
                    }
                </div>
                
            </div>
        </div>
    )
}

export default DataDisplayPage;