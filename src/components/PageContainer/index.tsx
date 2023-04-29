import React, {ReactNode} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleProp, ViewStyle} from 'react-native/types';
import Colors from '../../theme/Colors';

type Props = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

const PageContainer: React.FC<Props> = ({children, style}) => {
  return (
    <SafeAreaView
      style={[{flex: 1, backgroundColor: Colors.shadyWhite}, style]}>
      {children}
    </SafeAreaView>
  );
};

export default PageContainer;
