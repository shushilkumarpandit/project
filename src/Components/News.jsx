import React from 'react'

const News = ({e}) => {
  return (
    <>
  <div class="col">
    <div class="card" style={{minHeight:"50vh"}}>
      <img src={e.urlToImage
} class="card-img-top" alt="Image not Found"/>
      <div class="card-body">
        <h5 class="card-title">{e.publishedAt}</h5>
        <h5 class="card-title">{e.title}</h5>
        <p class="card-text">{e.description}</p>
        <a href={e.url}><button className='btn bg-dark text-light' style={{marginTop:"1vh"}}>View More</button></a>
      </div>
    </div>
  </div>
 
    
    
    </>
  )
}

export default News