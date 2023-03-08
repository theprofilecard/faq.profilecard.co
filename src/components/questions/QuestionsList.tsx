import { Questions } from '../../type';
import { FC } from 'react';
import { Box } from '@mui/material';
import CardItem from './QuestionItem';

type IProps = {
  questions: Questions[];
};

const QuestionsList: FC<IProps> = ({ questions }) => {
  return (
    <>
      {questions.map((val, idx) => (
        <Box key={idx}>
          <CardItem answer={val.answer} question={val.question} />
        </Box>
      ))}
    </>
  );
};

export default QuestionsList;
