import React from 'react';

import { emblem } from '../../assets/images';

import * as S from './styles';

export type Category = { id: string; name: string };

const ChooseDifficulty = () => (
  <S.Container>
    <S.Title>
      <S.Emblem source={emblem} />

      <S.Text>Choose {'\n'}a difficulty</S.Text>
    </S.Title>

    <S.ContainerDifficultyList>
      <S.DifficultyBar />

      <S.DifficultyList>
        <S.DifficultyCard variant="rectangular">Easy</S.DifficultyCard>

        <S.DifficultyCard variant="rectangular">Medium</S.DifficultyCard>

        <S.DifficultyCard style={{ marginBottom: 0 }} variant="rectangular">
          Hard
        </S.DifficultyCard>
      </S.DifficultyList>
    </S.ContainerDifficultyList>
  </S.Container>
);

export default ChooseDifficulty;
