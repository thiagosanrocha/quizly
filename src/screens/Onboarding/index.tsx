import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { onboardingImage } from '../../assets/images';

import * as S from './styles';

const Onboarding = () => {
  const navigation = useNavigation();

  return (
    <>
      <S.Container>
        <S.FeaturedImage source={onboardingImage} />

        <S.Title>Test your {'\n'}knowledge.</S.Title>

        <S.Description>
          Choose a category that you master {'\n'}and try to get it right as
          {'\n'}much as possible.
        </S.Description>

        <S.ButtonStartQuiz onPress={() => navigation.navigate('Categories')}>
          Start Quiz
        </S.ButtonStartQuiz>
      </S.Container>
    </>
  );
};

export default Onboarding;
