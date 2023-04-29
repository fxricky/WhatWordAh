import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PageContainer from '../../components/PageContainer';
import Colors from '../../theme/Colors';
import {StackActions, useNavigation} from '@react-navigation/native';
import {PAGE_NAME} from '../pageName';

type Props = {};

const APP_NAME = 'WhatWordsAh';

const SplashScreen: React.FC<Props> = ({}) => {
  const Navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      Navigation.dispatch(StackActions.replace(PAGE_NAME.HOME_PAGE));
    }, 800);
  }, []);

  return (
    <PageContainer style={styles.container}>
      <Text style={styles.nameTxt}>WhatWordAh</Text>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  nameTxt: {
    fontSize: 44,
    fontWeight: 'bold',
    color: Colors.shadyWhite,
  },
});

export default SplashScreen;
