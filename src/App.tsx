import Navbar from './components/navbar/Navbar';
import { Questions } from './type';
import { Box } from '@mui/material/';
import { useState } from 'react';
import QuestionsList from './components/questions/QuestionsList';
import SearchInput from './components/SearchInput';
import questionsList from './data/questionsList.json';

const App = () => {
  const questions: Questions[] = questionsList;

  const [searchResult, setSearchResult] = useState<Questions[]>(questions);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const res = questions.filter(val =>
      val.question.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResult(res);
  };

  return (
    <>
      <Navbar />
      <Box
        marginLeft="10%"
        marginRight="10%"
        textAlign="center"
        sx={{ position: 'relative' }}
      >
        <Box marginTop="5%">
          <SearchInput searchHandler={searchHandler} />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            background:
              'linear-gradient(90deg, rgba(138, 121, 255, 0.8) 0%, rgba(206, 77, 164, 0.8) 100%)',
            filter: 'blur(30px)',
          }}
        ></Box>
        <Box textAlign="start" marginTop="2.5%" marginBottom="2.5%">
          <QuestionsList questions={searchResult} />
        </Box>
      </Box>
    </>
  );
};

export default App;
