import axios from "axios";
import { log } from "console";
import { promises } from "dns";

// https://opentdb.com/api.php?amount=10&category=9&type=boolean
const baseURl = "https://opentdb.com/api.php?amount=";
export const getQuestions = async (
  amount: number,
  difficulty: string
): Promise<any> => {
  try {
    const response = await axios.get(
      `${baseURl}${amount}&difficulty=${difficulty}&type=boolean`
    );
    return response.data.result;
  } catch (error) {
    throw new Error(`Error fetching the questions. ${error}`);
  }
};

//! Without Typescript
// export const getQuestions = async () => {
//   try {
//     const response = await axios.get(`${baseURl}10&category=9&type=boolean`);
//     return response.data.result;
//   } catch (error) {
//     throw new Error(`Error fetching the questions. ${error}`);
//   }
// };
