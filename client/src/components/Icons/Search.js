import React from 'react';
import PropTypes from 'prop-types';

const SearchSVG = ({
  style = {},
  width = '100%',
  viewBox = '0 0 512 512',
  fill = '',
  className = '',
  onClick = () => {}
}) => (
  <svg
    style={style}
    width={width}
    height={width}
    fill={fill}
    viewBox={viewBox}
    onClick={onClick}
    className={className}
    id="Layer_1"
    enableBackground={`new ${viewBox}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve">
    <path d="M497.913,497.913c-18.782,18.782-49.225,18.782-68.008,0l-84.862-84.863c-34.889,22.382-76.13,35.717-120.659,35.717  C100.469,448.767,0,348.312,0,224.383S100.469,0,224.384,0c123.931,0,224.384,100.452,224.384,224.383  c0,44.514-13.352,85.771-35.718,120.676l84.863,84.863C516.695,448.704,516.695,479.131,497.913,497.913z M224.384,64.109  c-88.511,0-160.274,71.747-160.274,160.273c0,88.526,71.764,160.274,160.274,160.274c88.525,0,160.273-71.748,160.273-160.274  C384.657,135.856,312.909,64.109,224.384,64.109z" />
  </svg>
);

SearchSVG.propTypes = {
  style: PropTypes.object,
  width: PropTypes.string,
  viewBox: PropTypes.string,
  className: PropTypes.string,
  fill: PropTypes.string,
  onClick: PropTypes.func
};

export default SearchSVG;
