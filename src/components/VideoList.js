import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ VideoItems, onVideoSelect }) => {
	const renderedList = VideoItems.map( video => {
		return (
				<VideoItem 
					key={video.id.videoId} 
					onVideoSelect={onVideoSelect} 
					video = {video} 
				/>
			);
	});


	return <div className="ui relaxed divided list">{ renderedList }</div>;	
};

export default VideoList;