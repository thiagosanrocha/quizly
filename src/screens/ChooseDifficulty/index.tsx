import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { emblem } from '../../assets/images';
import { addSelectedDifficulty } from '../../store/modules/configsSelected/actions';

import * as S from './styles';

export type Category = { id: string; name: string };

const ChooseDifficulty = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleAddSelectedDifficulty = useCallback(
    (categoryName: string) => {
      dispatch(addSelectedDifficulty(categoryName));
      navigation.navigate('Questions');
    },
    [dispatch, navigation],
  );

  return (
    <S.Container>
      <S.Title>
        <S.Emblem source={emblem} />

        <S.Text>Choose {'\n'}a difficulty</S.Text>
      </S.Title>

      <S.ContainerDifficultyList>
        <S.DifficultyBar colors={['#BAFC2F', '#FCA82F', '#FC602F']} />

        <S.DifficultyList>
          <S.DifficultyCard
            variant="rectangular"
            onPress={() => handleAddSelectedDifficulty('easy')}
          >
            Easy
          </S.DifficultyCard>

          <S.DifficultyCard
            variant="rectangular"
            onPress={() => handleAddSelectedDifficulty('medium')}
          >
            Medium
          </S.DifficultyCard>

          <S.DifficultyCard
            style={{ marginBottom: 0 }}
            variant="rectangular"
            onPress={() => handleAddSelectedDifficulty('hard')}
          >
            Hard
          </S.DifficultyCard>
        </S.DifficultyList>
      </S.ContainerDifficultyList>
    </S.Container>
  );
};

export default ChooseDifficulty;
