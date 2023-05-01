import React from 'react';
import {View} from 'react-native';
import Colors from '../../../../theme/Colors';

type Props = {};

const Seperator: React.FC<Props> = ({}) => {
  return (
    <View
      style={{
        height: 1,
        backgroundColor: Colors.athenGrey,
        width: '90%',
        alignSelf: 'center',
      }}
    />
  );
};

export default Seperator;
