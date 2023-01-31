import React from 'react'

export default function NewsItem(props) {
  return (
    <>
      <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <div class="card">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">{props.title}</h5>
                            <p class="card-text">{props.description}</p>
                            <a href="/" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div class="card">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">{props.title}</h5>
                            <p class="card-text">{props.description}</p>
                            <a href="/" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div class="card">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">{props.title}</h5>
                            <p class="card-text">{props.description}</p>
                            <a href="/" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
