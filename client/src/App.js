import React from 'react'
import VideoPlayer from './components/video-player'
import axios from 'axios'
const initalVideo = 'Code-Monkey'

class App extends React.Component{
  constructor (props){
    super(props)

    this.state = {
      videoName: initalVideo,
      videoKey:1,
      style: null,
    }
    this.changeVideoSrc = this.changeVideoSrc.bind(this)
  }
  changeVideoSrc(videoKey){
    console.log(videoKey)
    let videoName = null
    axios.get(`http://localhost:3201/db/${videoKey}`)
    .then(res =>{
      videoName = res.data.name
      this.setState({videoName: videoName})
      this.setState({videoKey: videoKey})
    })
  }

  componentDidMount(){
  this.setState({style:{
      position: 'absolute',
      top: '9vh',
      left: '17vh',
      width: '134.5vh',
      height: '75.5vh',
  }})
  }
  render(){
    let changeVideoKey = new CustomEvent('changeVideoKey',{
      detail:{
        videoKey: 2 
      }
    })

    return(
      <div>
        <VideoPlayer
          key={this.state.videoKey}
          style={this.state.style}
          videoName={this.state.videoName}
          changeVideoSrc={this.changeVideoSrc}
        />
        </div>
    )
  }
}

export default App;
