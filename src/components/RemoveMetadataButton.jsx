import React from 'react';

const RemoveMetadataButton = ({ videoFile, removeMetadata }) => {
  const handleClick = () => {
    if (videoFile) {
      removeMetadata(videoFile);
    } else {
      alert('Please upload a video file first.');
    }
  };

  return <button onClick={handleClick}>Remove Metadata</button>;
};

export default RemoveMetadataButton;
