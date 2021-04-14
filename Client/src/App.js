import React from 'react'
import VideoPlayer from './components/video-player'

const initalVideo = 'Code-Monkey'

class App extends React.Component{
  constructor (props){
    super(props)

    this.state = {
      videoToImport: initalVideo,
      videoKey:1,
    }
    this.changeVideoSrc = this.changeVideoSrc.bind(this)
  }
  changeVideoSrc(){
    this.setState({videoToImport: 'Everyday-Rockstars'})
    this.setState({videoKey: 2})
  }
  render(){
    let videoSrc = require(`./videos/${this.state.videoToImport}.mp4`).default
    console.log(videoSrc)
    return(
      <div>
        <VideoPlayer key={this.state.videoKey}
          videoSrc={videoSrc}
        />
        <button onClick={this.changeVideoSrc}>CLICK ME</button>
      </div>
    )
  }
}

export default App;
