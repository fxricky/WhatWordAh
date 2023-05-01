import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {LeaderboardInfo} from '../../../../type';

type Props = {
  data: LeaderboardInfo;
};

const LeaderboardListItem: React.FC<Props> = ({data}) => {
  const {name, score} = data;

  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://picsum.photos/200'}}
        style={styles.thumbnailImg}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.nameTxt}>{name}</Text>
        <Text style={styles.scoreTxt}>{score}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
  },
  thumbnailImg: {
    height: 44,
    width: 44,
    borderRadius: 22,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 8,
  },
  nameTxt: {
    fontSize: 16,
    fontWeight: '600',
  },
  scoreTxt: {
    fontSize: 16,
    fontWeight: '400',
  },
});

export default LeaderboardListItem;
