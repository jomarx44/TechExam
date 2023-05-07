import React from 'react';
import {ScrollView} from 'react-native';

export default function AppScrollView({children, innerRef, ...rest}) {
  return (
    <ScrollView ref={innerRef} bounces={false} {...rest}>
      {children}
    </ScrollView>
  );
}
