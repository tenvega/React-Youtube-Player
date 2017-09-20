import React from 'react';

const VideoListItem = ({video}) => {
const imageURl = video.snippet.thumbnails.default.url;

  return (

          <li className = "list-group-item">
            <div className = "video-list media">
              <div className = "video-list media-left">
               <img className = "media-object" src ={imageURl}/>
            </div>
              <div className = "media-body">
               <div className = 'media-heading'>{video.snippet.title}</div>
            </div>
            </div>
          </li>

  );
};

export default VideoListItem;
