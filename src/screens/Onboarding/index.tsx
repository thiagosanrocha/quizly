import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { onboardingImage } from '../../assets/images';

import {
  Container,
  FeaturedImage,
  Title,
  Description,
  ButtonStartQuiz,
} from './styles';

const Onboarding = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <FeaturedImage source={onboardingImage} />

        <Title>Test your {'\n'}knowledge.</Title>

        <Description>
          Choose a category that you master {'\n'}and try to get it right as
          {'\n'}much as possible.
        </Description>

        <ButtonStartQuiz onPress={() => navigation.navigate('Categories')}>
          Start Quiz
        </ButtonStartQuiz>
      </Container>
    </>
  );
};

export default Onboarding;
