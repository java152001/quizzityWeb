'use client';
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';

type Quiz = {
    rounds: number;
    date: Date;
}

const QuizPage = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Quiz>({
        defaultValues: {
            rounds: 8
        }
    })

    const onSubmit: SubmitHandler<Quiz> = (data) => console.log(data);

    return (
        <div className="max-w-xl mx-auto py-12 md:max-w-4xl">
            <h1 className="text-2xl font-bold">Quiz Creation</h1>
            <h3 className="mt-2 text-lg text-gray-600">Lets get started with building out your quiz!</h3>
            <div className='mt-8 max-w-md'>
                <form className='grid grid-cols-1 gap-6' onSubmit={handleSubmit(onSubmit)}>
                    <label className='block'>
                        <span className='text-gray-700'>Number of Rounds</span>
                        <input className='mt-1 block w-full' placeholder='number of rounds' type='number'></input>
                    </label>
                    <label className='block'>
                        <span className='text-gray-700'>Date of Quiz</span>
                        <input className='mt-1 block w-full' type='date'></input>
                    </label>
                </form>
            </div>
        </div>
  )
}

export default QuizPage