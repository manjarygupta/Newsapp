import React, { useState, useEffect } from 'react'
import Newsitem from './NewsItem'

export default function News() {

  const [articles, setArticles] = useState([])

  const fetchData = async () => {
    const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0a6af9c13d4b45eda35fda1ef8aff531")
    // console.log(response)
    const data = await response.json()
    // console.log(data)
    setArticles(data.articles)
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    // <>
    // {articles.map((element)=>{
    //   console.log(element)
    // })}
    // </>
    <div className='container my-4'>
      <h1>Top News Headlines</h1>
      <div className='row my-3'>
        {
          articles.map(element => {
            return <div className='col-md-4'>
              <Newsitem key={element.url} title={element.title} description={element.description} urlToImage={element.urlToImage} url={element.url}/>
             
            </div>
          })
        }
      </div>
      <div className='container d-flex justify-content-between'>
        <button className='btn-primary'>Prev</button>
        <button className='btn-primary'>Next</button>
      </div>
    </div>
  )
}