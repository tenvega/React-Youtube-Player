import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_details'
const API_KEY ='AIzaSyDixVl-5F_3glbasaMVTjCYWhZtPkOIHiA';


class App extends Component {
  constructor(props){
    super(props);

    this.state ={ videos: [], selectedVideo: null };

    YTSearch({key: API_KEY, term: 'ableton'}, (videos) =>{
    this.setState({ videos: videos,
      selectedVideo: videos[0]
     });
    // console.log(videos);
    // this.setState({videos: videos});
    });
  }
  render() {
  return(
       <div>
         <SearchBar/>
         <VideoDetail video ={this.state.selectedVideo}/>
         <VideoList
         onVideoSelect ={selectedVideo => this.setState({selectedVideo})}
         videos ={this.state.videos}/>
       </div>
 );
}
}

ReactDom.render(<App/>,document.querySelector('.container'));
