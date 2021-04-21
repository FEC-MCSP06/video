import React from 'react'


const VideoPlayer = (props) =>{
  React.useEffect(()=>{
    window.addEventListener('changeVideoKey',(e)=>{
      props.changeVideoSrc(e.detail.videoKey)
  })})
    return(
        <video id='video-player' style={props.style} controls>
        <source src={`http://localhost:3201/video/${props.videoName}`} type='video/mp4'></source>
      </video>
    )
}

export default VideoPlayer