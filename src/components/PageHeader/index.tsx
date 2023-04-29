import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Colors from '../../theme/Colors';
import {icChevronLeft} from '../../assets';
import {useNavigation} from '@react-navigation/native';

type Props = {
  title?: string;
};

const PageHeader: React.FC<Props> = ({title}) => {
  const Navigation = useNavigation();

  const popPage = () => {
    Navigation.canGoBack() && Navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={popPage}>
        <Image
          source={icChevronLeft}
          style={{width: 32, height: 32, tintColor: Colors.primary}}
        />
      </Pressable>
      <Text style={styles.titleTxt}>{title}</Text>
      <View style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.18,
    // shadowRadius: 1.0,

    // elevation: 1,

    backgroundColor: Colors.shadyWhite,

    flexDirection: 'row',
    alignItems: 'center',
  },
  titleTxt: {
    flex: 1,
    fontSize: 28,
    fontWeight: '500',
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  button: {
    height: 44,
    width: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PageHeader;
