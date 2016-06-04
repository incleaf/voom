import React from 'react';

const YoutubeThumbnail = (props) => {
  const getThumbnailImg = (id) => `http://img.youtube.com/vi/${id}/mqdefault.jpg`;
  return (
    <div className={props._className}>
      <img src={getThumbnailImg(props.id)} />
    </div>
  )
};

YoutubeThumbnail.propTypes = {};
YoutubeThumbnail.defaultProps = {};

export default YoutubeThumbnail;
