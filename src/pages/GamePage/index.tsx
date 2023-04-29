import {
  RouteProp,
  StackActions,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import PageContainer from '../../components/PageContainer';
import {CATEGORIES} from '../../constants';
import PageHeader from '../../components/PageHeader';
import {getDifficulties, getRandomNumber, shuffleArray} from '../../utils';
import Colors from '../../theme/Colors';
import {PAGE_NAME} from '../pageName';

type Props = {};

type PropsData = RouteProp<
  {
    GAME_PAGE: {categoryName: string};
  },
  'GAME_PAGE'
>;

const GamePage: React.FC<Props> = ({}) => {
  const {params} = useRoute<PropsData>();
  const Navigation = useNavigation();
  const [wordToGuess, setWordToGuess] = useState<string>('');
  const [shuffledWord, setShuffledWord] = useState<string[]>([]);
  const [correctWord, setCorrectWord] = useState<string[]>([]);

  React.useEffect(() => {
    if (params?.categoryName) {
      const {categoryName} = params;

      const categories = CATEGORIES[categoryName];

      if (categories) {
        const randomIndex = getRandomNumber(categories.length);
        // const selectedWord = 'SCOTTPILGRIM VS. THE WORLD';
        const selectedWord = categories[randomIndex];

        setWordToGuess(selectedWord.toUpperCase());

        setShuffledWord(
          shuffleArray(selectedWord.replace(/ /g, '').toUpperCase().split('')),
        );
      }
    }
  }, []);

  const navigateToWinningPage = () => {
    Navigation.dispatch(
      StackActions.replace(PAGE_NAME.WINNING_PAGE, {
        word: wordToGuess,
      }),
    );
  };

  const handleWordPressed = (word: string, index: number) => () => {
    console.log(
      wordToGuess,
      wordToGuess[correctWord.length],
      correctWord.length,
      word,
      index,
    );
    if (wordToGuess.replace(/ /g, '')[correctWord.length] === word) {
      const cloneCorrectWord = [...correctWord];
      cloneCorrectWord[correctWord.length] = word;
      setCorrectWord(cloneCorrectWord);

      const clonedShuffle = [...shuffledWord];
      clonedShuffle[index] = '';
      setShuffledWord(clonedShuffle);

      if (wordToGuess.replace(/ /g, '').length === cloneCorrectWord.length) {
        console.log(getDifficulties(wordToGuess.length));
        navigateToWinningPage();
      }
    }
  };

  return (
    <PageContainer>
      <PageHeader title={params?.categoryName} />
      <View style={styles.stageContainer}>
        {wordToGuess
          ? wordToGuess
              .replace(/ /g, '')
              .split('')
              .map((_, index) => {
                return (
                  <View style={[styles.btnRoot, styles.stageBtn]}>
                    <Text style={[styles.btnTxt, styles.stageBtnTxt]}>
                      {correctWord[index]}
                    </Text>
                  </View>
                );
              })
          : null}
      </View>
      <View style={styles.guessContainer}>
        {shuffledWord.map((w, i) => {
          const btnStyle = w ? styles.guessBtn : styles.emptyGuessBtn;

          return (
            <Pressable
              style={[styles.btnRoot, styles.guessBtn, btnStyle]}
              onPress={handleWordPressed(w, i)}>
              <Text style={[styles.btnTxt, styles.guessBtnTxt]}>{w}</Text>
            </Pressable>
          );
        })}
      </View>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  stageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
  },
  stageBtn: {
    backgroundColor: Colors.athenGrey,
  },
  stageBtnTxt: {
    color: Colors.primary,
  },
  guessContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
  },
  guessBtn: {
    backgroundColor: Colors.spaceGrey,
  },
  guessBtnTxt: {
    color: Colors.shadyWhite,
  },
  emptyGuessBtn: {
    backgroundColor: Colors.athenGrey,
  },
  btnRoot: {
    width: 48,
    height: 48,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
    marginRight: 4,
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
  btnTxt: {
    fontSize: 24,
  },
});

export default GamePage;
