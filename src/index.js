import React, {Component} from 'react';
import _ from 'lodash';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_details'
const API_KEY ='AIzaSyDixVl-5F_3glbasaMVTjCYWhZtPkOIHiA';


class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('ableton');

  }

videoSearch(term){
  YTSearch({key: API_KEY, term: term}, (videos) =>{
  this.setState({ videos: videos,
    selectedVideo: videos[0]
   });
  });

}


  render(){

    const videoSearch = _.debounce((term) =>{this.videoSearch(term)}, 300);
  return(
       <div>
         <SearchBar onSearchTermChange={videoSearch}/>
         <VideoDetail video ={this.state.selectedVideo}/>
         <VideoList
         onVideoSelect ={selectedVideo => this.setState({selectedVideo})}
         videos ={this.state.videos}/>
       </div>
 );
}
}

ReactDom.render(<App/>,document.querySelector('.container'));
