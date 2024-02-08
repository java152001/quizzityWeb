'use client'
import { MouseEvent } from "react";

export default function MenuBtn() {

    const removeFocus = (e: MouseEvent<HTMLElement>) => {
        let targetEl = e.currentTarget;
        if (targetEl && targetEl.matches(':focus')) {
            setTimeout(function() {
                targetEl.blur();
            })
        }
    } 

    return (
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" onMouseDown={removeFocus}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </div>
    )
}