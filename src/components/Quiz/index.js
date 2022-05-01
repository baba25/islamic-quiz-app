import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./index.css";

export default function Quiz() {
const questions = [
  {
  questionText: 'What do Muslims say when hearing good news?',
  answerOptions: [
  { answerText: 'Bismillah (In the name of Allah)', isCorrect: false },
  { answerText: 'Subhanallah (Glory be to Allah)', isCorrect: false },
  { answerText: 'Jazak Allah (May Allah reward you)', isCorrect: false },
  { answerText: 'None of the above', isCorrect: true },
  ],
},

{
  questionText: 'How did Prophet Muhammad (PBUH) instruct the Muslims to treat animals and other living beings?',
  answerOptions: [
  { answerText: 'We should treat animals and other living beings with respect, mercy and kindness', isCorrect: true },
  { answerText: 'We should hunt the living beings for fun and sport', isCorrect: false },
  { answerText: 'We should abuse the living beings', isCorrect: false },
  { answerText: 'None of the above', isCorrect: false },
  ],
},

{
  questionText: 'Is visiting the sick and the ailing considered as a right over others in Islam?',
  answerOptions: [
  { answerText: 'Visiting the sick and the ailing is one of the six rights which one Muslim has over the other', isCorrect: false },
  { answerText: 'Visiting the sick is considered as a virtuous deed and a noble duty', isCorrect: false },
  { answerText: 'Visiting the sick is rewarded by Allah’s mercy', isCorrect: false },
  { answerText: 'All the above', isCorrect: true },
  ],
},

{
  questionText: 'What is the mannerism of treating neighbours in Islam?',
  answerOptions: [
  { answerText: 'Prophet Muhammad (PBUH) said: “He is not a Muslim, who eats full while his neighbour is hungry”', isCorrect: false },
  { answerText: 'Prophet Muhammad (PBUH) said: “He is not a Muslim, if his neighbour is not safe”', isCorrect: false },
  { answerText: 'Prophet Muhammad (PBUH) said: “Give gifts to your neighbours both Muslims and Non-Muslims”', isCorrect: false },
  { answerText: 'All the above', isCorrect: true },
  ],
},

{
  questionText: 'How do Muslims greet each other?',
  answerOptions: [
  { answerText: 'Assalamu Alaikum Wa Rahmathullahi Wa Barakatuhu (May the Peace, Mercy and Blessing of Allah be on you)', isCorrect: true },
  { answerText: 'Bismilllah (In the Name of Allah)', isCorrect: false },
  { answerText: 'Subhanallah (Glory be to Allah)', isCorrect: false },
  { answerText: 'Good Day to you', isCorrect: false },
  ],
},


{
  questionText: 'What do Muslims say before beginning to do anything?',
  answerOptions: [
  { answerText: 'Alhamdulillah (Praise be to Allah)', isCorrect: false },
  { answerText: 'Subhanallah (Glory be to Allah)', isCorrect: false },
  { answerText: 'Bismillah hir Rahman nir Rahim (In the name of Allah, the most beneficent and the most merciful)', isCorrect: true },
  { answerText: 'None of the above', isCorrect: false },
  ],
},


{
  questionText: 'How should we treat our children?',
  answerOptions: [
  { answerText: 'Prophet Muhammad (PBUH) instructed Muslims to smile at children and to show mercy', isCorrect: false },
  { answerText: 'Prophet Muhammad (PBUH) always greeted children with Salam', isCorrect: false },
  { answerText: 'Prophet Muhammad (PBUH) was never harsh on children', isCorrect: false },
  { answerText: 'All the above', isCorrect: true },
  ],
},

{
  questionText: 'What do Muslims say when assuring someone or intending to do something in the future?',
  answerOptions: [
  { answerText: 'In Sha Allah (With the Willing of Allah)', isCorrect: true },
  { answerText: 'Alhamdulillah (Praise be to Allah)', isCorrect: false },
  { answerText: 'Bismillah (in the name of Allah)', isCorrect: false },
  { answerText: 'None of the above', isCorrect: false },
  ],
},

{
  questionText: 'What do Muslims say when thanking someone?',
  answerOptions: [
  { answerText: 'Alhamdulillah (Praise be to Allah)', isCorrect: false },
  { answerText: 'Jazak Allah Khair (May Allah Reward you)', isCorrect: true },
  { answerText: 'Subhanallah (Glory be to Allah)', isCorrect: false },
  { answerText: 'None of the above', isCorrect: false },
  ],
},


{
  questionText: 'What is the mannerism of brotherhood taught by the Prophet Muhammad (PBUH)?',
  answerOptions: [
  { answerText: 'Everyone should be selfish', isCorrect: false },
  { answerText: 'One should wish for the brother the same as he wishes for himself', isCorrect: true },
  { answerText: 'Brothers do not deserve anything', isCorrect: false },
  { answerText: 'None of the above', isCorrect: false },
  ],
},

]

const [currentQuestion, setCurrentQuestion] = useState(0);
const [showScore, setShowScore] = useState(false);
const [score, setScore] = useState(0);
const handleAnswerOptionClick = (isCorrect) => {
if (isCorrect) {
  setScore(score + 1);
  }
  const nextQuestion = currentQuestion + 1;
  if (nextQuestion < questions.length) {
  setCurrentQuestion(nextQuestion);
  } else {
  setShowScore(true);
  }
};


return (
<div className='quiz-cont quiz-page'>
  {showScore ? (
<div className='score-section'>
  You scored {score} out of {questions.length}
</div>
) : (
<>
  <div className='question-section'>
  <div className='question-count'>
    <span>Question {currentQuestion +1}</span>/{questions.length}
  </div>
  <div
  className='question-text'>{questions[currentQuestion].questionText}</div>
  </div>
  
  <div className='answer-section'>
  {questions[currentQuestion].answerOptions.map((answerOption) => (
  <button className='quiz-btn' onClick={() =>
  handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
  ))}
  </div>
</>
)}

</div>

);
}
