import React from "react";
import SearchBar from "./components/SearchBar";
import VideoDetails from "./components/VideoDetails";
import VideoList from "./components/VideoList";
import youtube from "./components/youtube";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount(){
      this.onTermSubmit('car music')
  }

  onTermSubmit = async (term) => {
    // api ile melumat almaq asinkron bir islem oldugu ucun asyn await den istifade edirik
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    // videolar geldikden sora onlari state-e yigiriq
    this.setState({ 
        videos: response.data.items,
        // default video gostermek ucundur
        selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
