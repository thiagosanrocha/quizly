import React from 'react';
import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

import { sad } from '../../assets/animations';

import * as S from './styles';

const TryAgain = () => {
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.Content>
        <S.Title>TryAgain</S.Title>

        <Lottie
          style={{ width: 320, height: 320 }}
          source={sad}
          autoPlay
          loop
        />

        <S.Description>
          You got less than half the questions right.
        </S.Description>

        <S.ScoreTitle>YOUR SCORE</S.ScoreTitle>

        <S.Score>
          <S.RightQuestions>6</S.RightQuestions> / 15
        </S.Score>
      </S.Content>

      <S.ButtonNewQuiz onPress={() => navigation.navigate('Categories')}>
        New Quiz
      </S.ButtonNewQuiz>
    </S.Container>
  );
};

export default TryAgain;
