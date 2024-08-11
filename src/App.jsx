import React, { useState } from 'react';
import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile } from '@ffmpeg/util';
import coreURL from '@ffmpeg/core?url';
import wasmURL from '@ffmpeg/core/wasm?url'
import VideoUploader from './components/VideoUploader';
import DownloadLink from './components/DownloadLink';
import './App.css';

const App = () => {
  const [processedVideo, setProcessedVideo] = useState(null);
  const ffmpeg = new FFmpeg();


  const removeMetadata = async ({imageFile, soundFile, videoFile: video}) => {
    console.log("🚀 ~ removeMetadata ~ ffmpeg:", ffmpeg)

    await ffmpeg.load({coreURL, wasmURL});

    
    await ffmpeg.writeFile("video.mp4", await fetchFile(video));
    
    await ffmpeg.exec(['-i', 'sound.mp3', '-i', 'image.png', 'video.mp4']);
    
    const data = await ffmpeg.readFile('video.mp4');
    console.log("🚀 ~ removeMetadata ~ data:", data)
    
    setProcessedVideo(URL.createObjectURL(new Blob([data.buffer], { type: "video/mp4" })))


  };
  

  return (
    <div className="App">
      <h1>Remove Video Metadata</h1>
      <VideoUploader removeMetadata={removeMetadata} />
      <DownloadLink processedVideo={processedVideo} />
    </div>
  );
};

export default App;
