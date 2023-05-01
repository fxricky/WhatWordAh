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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {STORAGE_KEYS} from '../../constants';

type Props = {};

const DATA = leaderboard;

const LeaderboardPage: React.FC<Props> = ({}) => {
  const [leaderboardData, setLeaderboardData] = React.useState<
    LeaderboardInfo[]
  >([]);

  React.useEffect(() => {
    (async () => {
      const userScore = +(
        (await AsyncStorage.getItem(STORAGE_KEYS.USER_SCORE)) || ''
      );

      const index = DATA.findIndex(d => d.score <= userScore);

      const updatedLeaderboard = [...DATA];

      const currentUserData = {
        id: Date.now(),
        name: 'You',
        score: userScore,
      };

      if (index < 0) {
        updatedLeaderboard.push(currentUserData);
      } else {
        updatedLeaderboard.splice(index, 0, currentUserData);
      }

      console.log(updatedLeaderboard);

      setLeaderboardData(updatedLeaderboard);
    })();
  }, []);

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
          <Text style={styles.top3InfoNameTxt}>{leaderboardData[1]?.name}</Text>
          <Text style={styles.top3InfoScoreTxt}>
            {leaderboardData[1]?.score}
          </Text>
        </View>
        <View style={styles.top3InfoContainer}>
          <Image
            source={{uri: 'https://picsum.photos/200'}}
            style={styles.top3ProfilePic}
          />
          <Text style={styles.top3InfoNameTxt}>{leaderboardData[0]?.name}</Text>
          <Text style={styles.top3InfoScoreTxt}>
            {leaderboardData[0]?.score}
          </Text>
        </View>
        <View style={[styles.top3InfoContainer, {justifyContent: 'flex-end'}]}>
          <Image
            source={{uri: 'https://picsum.photos/200'}}
            style={styles.top3ProfilePic}
          />
          <Text style={styles.top3InfoNameTxt}>{leaderboardData[2]?.name}</Text>
          <Text style={styles.top3InfoScoreTxt}>
            {leaderboardData[2]?.score}
          </Text>
        </View>
      </View>
      <View style={{flex: 3}}>
        <FlatList
          data={leaderboardData.slice(3)}
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
