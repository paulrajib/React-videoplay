import React from 'react';
import SearchBar from './SearchBar';
//import youtube from '../apis/youtube';
import youtube, { baseParams } from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
	state = { videos: [], selectedVideo: null };
	onTermSubmit = async (term) => {
		// console.log(term);
		const response = await youtube.get('/search',{
			params: {
				...baseParams,
				q: term
			}
		});
		this.setState({ videos: response.data.items })
	};

	onVideoSelect = (video) => {
		// console.log('From the App Compopnent', video);
		this.setState({ selectedVideo: video });
	};
	render(){
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={ this.onTermSubmit } />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList onVideoSelect={ this.onVideoSelect } VideoItems = { this.state.videos } />
			</div>
		);
	}
}

export default App;