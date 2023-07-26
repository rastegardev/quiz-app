import React from "react";
import { useState, useEffect } from "react";
import { Questionscard, Appbutton, Appspinner } from "@/components/index";
import { Difficulty, totalQuestions } from "@/constants/index";
import { getQuestionlist } from "@/services/fetchQuestions";
import { QuestionsProps, AnswerObject } from "@/interface/index";
import { Box, Heading, Divider } from "@chakra-ui/react";

import { log } from "console";

const Homepage = () => {
  const [startQuiz, setStartQuiz] = useState(false);
  const [questions, setQuestions] = useState<QuestionsProps[]>([]);
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
  const [loading, setLoading] = useState(true);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      const questionListing = await getQuestionlist(
        totalQuestions,
        Difficulty.HARD
      );
    };
    fetchQuestions();
  }, []);

  const checkAnswer = () => {
    console.log("Check Answer");
    setQuestionNumber(1);
  };

  const startQuizGame = () => {
    console.log("Start Quiz");
  };

  const nextQuestion = () => {
    console.log("next Question");
  };

  const replayQuiz = () => {
    console.log("Replay Quiz");
  };

  return (
    <>
      <div className="App">
        {userAnswer.length === questionNumber &&
        !gameOver &&
        !loading &&
        !startQuiz ? (
          <>
            <div className="greeting-box">
              <Box boxShadow="base" p="6" rounded="md" bg="white" maxW="560px">
                <Heading as="h1" size="lg" mb={2}>
                  Welcome to Quiz Application
                </Heading>
                <p>
                  You will be presented with {totalQuestions} questions which
                  can be answered true or false. All the best!
                </p>
                <Appbutton
                  colorScheme="purple"
                  variant="solid"
                  onClick={startQuizGame}
                  value="Start Quiz Game"
                />
              </Box>
            </div>
          </>
        ) : null}
        {loading && (
          <div className="app-spinner">
            <Appspinner
              speed="0.65s"
              emptyColor="gray.200"
              color="purple"
              size="lg"
              thickness="5px"
            />
          </div>
        )}
        {!loading && !gameOver && startQuiz && (
          <Box boxShadow="base" p="6" rounded="md" bg="white" maxW="560px">
            <Questionscard
              questions={questions[questionNumber].question}
              category={questions[questionNumber].category}
              callback={checkAnswer}
              totalQuestions={totalQuestions}
              questionsNumber={questionNumber}
            />

            <Appbutton
              disabled={
                userAnswer.length === questionNumber + 1 &&
                questionNumber !== totalQuestions
                  ? ""
                  : "disabled"
              }
              colorScheme="purple"
              variant="solid"
              onClick={nextQuestion}
              value="Next Question"
              className="next-button"
              width="full"
            />
          </Box>
        )}
        {gameOver && (
          <>
            <Box boxShadow="base" p="6" rounded="md" bg="white" maxW="560px">
              <Box mb={4}>
                <Box fontWeight="bold" as="h3" fontSize="4xl">
                  Game Over!
                </Box>
                <Box as="h3" fontSize="xl">
                  Your score is {score}/{totalQuestions}.
                </Box>
              </Box>
              <Divider />
              {userAnswer.map((answer, index) => (
                <Box key={index}>
                  <div className="answer-list">
                    <Box fontSize="md" fontWeight="bold">
                      Q: {answer.question}
                    </Box>
                    <ul>
                      <li>You answered: {answer.answer}</li>
                      <li>Correct answer: {answer.correctAnswer}</li>
                    </ul>
                  </div>
                </Box>
              ))}
              <Appbutton
                colorScheme="purple"
                variant="solid"
                onClick={replayQuiz}
                value="Replay Quiz"
                width="full"
              />
            </Box>
          </>
        )}
      </div>
    </>
  );
};

export default Homepage;
