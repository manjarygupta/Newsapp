import React from 'react'
import NewsItem from './NewsItem'

export default function News() {
  return (
    <div>
      This is News Component
      <NewsItem title="myTitle" description="myDescription"/>
      <NewsItem title="myTitle" description="myDescription"/>
      <NewsItem title="myTitle" description="myDescription"/>
      <NewsItem title="myTitle" description="myDescription"/>
    </div>
  )
}
