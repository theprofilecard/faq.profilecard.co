import Navbar from './components/Navbar';
import { Questions } from './type';
import { Box, TextField, InputAdornment } from '@mui/material/';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import QuestionsList from './components/QuestionsList';

const App = () => {
  const questions: Questions[] = [
    {
      question: 'What is ProfileCard?',
      answer:
        'ProfileCard is a web application that allows users to create their own personal profile pages and share links such as social media accounts on these pages.',
    },
    {
      question: 'What can I do with ProfileCard?',
      answer:
        'With ProfileCard, you can create your own personalized profile page where you can share links to your social media accounts, websites, and other online profiles. You can customize the appearance of your profile page with different colors, and showcase your personal and professional information like bio, education, experience, and contact details.',
    },
    {
      question: 'How do I sign up for ProfileCard?',
      answer:
        "You can sign up for ProfileCard by visiting our website at https://www.profilecard.co/ and clicking on the 'Sign up' button. You can also sign up using your Google account.",
    },
    {
      question: 'Can I connect my social media accounts to ProfileCard?',
      answer:
        'Yes, you can connect your social media accounts like Twitter, Instagram, LinkedIn, and others to your ProfileCard profile.',
    },
    {
      question: 'Is ProfileCard mobile-friendly?',
      answer:
        'Yes, ProfileCard is designed to be mobile-responsive, ensuring that it looks good and works well on a variety of mobile devices.',
    },
    {
      question: 'How do I change the background color of my profile page?',
      answer:
        'You can change the background color of your profile page by using our profile color picker tool. You can select a color that matches your style and personality.',
    },
    {
      question: 'How many links can I add to my profile page?',
      answer: 'You can add up to 5 links to your profile page.',
    },
    {
      question: 'How do I delete a link from my profile page?',
      answer:
        'To delete a link from your profile page, go to your profile settings and delete the link url address and titl you want to remove and then update your information',
    },
    {
      question: 'How can I share my profile page with others?',
      answer:
        'You can share your profile page with others through a unique URL that is generated when you create your profile page.',
    },
    {
      question: 'How can I contact ProfileCard?',
      answer: 'You can contact us through our Discord channel.',
    },
  ];

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
      <Box marginLeft="10%" marginRight="10%" textAlign="center">
        <Box marginTop="1%" marginBottom="1%">
          <TextField
            onChange={searchHandler}
            placeholder="Search"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box textAlign="start">
          <QuestionsList questions={searchResult} />
        </Box>
      </Box>
    </>
  );
};

export default App;
