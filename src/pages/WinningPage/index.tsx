import React from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import Colors from '../../theme/Colors';
import {
  RouteProp,
  StackActions,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import PageContainer from '../../components/PageContainer';
import {PAGE_NAME} from '../pageName';
import {getDifficulties} from '../../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {STORAGE_KEYS} from '../../constants';

type Props = {};

type PropsData = RouteProp<
  {
    WINNING_PAGE: {word: string; categoryName: string};
  },
  'WINNING_PAGE'
>;

const WinningPage: React.FC<Props> = ({}) => {
  const {params} = useRoute<PropsData>();
  const Navigation = useNavigation();
  const [score, setScore] = React.useState('');

  React.useEffect(() => {
    if (params.word) {
      const config = getDifficulties(params.word.length);
      setScore(config.score + '');

      saveScoreToStorage(config.score);
    }
  }, [params.word]);

  const saveScoreToStorage = async (score: number) => {
    const latestScore =
      +((await AsyncStorage.getItem(STORAGE_KEYS.USER_SCORE)) || '') + score;

    await AsyncStorage.setItem(STORAGE_KEYS.USER_SCORE, latestScore + '');
  };

  const navigateToNewGame = () => {
    Navigation.dispatch(
      StackActions.replace(PAGE_NAME.GAME_PAGE, {
        categoryName: params?.categoryName,
      }),
    );
  };

  return (
    <PageContainer style={[styles.container]}>
      <View style={styles.contentContainer}>
        <Text style={styles.guessWordTxt}>{params?.word}</Text>
        <Text style={styles.contentTxt}>You got this right!</Text>
      </View>
      <Text style={styles.scoreTxt}>{score} points</Text>
      <View style={{flex: 1, justifyContent: 'center', width: '100%'}}>
        <Pressable style={styles.shareBtn}>
          <Text style={styles.shareTxt}>Share</Text>
        </Pressable>
        <Pressable style={styles.nextBtn} onPress={navigateToNewGame}>
          <Text style={styles.nextTxt}>Guess the next word</Text>
        </Pressable>
      </View>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(33, 37, 41, 0.3)',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  guessWordTxt: {
    fontSize: 44,
    marginBottom: 44,
    fontWeight: '600',
    textAlign: 'center',

    color: Colors.primary,
  },
  contentContainer: {
    // backgroundColor: Colors.troutGrey,
    flex: 1,
    padding: 24,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  contentTxt: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.shadyWhite,
  },
  shareBtn: {
    backgroundColor: Colors.athenGrey,
    paddingVertical: 12,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',

    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  shareTxt: {
    color: Colors.primary,
    fontSize: 16,
  },
  nextBtn: {
    backgroundColor: Colors.spaceGrey,
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 24,
    // width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',

    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  nextTxt: {
    color: Colors.shadyWhite,
    fontSize: 24,
  },
  scoreTxt: {
    fontSize: 44,
    fontWeight: '600',
  },
});

export default WinningPage;
