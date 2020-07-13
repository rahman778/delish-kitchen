import React from 'react';

import loader from '../../../assets/load.gif';

const style = {
    textAlign:'center',
    fontStyle:'italic',
    margin:'auto'
}

const Loader = () => {
    return (
    <div style={style}><img src={loader} alt="loading..." />
        <p>Loading</p>
    </div>
    )
}

export default Loader
