'use client';
import React from 'react'
import { useForm, useFieldArray, SubmitHandler } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type Inputs = {
    questionType: string;
    questionText: string;
    questionAnswer: string;
}

type Questions = {
    questions: Inputs[];
}

const QuestionsPage = () => {

    const getQuizzes = async () => {
        const res = await axios('http://localhost:3001/api/quiz/1');
        return res.data;
    }

    const { data, error, isLoading } = useQuery("quizData", getQuizzes);

    console.log(data);

    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors }
    } = useForm<Questions>({
        defaultValues: {
            questions: [
                {
                    questionType: "",
                    questionText: "",
                    questionAnswer: ""
                }
            ]
        }
    })
    const onSubmit: SubmitHandler<Questions> = (data) => console.log(data)

    const { fields, append, remove } = useFieldArray({
        name: 'questions',
        control
    })

    return (
        <div className="max-w-xl mx-auto py-12 md:max-w-4xl">
            <h1 className="text-2xl font-bold">Create your Quiz</h1>
            <div className='mt-8 max-w-md'>
            <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit(onSubmit)}>
                {
                    fields.map((field, index) => {
                        return (
                            <div key={field.id}>
                                <label className='block mb-5'>
                                    <span className="text-gray-700">What is the text for your question?</span>
                                    <textarea className='mt-1 block w-full' {...register(`questions.${index}.questionText`)} />
                                </label>
                                <label className='block mb-5'>
                                    <span className="text-gray-700">What is the answer to your question?</span>
                                    <input className='mt-1 block w-full' {...register(`questions.${index}.questionAnswer`)} />
                                </label>
                                <label className='block mb-5'>
                                    <span className="text-gray-700">What is your question type?</span>
                                    <input className='mt-1 block w-full' {...register(`questions.${index}.questionType`)} />
                                </label>
                                {
                                    index > 0 &&
                                        (
                                            <button type="button" onClick={() => remove(index)}>Remove Question</button>
                                        )
                                }
                            </div>
                        )
                    })
                }
                <button type="button" onClick={() => append({ questionType: '', questionAnswer: '', questionText: '' })}>Add Question</button>
                <input type="submit" />
            </form>
            </div>
        </div>
    )
}

export default QuestionsPage