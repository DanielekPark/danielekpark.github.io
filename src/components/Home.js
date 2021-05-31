import React from 'react'
import { recentData } from './data/Data'

const Home = () => {
  const [recent, setRecent] = React.useState(recentData);

  return (
    <div>
      <h1 className='header'>Daniel Park</h1>
      <p className='intro'>
        Hello, I am a front end developer living in sunny Los Angeles,
        California. If you have any questions or are interested in what I've done, please refer to the bottom of this site and or click on the about tab. Please don't hesitate to contact me, I am a nice person or at least that's what my friends and my mom say. I'll try to respond as soon as I can.
      </p>
      <div>
        <h2 className='header'>Recent Activity</h2>
        {recent.map((card) => {
          const { id, desc, img } = card;
          return (
            <React.Fragment key={id}>
              <div className='card clearfix'>
                <img src={img} alt='img' className='card-img clearfix' />
                <p className='desc'>{desc}</p>
              </div>
              <br />
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default Home;
