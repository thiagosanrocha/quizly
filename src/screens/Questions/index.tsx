import React, { useState, useCallback, useEffect } from 'react';
import { ScrollView } from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import { decode } from 'html-entities';
import { useNavigation } from '@react-navigation/native';

import Answer from '../../components/Answer';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import { IState } from '../../store';
import { IConfigsSelected } from '../../store/modules/configsSelected/types';
import api from '../../services/api';
import { IApiResponse, IQuestions } from './types';

import * as S from './styles';

const Questions = () => {
  const [questions, setQuestions] = useState<IQuestions[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [modalIsVisibel, setModalIsVisibel] = useState(false);

  const navigation = useNavigation();

  const configsSelected = useSelector<IState, IConfigsSelected>(
    state => state.configsSelected,
  );

  useEffect(() => {
    (async function loadQuestions() {
      const { data } = await api.get<IApiResponse>(
        `?amount=15&category=${configsSelected.selectedCategory}&difficulty=${configsSelected.selectedDifficulty}&type=multiple`,
      );

      const allQuestions = data.results.map(
        ({ question, incorrect_answers, correct_answer }) => ({
          question: decode(question),
          answers: incorrect_answers.concat(correct_answer).sort(),
          correct_answer,
        }),
      );

      setQuestions(allQuestions);
    })();
  }, [configsSelected]);

  const handleIncrementQuestion = useCallback(() => {
    if (currentQuestion < 15) {
      setCurrentQuestion(currentQuestion + 1);
    }

    if (currentQuestion === 15) {
      setModalIsVisibel(true);
    }
  }, [currentQuestion]);

  const handleDecrementQuestion = useCallback(
    () => currentQuestion > 1 && setCurrentQuestion(currentQuestion - 1),
    [currentQuestion],
  );

  const handleSelectedAnswer = useCallback(() => {}, []);

  const handleModalClosing = useCallback(
    () => setModalIsVisibel(!modalIsVisibel),
    [setModalIsVisibel, modalIsVisibel],
  );

  const handleModalConfirmation = useCallback(() => {
    setModalIsVisibel(false);
    navigation.navigate('Congratulations');
  }, [navigation]);

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
            <S.CurrentQuestion>
              Question {currentQuestion} / 15
            </S.CurrentQuestion>
            <S.Time>6:34</S.Time>
          </S.Status>

          <S.ProgressiveBar>
            <S.StatusBar value={(100 / 15) * currentQuestion} />
          </S.ProgressiveBar>
        </S.Header>

        <ScrollView style={{ height: '88%' }}>
          <S.CardQuestions>
            <S.QuestionTitle>
              {questions[currentQuestion - 1]?.question}
            </S.QuestionTitle>

            <S.ContainerAnswer>
              {questions[currentQuestion - 1]?.answers.map(answer => (
                <Answer key={answer} onPress={handleSelectedAnswer}>
                  {answer}
                </Answer>
              ))}
            </S.ContainerAnswer>

            <S.Footer>
              <S.ButtonBack onPress={handleDecrementQuestion}>
                {currentQuestion !== 1 && (
                  <>
                    <FeatherIcons name="arrow-left" size={20} color="#FCA82F" />
                    <S.ButtonBackText>Back</S.ButtonBackText>
                  </>
                )}
              </S.ButtonBack>

              <Button variant="secondary" onPress={handleIncrementQuestion}>
                {currentQuestion === 15 ? 'Finish' : 'Next'}
              </Button>
            </S.Footer>
          </S.CardQuestions>
        </ScrollView>
      </S.Container>
    </>
  );
};

export default Questions;
