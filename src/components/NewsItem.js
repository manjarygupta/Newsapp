import React from 'react'

export default function NewsItem(props) {
  return (
    <>
      
                    <div class="card">
                        <img src={props.urlToImage} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">{props.title}</h5>
                            <p class="card-text">{props.description}</p>
                            <a href={props.url} class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
        
    </>
  )
}
