import React, { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { loadCards } from '../../store/actionCreators';
import { State } from '../../store/types';
import Spinner from './Spinner';

const LoadMoreButton = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: State) => state.isLoading, shallowEqual);

  const loadMoreButtonClick = useCallback(() => {
    dispatch(loadCards());
  }, [dispatch]);

  return (
    <button className="app__gallery-button" onClick={loadMoreButtonClick} disabled={isLoading}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          See more
          <svg width="7" height="17" viewBox="0 0 7 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5.043 8.41667L1 15.8333" stroke="#363636" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </>
      )}
    </button>
  );
};

export default LoadMoreButton;
