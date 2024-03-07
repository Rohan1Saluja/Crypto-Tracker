import { CircularProgress } from '@mui/material';
import React from 'react';
import './PageLoader.scss';

interface Props {
  content?: string;
  className?: string;
}

export const PageLoader: React.FC<Props> = ({ content, className = '' }) => {
  return (
    <div className={`page-loader ${className}`}>
      <CircularProgress color="secondary" />
      {content ? content : `loading...`}
    </div>
  );
};
