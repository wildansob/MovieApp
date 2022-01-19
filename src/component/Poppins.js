import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Poppins({
  children,
  type = 'Regular',
  size = 16,
  color = 'white',
  fontName = 'Poppins',
  align = 'left',
  style = {},
}) {
  const styles = StyleSheet.create({
    text: {
      fontFamily: `Poppins-${type}`,
      fontSize: size,
      color,
      textAlign: align,
      ...style,
    },
  });

  return <Text style={styles.text}>{children}</Text>;
}
