/* eslint-disable no-trailing-spaces */
import React, { useRef } from 'react';
import { Animated, Easing } from 'react-native';

export const useAnimation = () => {

      const animatedOpacity = useRef(new Animated.Value(0)).current;
      const animatedTop = useRef(new Animated.Value(0)).current;
    
      const fadeIn = ({duration = 300, toValue = 1, callback = ()=>{}}) => {
        /*Animated.timing(animatedTop, {
          toValue: 0, //del valor actual a 1
          duration: 700,
          useNativeDriver: true,
          easing:Easing.bounce, //Easing.elastic(1),
        }).start();*/
    
        Animated.timing(animatedOpacity, {
          toValue: toValue, //del valor actual a 1
          duration: duration,
          useNativeDriver: true,
        }).start(callback);
      };
      const fadeOut = ({duration = 300, toValue = 0, callback = ()=>{}}) => {
        Animated.timing(animatedOpacity, {
          toValue: toValue,
          duration: duration,
          useNativeDriver: true,
        }).start(callback);
    //()=> animatedTop.resetAnimation()
      };
      const startMovingTopPosition = ({
        initialPosition = 0,
        toValue = 0,
        duration = 300,
        easing = Easing.linear,
        callback = ()=>{},
      })=> {
        animatedTop.setValue(initialPosition);
        Animated.timing(animatedTop,{
            toValue:toValue,
            duration:duration,
            useNativeDriver:true,
            easing:easing,
        }).start(callback);

      };
      
    
  return {
    //properties
    animatedOpacity,
    animatedTop,

    //Methods
    fadeIn,
    fadeOut,
    startMovingTopPosition,

  };
};
