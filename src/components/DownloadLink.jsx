import React from 'react';

const DownloadLink = ({ processedVideo }) => {
  return (
    processedVideo && (
      <div>
        <a href={processedVideo} download>
          Download Processed Video
        </a>
      </div>
    )
  );
};

export default DownloadLink;
