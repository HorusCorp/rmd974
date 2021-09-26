
import React, {useState,useEffect} from 'react'

function BannerCarousel() {

const [BannerCarousel,setBannerCarousel] = useState(1)

useEffect(() => {
  const interval = setInterval(() => {
    if(BannerCarousel < 3){
    setBannerCarousel(BannerCarousel+1)
    }else if(BannerCarousel===3){
      setBannerCarousel(1)
    }
  }, 4000);
  return () => clearInterval(interval);
}, [BannerCarousel]);

return(
    <div className='caroussels_content'>
        {BannerCarousel === 1?
        <div className='caroussels__contentFullScreen'>
            <div className='caroussels__content__imgContainer'>
                <img className='caroussels__content__imgLFullScreen' 
                src='../img1.png' alt=''/>
            </div>
            <div className='caroussels__content__indicator'>
            <div 
                className={BannerCarousel===1?'caroussels__content_indicator1 activeC':'caroussels__content_indicator1'} 
                onClick={()=>setBannerCarousel(1)}>
            </div>
            <div className='caroussels__content_indicator2' onClick={()=>setBannerCarousel(2)}></div>
            <div className='caroussels__content_indicator3' onClick={()=>setBannerCarousel(3)}></div>
            </div>
        </div>:''}
        {BannerCarousel === 2?
        <div className='caroussels__contentFullScreen'>
            <div className='caroussels__content__imgContainer'>
                <img className='caroussels__content__imgLFullScreen' 
                src='../img2.png' alt=''/>
            </div>
            <div className='caroussels__content__indicator'>
            <div className='caroussels__content_indicator1' onClick={()=>setBannerCarousel(1)}></div>
            <div 
                className={BannerCarousel===2?'caroussels__content_indicator2 activeC':'caroussels__content_indicator2'} 
                onClick={()=>setBannerCarousel(2)}>
            </div>
            <div className='caroussels__content_indicator3' onClick={()=>setBannerCarousel(3)}></div>
            </div>
        </div>:''}
        {BannerCarousel === 3?
        <div className='caroussels__contentFullScreen'>
            <div className='caroussels__content__imgContainer'>
                <img className='caroussels__content__imgLFullScreen' 
                src='../img3.png' alt=''/>
            </div>
            <div className='caroussels__content__indicator'>
            <div className='caroussels__content_indicator1' onClick={()=>setBannerCarousel(1)}></div>
            <div className='caroussels__content_indicator2' onClick={()=>setBannerCarousel(2)}></div>
            <div 
                className={BannerCarousel===3?'caroussels__content_indicator3 activeC':'caroussels__content_indicator3'} 
                onClick={()=>setBannerCarousel(3)}>
            </div>
            </div>
        </div>:''}
    </div>
    )
}

export default BannerCarousel;

