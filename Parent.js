import React, {memo, useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Child} from './Child';

const Parent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: 'SAVE_HOME_PAGE_X_DATA',
        payload: {
          x: {
            1: 'new home page data',
          }
        },
      });
    }, 2000)
  }, []);
  return (
    <View style={{backgroundColor: 'red', flex: 1}}>{/* <Child /> */}</View>
  );
};

export default memo(Parent);
