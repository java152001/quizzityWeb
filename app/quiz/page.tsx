'use client';
import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
    questionType: string;
    questionText: string;
    questionAnswer: string;
}

const QuizPage = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        <>
            <h1>Create your Quiz</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="test" {...register("questionText")} />
                <input {...register("questionAnswer", { required: true })} />
                {errors.questionAnswer && <span>This filed is required</span>}
                <input type="submit" />
            </form>
        </>
    )
}

export default QuizPage