import React from 'react';

const VideoUploader = ({ removeMetadata }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    removeMetadata({videoFile: file}); // Chama a função removeMetadata com o novo arquivo de vídeo
  };

  return (
    <div>
      <input type="file" accept="video/*" onChange={handleFileChange} />
    </div>
  );
};

export default VideoUploader;
