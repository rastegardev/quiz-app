import { Box, Heading, Flex } from "@chakra-ui/react";
import { QuestionscardProps } from "@/interface/index";
import Appbutton from "@/components/Button";

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
          <Box>
            <Appbutton
              colorScheme="purple"
              variant="outline"
              onClick={callback}
              value="False"
              width="full"
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};
export default Questionscard;
