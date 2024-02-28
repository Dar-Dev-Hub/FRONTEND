import React from 'react';
import YouTube from 'react-youtube';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface YouTubePlayerProps {
  videoId: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = () => {
  const videoIds = ['HBjPq4vam9k', 'dAJNMVbAMlQ', 'AaDNa7jkUVw','eu0jERfrbvA'];

  return (
    <div className="App">
    
      <Carousel
        className="crsl"
        autoPlay
        infiniteLoop
        centerMode
        interval={10000}

      >
        {videoIds.map((videoId) => (
          <div key={videoId} className="m-0">
            <YouTube videoId={videoId} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default YouTubePlayer;