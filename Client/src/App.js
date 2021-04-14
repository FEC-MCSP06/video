import React from 'react'
import InitalVideo from './videos/Code-Monkey.mp4'
import VideoPlayer from './components/video-player'

class App extends React.Component{
  constructor (props){
    super(props)

    this.state = {
      videoSrc: InitalVideo,
    }
  }
  render(){
    return(
      <VideoPlayer />
    )
  }
}

export default App;
