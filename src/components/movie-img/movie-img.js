import './movie-img.css';
import { getPosterLink } from '../../services/movie-api';
import { Empty, Image, Spin } from 'antd';
import PropTypes from 'prop-types';

function Loading() {
  return (
    <div className="loading">
      <Spin />
    </div>
  );
}

export default function MovieImg({ posterPath }) {
  if (posterPath !== null) {
    return <Image width={187} src={getPosterLink(posterPath)} placeholder={<Loading />} />;
  }
  return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={false} placeholder={<Loading />} />;
}

MovieImg.propTypes = {
  posterPath: PropTypes.string,
};
