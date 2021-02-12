import React, { useState, useCallback } from 'react';
import FeatherIcons from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';

import Answer from '../../components/Answer';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import { IState } from '../../store';
import { IConfigsSelected } from '../../store/modules/configsSelected/types';

import * as S from './styles';

const Questions = () => {
  const [modalIsVisibel, setModalIsVisibel] = useState(false);

  const configsSelected = useSelector<IState, IConfigsSelected>(
    state => state.configsSelected,
  );

  const handleModalClosing = useCallback(
    () => setModalIsVisibel(!modalIsVisibel),
    [setModalIsVisibel, modalIsVisibel],
  );

  const handleModalConfirmation = useCallback(
    () => console.log('Confirmou'),
    [],
  );

  return (
    <>
      <Modal
        isVisible={modalIsVisibel}
        title="Your time is not over."
        description="Are you sure you want to finish?"
        closeModal={handleModalClosing}
        confirmModal={handleModalConfirmation}
      />

      <S.Container>
        <S.Header>
          <S.Status>
            <S.CurrentQuestion>Question 4 / 15</S.CurrentQuestion>
            <S.Time>6:34</S.Time>
          </S.Status>

          <S.ProgressiveBar>
            <S.StatusBar value={60} />
          </S.ProgressiveBar>
        </S.Header>

        <S.CardQuestions>
          <S.QuestionTitle>
            In what year was the first Transformers movie released?
          </S.QuestionTitle>

          <S.ContainerAnswer>
            <Answer>2007</Answer>
            <Answer>1986</Answer>
            <Answer isFocus>1984</Answer>
            <Answer>2009</Answer>
          </S.ContainerAnswer>

          <S.Footer>
            <S.ButtonBack>
              <FeatherIcons name="arrow-left" size={20} color="#FCA82F" />
              <S.ButtonBackText>Back</S.ButtonBackText>
            </S.ButtonBack>

            <Button variant="secondary">Next</Button>
          </S.Footer>
        </S.CardQuestions>
      </S.Container>
    </>
  );
};

export default Questions;
