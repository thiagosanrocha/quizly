import React, { useCallback, useEffect, useState } from 'react';
import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import { sad } from '../../assets/animations';

import * as S from './styles';
import { ISelectedAnswer } from '../../store/modules/selectedAnswers/types';
import { resetSelectedAnswer } from '../../store/modules/selectedAnswers/actions';
import { IState } from '../../store';

const TryAgain = () => {
  const [userScore, setUserScore] = useState(0);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const selectedAnswers = useSelector<IState, ISelectedAnswer[]>(
    state => state.selectedAnswers,
  );

  const handleScore = useCallback(() => {
    const totalScore = selectedAnswers.reduce((score, answer) => {
      return answer.isCorrect ? score + 1 : score;
    }, 0);

    setUserScore(totalScore);
  }, [selectedAnswers]);

  useEffect(() => {
    handleScore();
  }, [handleScore]);

  const handlePressButtonNewQuiz = useCallback(() => {
    dispatch(resetSelectedAnswer());
    navigation.navigate('Categories');
  }, [dispatch, navigation]);

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
          <S.RightQuestions>{userScore}</S.RightQuestions> / 15
        </S.Score>
      </S.Content>

      <S.ButtonNewQuiz onPress={handlePressButtonNewQuiz}>
        New Quiz
      </S.ButtonNewQuiz>
    </S.Container>
  );
};

export default TryAgain;
