import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
const API_KEY ='AIzaSyDixVl-5F_3glbasaMVTjCYWhZtPkOIHiA';


class App extends Component {
  constructor(props){
    super(props);

    this.state ={ videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) =>{
    this.setState({ videos });
    // console.log(videos);
    // this.setState({videos: videos});
    });
  }
  render() {
  return(
       <div>
         <SearchBar/>
         <VideoList videos ={this.state.videos}/>
       </div>
 );
}
}

ReactDom.render(<App/>,document.querySelector('.container'));
