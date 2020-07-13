import React from 'react'
import VideoCard from '../components/VideoCard/VideoCard'

const Videos = () => {

    const videoList = [
        { id: 1, src: 'https://youtu.be/GykO2tgmWkE', desc: 'No Cream Cheesy Pasta', img: 'poster1' },
        { id: 2, src: 'https://youtu.be/aaanXjAiaaU', desc: 'Chilli Ambulthiyal', img: 'poster3' },
        { id: 3, src: 'https://youtu.be/RNopubsXSgA', desc: 'Easy Caramel Dessert', img: 'poster6' },
        { id: 4, src: 'https://youtu.be/NZZHrKJIpSI', desc: 'Tiramisu Srilankan Style', img: 'poster5' },
        { id: 5, src: 'https://youtu.be/c7BQyG_KyKE', desc: 'Spicy Beef Curry', img: 'poster4' },
        { id: 6, src: 'https://youtu.be/rWv_Py3yCLQ', desc: 'Soya Rice-Veg Dish', img: 'poster2' },
    ]
    
    return (
        <div className="container">
            <div className="row">
                {videoList.map(video => {
                    return (
                        <div className="col-md-6 col-xl-4 mt-4" key={video.id}>
                            <VideoCard 
                            img={video.img}
                            description={video.desc}
                            url={video.src}/>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Videos
