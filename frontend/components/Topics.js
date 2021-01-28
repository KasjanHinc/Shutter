import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'





const Topics = () => {

  const delays = [200, 400, 600, 800]
  const topics = ['travel', 'food', 'automotive', 'aerial', 'nature', 'animals', 'sports', 'music', 'education', 'emotions', 'people', 'science', 'architecture', 'backgrounds', 'fasion']
  const images = [
    'https://i.imgur.com/suk3TJt.jpg',
    'https://i.imgur.com/kiPvLVX.jpg',
    'https://i.imgur.com/Y4KjXed.jpg',
    'https://i.imgur.com/lyXbY82.jpg',
    'https://i.imgur.com/p74OQjG.jpg',
    'https://i.imgur.com/63C7Nz0.jpg',
    'https://i.imgur.com/M31H3C2.jpg',
    'https://i.imgur.com/hnz8muZ.jpg',
    'https://i.imgur.com/r9weVxz.jpg',
    'https://i.imgur.com/83KKLJq.jpg',
    'https://i.imgur.com/htUmcAo.jpg',
    'https://i.imgur.com/ZEYHp6h.jpg',
    'https://i.imgur.com/zbJMh9l.jpg',
    'https://i.imgur.com/cYuuPRI.jpg',
    'https://i.imgur.com/2QURO95.jpg'
  ]


  


  return <div className="topics">

    <div className="topics-wrapper">


      {topics.map((topic, index) => {
        return <Link key={index} className="topic-wrapper" to={`/topic/${topic}`}>


          <Fade delay={delays[Math.round(Math.random() * 3)]}>
            <img className="topic-image" src={images[index]} />
          </Fade>

          <div className="topic-info">
            <p>{topic}</p>
          </div>


        </Link>





      })}





    </div>






  </div >

}

export default Topics