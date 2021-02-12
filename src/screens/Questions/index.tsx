import React, { useState, useCallback, useEffect } from 'react';
import { ScrollView } from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import { useSelector, useDispatch } from 'react-redux';
import { decode } from 'html-entities';
import { useNavigation } from '@react-navigation/native';
import { v4 as uuid } from 'uuid';

import Answer from '../../components/Answer';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import { IState } from '../../store';
import { IConfigsSelected } from '../../store/modules/configsSelected/types';
import api from '../../services/api';
import { IApiResponse, IQuestion } from './types';
import {
  addSelectedAnswer,
  removeSelectedAnswer,
} from '../../store/modules/selectedAnswers/actions';
import { ISelectedAnswer } from '../../store/modules/selectedAnswers/types';

import * as S from './styles';

const Questions = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [modalIsVisibel, setModalIsVisibel] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const configsSelected = useSelector<IState, IConfigsSelected>(
    state => state.configsSelected,
  );

  const selectedAnswers = useSelector<IState, ISelectedAnswer[]>(
    state => state.selectedAnswers,
  );

  useEffect(() => {
    (async function loadQuestions() {
      const { data } = await api.get<IApiResponse>(
        `?amount=15&category=${configsSelected.selectedCategory}&difficulty=${configsSelected.selectedDifficulty}&type=multiple`,
      );

      const allQuestions = data.results.map(
        ({ question, incorrect_answers, correct_answer }) => ({
          question: decode(question),
          answers: incorrect_answers
            .concat(correct_answer)
            .sort()
            .map(answer => ({
              id: uuid(),
              text: answer,
            })),
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

  const isSelectedAnswers = useCallback(
    (answerId: string) => {
      const findAnswer = selectedAnswers.find(answer => answer.id === answerId);

      return !!findAnswer;
    },
    [selectedAnswers],
  );

  const handleCorrectAnswer = useCallback(
    (answerText: string) => {
      if (questions[currentQuestion - 1].correct_answer === answerText)
        return true;

      return false;
    },
    [questions, currentQuestion],
  );

  const handleClickOnAnswer = useCallback(
    (answerId: string, answerText: string) => {
      const findPreviouslySelectedAnswer = selectedAnswers.find(
        selectedAnswer => {
          const findAnswer = questions[currentQuestion - 1].answers.find(
            answer => selectedAnswer.id === answer.id,
          );

          return !!findAnswer;
        },
      );

      if (findPreviouslySelectedAnswer) {
        const previouslySelectedAnswer = findPreviouslySelectedAnswer;

        dispatch(removeSelectedAnswer(previouslySelectedAnswer.id));

        return dispatch(
          addSelectedAnswer({
            id: answerId,
            isCorrect: handleCorrectAnswer(answerText),
          }),
        );
      }

      return dispatch(
        addSelectedAnswer({
          id: answerId,
          isCorrect: handleCorrectAnswer(answerText),
        }),
      );
    },
    [
      currentQuestion,
      dispatch,
      handleCorrectAnswer,
      questions,
      selectedAnswers,
    ],
  );

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
                <Answer
                  key={answer.id}
                  onPress={() => handleClickOnAnswer(answer.id, answer.text)}
                  isFocus={isSelectedAnswers(answer.id)}
                >
                  {answer.text}
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
