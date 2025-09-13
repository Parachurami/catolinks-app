import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';


const CustomText = ({ children, style, className, ...restProps }:{style?:StyleProp<TextStyle>, children: React.ReactNode, className?:string}) => {
  return (
    <Text style={[styles.text, style]} className={className} {...restProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Inter',
  },
});

export default CustomText;
