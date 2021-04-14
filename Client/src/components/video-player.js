const VideoPlayer = (props) =>{
    return(
        <video id='video-player' controls>
        <source src={this.props.videoSrc} type='video/mp4'></source>
      </video>
    )
}

export default VideoPlayer