'use client';
import React, { useState } from 'react'
import { useForm, useFieldArray, SubmitHandler } from 'react-hook-form';

type Inputs = {
    questionType: string;
    questionText: string;
    questionAnswer: string;
}

type Questions = {
    questions: Inputs[];
}

const QuizPage = () => {

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
        <>
            <h1>Create your Quiz</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center">
                <div className="flex flex-col w-9/12 border-opacity-50" >
                {
                    fields.map((field, index) => {
                        return (
                            <div className = "h-full card bg-base-300 rounded-box place-items-center p-4 mb-4" key={field.id}>
                                <div className="label">
                                    <span className='label-text'>What is the text for your question?</span>
                                </div>
                                <input type="text" {...register(`questions.${index}.questionText`)} placeholder='Type Here' className='input input-bordered w-full max-w-xs' />
                                <div className='label'>
                                    <span className='label-text'>What is the answer to your question?</span>
                                </div>
                                <input type="text" {...register(`questions.${index}.questionAnswer`)} placeholder='Type Here' className='input input-bordered w-full max-w-xs' />
                                <div className='label'>
                                    <span className='label-text'>What is the question type?</span>
                                </div>
                                <input type="text" {...register(`questions.${index}.questionType`)} placeholder='Type Here' className='input input-bordered w-full max-w-xs' />
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
                </div>
                <button type="button" onClick={() => append({ questionType: '', questionAnswer: '', questionText: '' })}>Add Question</button>
                <input type="submit" />
            </form>
        </>
    )
}

export default QuizPage