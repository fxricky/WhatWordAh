import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import PageContainer from '../../components/PageContainer';
import {CATEGORIES} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import {PAGE_NAME} from '../pageName';
import Colors from '../../theme/Colors';
import {icLeaderboard} from '../../assets';

type Props = {};

const HomePage: React.FC<Props> = ({}) => {
  const Navigation = useNavigation();

  const navigateToGamePage = (categoryName: string) => () => {
    Navigation.navigate(PAGE_NAME.GAME_PAGE, {
      categoryName,
    });
  };

  const navigateToLeaderboardPage = () => {
    Navigation.navigate(PAGE_NAME.LEADERBOARD_PAGE);
  };

  return (
    <PageContainer>
      <Pressable
        style={styles.leaderboardBtn}
        onPress={navigateToLeaderboardPage}>
        <Image source={icLeaderboard} style={styles.leaderboardBtnImg} />
      </Pressable>
      <View style={styles.container}>
        <Text style={styles.appNameTxt}>WHAT WORD AH</Text>
        <View style={styles.catContainer}>
          <Text style={styles.catHintTxt}>Select a category</Text>
          {Object.keys(CATEGORIES).map(c => {
            return (
              <Pressable
                onPress={navigateToGamePage(c)}
                style={styles.categoryBtn}>
                <Text style={styles.categoryTxt}>{c}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  appNameTxt: {
    fontSize: 44,
    fontWeight: 'bold',
    paddingVertical: 36,
    marginBottom: 36,
    textAlign: 'center',
  },
  catContainer: {
    paddingHorizontal: 16,
    width: '100%',
  },
  catHintTxt: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 12,
  },
  categoryBtn: {
    width: '100%',
    padding: 16,
    marginBottom: 16,
    backgroundColor: Colors.troutGrey,
    borderRadius: 8,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  categoryTxt: {
    fontSize: 24,
    textAlign: 'center',
    textTransform: 'capitalize',
    color: Colors.shadyWhite,
    fontWeight: '600',
  },
  leaderboardBtn: {
    alignSelf: 'flex-end',
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leaderboardBtnImg: {
    height: 28,
    width: 28,
    tintColor: Colors.paleGrey,
  },
});

export default HomePage;
