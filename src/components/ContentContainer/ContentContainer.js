import React from 'react';

import './ContentContainer.scss';

const ContentContainer = ({ children }) => {
	return <div className='content-container'>{children}</div>;
};

export default ContentContainer;
