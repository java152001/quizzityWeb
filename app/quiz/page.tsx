'use client';
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type Quiz = {
    rounds: number;
    date: Date;
}

const QuizPage = () => {

    const queryClient = useQueryClient();

    const {mutate: submitQuiz, isLoading} = useMutation({
        mutationFn: async(quiz: Quiz) => await axios.post('/api/quiz/create', {
            quiz: quiz
        }),
        onSuccess: () => {
            console.log('post succeeded')
            //queryClient.invalidateQueries(['currentQuiz'])
        },
        onError: () => {console.log('post failed')}
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Quiz>({
        defaultValues: {
            rounds: 8
        }
    })

    const onSubmit: SubmitHandler<Quiz> = (data) => {
        submitQuiz(data);
    };

    return (
        <div className="max-w-xl mx-auto py-12 md:max-w-4xl">
            <h1 className="text-2xl font-bold">Quiz Creation</h1>
            <h3 className="mt-2 text-lg text-gray-600">Lets get started with building out your quiz!</h3>
            <div className='mt-8 max-w-md'>
                <form className='grid grid-cols-1 gap-6' onSubmit={handleSubmit(onSubmit)}>
                    <label className='block'>
                        <span className='text-gray-700'>Number of Rounds</span>
                        <input className='mt-1 block w-full' {...register('rounds')} placeholder='number of rounds' type='number'></input>
                    </label>
                    <label className='block'>
                        <span className='text-gray-700'>Date of Quiz</span>
                        <input className='mt-1 block w-full' {...register('date')} type='date'></input>
                    </label>
                    <button type='submit' className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
  )
}

export default QuizPage