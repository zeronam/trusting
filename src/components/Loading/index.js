import React from 'react';
import spinner from './Spinner.svg';

import './styles.css';

export const Loading = () => {
    return <img src={spinner} alt="spinner" className="spinner"/>
}