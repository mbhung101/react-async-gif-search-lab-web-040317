import React, {Component} from 'react'

const GifList = (props) => {
    return(
      <div>
        <ul>
          {props.gifList.map(gif =>{
            {console.log (props)}
            return <li key={gif.id}><img src={gif.images.downsized_medium.url}/></li>
          })}
        </ul>
      </div>
    )
}

export default GifList
