import React from 'react';
import {Text} from 'react-native';

const Title = ({title}) => {
  console.log(`On Render ${title}`);

  return <Text style={{fontSize: 18, color: 'red'}}>{title}</Text>;
};

export default React.memo(Title);
