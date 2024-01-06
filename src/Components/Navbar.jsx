import React, { useEffect, useState } from 'react'
import { Link, json } from 'react-router-dom'
import News from './News'
import axios from 'axios'

const Navbar = ({cate}) => {
    const[set,setNews]=useState([])
    
    const category= async()=>{
      await axios.get(cate ? `https://newsapi.org/v2/top-headlines?country=in&category=${cate}&apiKey=ccb74c699d5c40f888e375e5382e2ec4`
      : "https://newsapi.org/v2/top-headlines?country=in&apiKey=ccb74c699d5c40f888e375e5382e2ec4"
      )
      .then((res)=> setNews(res.data.articles))
      
    }
    useEffect(() => {
      category()
    }, [cate])
    
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand mx-5 fs-3 fw-bolder text-white" to="/">MY-News</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active fs-5 fw-bolder text-white me-3" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-5 fw-bolder text-white me-3" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-5 fw-bolder text-white me-3" to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-5 fw-bolder text-white me-3" to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-5 fw-bolder text-white me-3" to="/music">Music</Link>
        </li>
       
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div className="container my-5 py-5">
<div class="row row-cols-1 row-cols-md-4 g-4">

    {
        set.map((e)=>{
            return<News e={e}/>
        })
    }
    </div>
</div>

    </>
  )
}

export default Navbar