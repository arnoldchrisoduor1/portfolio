import React, { useEffect, useRef } from 'react';

const YouTubeVideo = ({ videoId, thumbnailUrl }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Create the YouTube player
    let player;
    function onYouTubeIframeAPIReady() {
      player = new window.YT.Player(containerRef.current, {
        height: '290',
        width: '540',
        videoId,
        playerVars: {
          autoplay: 0,
          controls: 1,
          rel: 0,
          showinfo: 0,
          mute: 0,
          origin: 'http://localhost:5173', // Set the origin to match the page URL
        },
      });

      // Set the custom thumbnail
      player.getIframe().style.backgroundImage = `url(${thumbnailUrl})`;
      player.getIframe().style.backgroundSize = 'cover';
    }

    // Load the YouTube API
    if (window.YT && window.YT.Player) {
      onYouTubeIframeAPIReady();
    } else {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    }

    // Clean up the player when the component unmounts
    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, [videoId, thumbnailUrl]);

  return <div ref={containerRef} />;
};

export default YouTubeVideo;