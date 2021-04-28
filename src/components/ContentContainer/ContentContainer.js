import PropTypes from 'prop-types';

import './ContentContainer.scss';

const ContentContainer = ({ children }) => {
	return <div className='content-container'>{children}</div>;
};

export default ContentContainer;

ContentContainer.propTypes = {
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
