import React from 'react';
import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

import { trophy } from '../../assets/animations';

import * as S from './styles';

const Congratulations = () => {
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.Content>
        <S.Title>Congratulations</S.Title>

        <Lottie
          style={{ width: 300, height: 300 }}
          source={trophy}
          autoPlay
          loop
        />

        <S.Description>
          You got more than half the questions right.
        </S.Description>

        <S.ScoreTitle>YOUR SCORE</S.ScoreTitle>

        <S.Score>
          <S.RightQuestions>12</S.RightQuestions> / 15
        </S.Score>
      </S.Content>

      <S.ButtonNewQuiz onPress={() => navigation.navigate('Categories')}>
        New Quiz
      </S.ButtonNewQuiz>
    </S.Container>
  );
};

export default Congratulations;
