import React from 'react';
import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PageContainer from '../../components/PageContainer';
import PageHeader from '../../components/PageHeader';
import leaderboard from '../../../jsonData/leaderboard';
import Colors from '../../theme/Colors';
import {LeaderboardInfo} from '../../type';
import LeaderboardListItem from './components/LeaderboardListItem';
import Seperator from './components/Seperator';

type Props = {};

const DATA = leaderboard;

const LeaderboardPage: React.FC<Props> = ({}) => {
  const renderLeaderboardList: ListRenderItem<LeaderboardInfo> = ({item}) => {
    return <LeaderboardListItem data={item} />;
  };

  return (
    <PageContainer>
      <PageHeader title={'Leaderboard'} />
      <View style={styles.top3Container}>
        <View style={[styles.top3InfoContainer, {justifyContent: 'center'}]}>
          <Image
            source={{uri: 'https://picsum.photos/200'}}
            style={styles.top3ProfilePic}
          />
          <Text style={styles.top3InfoNameTxt}>{DATA[1].name}</Text>
          <Text style={styles.top3InfoScoreTxt}>{DATA[1].score}</Text>
        </View>
        <View style={styles.top3InfoContainer}>
          <Image
            source={{uri: 'https://picsum.photos/200'}}
            style={styles.top3ProfilePic}
          />
          <Text style={styles.top3InfoNameTxt}>{DATA[0].name}</Text>
          <Text style={styles.top3InfoScoreTxt}>{DATA[0].score}</Text>
        </View>
        <View style={[styles.top3InfoContainer, {justifyContent: 'flex-end'}]}>
          <Image
            source={{uri: 'https://picsum.photos/200'}}
            style={styles.top3ProfilePic}
          />
          <Text style={styles.top3InfoNameTxt}>{DATA[2].name}</Text>
          <Text style={styles.top3InfoScoreTxt}>{DATA[2].score}</Text>
        </View>
      </View>
      <View style={{flex: 3}}>
        <FlatList
          data={DATA.slice(3)}
          renderItem={renderLeaderboardList}
          contentContainerStyle={styles.listContainer}
          ItemSeparatorComponent={() => <Seperator />}
        />
      </View>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  top3Container: {
    flexDirection: 'row',
    flex: 1,
    paddingVertical: 44,
    marginHorizontal: 12,
    backgroundColor: Colors.athenGrey,
    borderRadius: 12,
  },
  top3ProfilePic: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: Colors.spaceGrey,
    padding: 2,
  },
  top3InfoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  top3InfoNameTxt: {
    paddingVertical: 8,
    fontSize: 18,
    fontWeight: '700',
  },
  top3InfoScoreTxt: {
    fontSize: 14,
    fontWeight: '500',
  },
  listContainer: {
    paddingHorizontal: 12,
    paddingTop: 12,
  },
});

export default LeaderboardPage;
