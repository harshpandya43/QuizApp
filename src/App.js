import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Where would I like to go on a vacation with you?',
			answerOptions: [
				{ answerText: 'Mountains', isCorrect: false },
				{ answerText: 'Beach', isCorrect: true },
				{ answerText: 'Some Village', isCorrect: true },
				{ answerText: 'No vacation. Just stay at home and relax', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'Which date night would appeal me the most?',
			answerOptions: [
				{ answerText: 'Going out for drinks', isCorrect: false },
				{ answerText: 'A fancy meal out', isCorrect: false },
				{ answerText: 'Ordering Pizza, Watching movie at home and having sex', isCorrect: true },
				{ answerText: 'Going to the theatre', isCorrect: false },
			],
		},
		{
			questionText: 'Out of these which meal I would prefer the most?',
			answerOptions: [
				{ answerText: 'Subway Sandwich', isCorrect: false },
				{ answerText: 'Burger', isCorrect: true },
				{ answerText: 'Tacos', isCorrect: false },
				{ answerText: 'Salad', isCorrect: false },
			],
		},
		{
			questionText: 'Which vacation destination would I pick?',
			answerOptions: [
				{ answerText: 'Hawaii', isCorrect: true },
				{ answerText: 'Disney World', isCorrect: false },
				{ answerText: 'Spain', isCorrect: false },
				{ answerText: 'Paris', isCorrect: false },
			],
		},
		{
			questionText: 'Who is my most favorite superhero?',
			answerOptions: [
				{ answerText: 'Superman', isCorrect: false },
				{ answerText: 'Hanuman', isCorrect: false },
				{ answerText: 'Batman', isCorrect: true },
				{ answerText: 'Ironman', isCorrect: false },
			],
		},
		{
			questionText: 'As a child what do I wanted to become?',
			answerOptions: [
				{ answerText: 'Doctor', isCorrect: false },
				{ answerText: 'Lawyer', isCorrect: false },
				{ answerText: 'President of India', isCorrect: true },
				{ answerText: 'Judge', isCorrect: false },
			],
		},
		{
			questionText: 'Out of these which is the thing do I love doing the most to you in bed?',
			answerOptions: [
				{ answerText: 'Cuddle', isCorrect: false },
				{ answerText: 'Kiss', isCorrect: false },
				{ answerText: 'Tickle', isCorrect: true },
				{ answerText: 'Sleep with my hand on your stomach', isCorrect: false },
			],
		},
		{
			questionText: 'Which facial feature of yours I love the most?',
			answerOptions: [
				{ answerText: 'Your cute Nose', isCorrect: false },
				{ answerText: 'Sexy Eyes', isCorrect: false },
				{ answerText: 'Luscious Lips', isCorrect: true },
				{ answerText: 'Cute Smile', isCorrect: false },
			],
		},
		{
			questionText: 'Which activity I want to do with you?',
			answerOptions: [
				{ answerText: 'Paint together', isCorrect: false },
				{ answerText: 'Karaoke', isCorrect: false },
				{ answerText: 'Cook together', isCorrect: true },
				{ answerText: 'Play Dota', isCorrect: false },
			],
		},
		{
			questionText: 'What was the first movie we saw together?',
			answerOptions: [
				{ answerText: 'Love Aaj Kal', isCorrect: false },
				{ answerText: 'Me Before You', isCorrect: false },
				{ answerText: 'Bhoot', isCorrect: true },
				{ answerText: 'Shubh Mangal Zyada Saavdhan', isCorrect: false },
			],
		},
		{
			questionText: 'What was the first movie we saw together?',
			answerOptions: [
				{ answerText: 'Love Aaj Kal', isCorrect: false },
				{ answerText: 'Me Before You', isCorrect: false },
				{ answerText: 'Bhoot', isCorrect: true },
				{ answerText: 'Shubh Mangal Zyada Saavdhan', isCorrect: false },
			],
		},
		{
			questionText: 'Other than 69 which other sexual position I wanna do with you the most?',
			answerOptions: [
				{ answerText: 'Doggystyle', isCorrect: false },
				{ answerText: 'Cowgirl', isCorrect: false },
				{ answerText: 'The Standing Ovation', isCorrect: true },
				{ answerText: 'Spooning', isCorrect: false },
			],
		},
		{
			questionText: 'What kind of traveler am I?',
			answerOptions: [
				{ answerText: 'Planner, who likes to set an itnerary for everything', isCorrect: false },
				{ answerText: 'Spontaneous', isCorrect: false },
				{ answerText: 'I prefer to stay in hotel and sleep', isCorrect: true }
			],
		},
		{
			questionText: 'The movie which I want to watch with you when we would be together',
			answerOptions: [
				{ answerText: 'Sarfarosh', isCorrect: false },
				{ answerText: 'Andaaz Apna Apna', isCorrect: true },
				{ answerText: 'Nayak: The Real Hero', isCorrect: false },
				{ answerText: 'Bahubali: The Beginning and The Conclusion', isCorrect: false }
			],
		},



	];

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
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
