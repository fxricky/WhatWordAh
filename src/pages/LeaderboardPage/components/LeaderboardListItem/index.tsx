import React from 'react';
import {Image, Text, View} from 'react-native';
import {LeaderboardInfo} from '../../../../type';

type Props = {
  data: LeaderboardInfo;
};

const LeaderboardListItem: React.FC<Props> = ({data}) => {
  const {name, score} = data;

  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 20,
      }}>
      <Image
        source={{uri: 'https://picsum.photos/200'}}
        style={{height: 44, width: 44, borderRadius: 22}}
      />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginLeft: 8,
        }}>
        <Text style={{fontSize: 16, fontWeight: '600'}}>{name}</Text>
        <Text style={{fontSize: 16, fontWeight: '400'}}>{score}</Text>
      </View>
    </View>
  );
};

export default LeaderboardListItem;
