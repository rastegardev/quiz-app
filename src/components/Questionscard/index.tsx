import { Box, Heading, Flex } from "@chakra-ui/react";
// import { QuestionscardProps } from "../../interface";

import Appbutton from "components/Button";

const Questionscard: React.FC<QuestionscardProps> = ({
  questions,
  category,
  totalQuestions,
  questionsNumber,
  callback,
}) => {
  return (
    <>
      <Box bg="white" width="100%">
        <Box mb={6} fontSize="md" fontWeight="bold" textTransform="uppercase">
          Your progress: {questionsNumber}/{totalQuestions}
        </Box>
        <Box>{category}</Box>
        <Heading>
          <Box>{questions}</Box>
        </Heading>

        <Flex>
          <Box></Box>
        </Flex>
      </Box>
    </>
  );
};
