import React, { PropsWithChildren } from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

type AnswerProps = TouchableOpacityProps & {
  isFocus?: boolean;
};

const Answer = ({
  isFocus,
  children,
  ...rest
}: PropsWithChildren<AnswerProps>) => {
  return (
    <S.Container isFocus={isFocus} {...rest}>
      <S.AnswerText isFocus={isFocus}>{children}</S.AnswerText>
    </S.Container>
  );
};

export default Answer;
