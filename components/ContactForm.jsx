'use client'
import SendSharpIcon from '@mui/icons-material/SendSharp';
import { useRef, useState } from 'react';

export default function ContactForm() {

    const [btn, setBtn] = useState("Submit")
    const [isDisabled, setDisabled] = useState(false)
    const emailRef = useRef();
    const commentRef = useRef();

    async function handleSubmit(e) {
        // 'use Server'
        e.preventDefault();
        const response = await fetch(`/api?email=${emailRef.current.value}&comment=${commentRef.current.value}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: emailRef.current.value,
                comment: commentRef.current.value
            }
            )
        }
        );
        const res = await response.json();
        console.log(res);
        if (res.status === "success") {
            setBtn("Submitted")
            setDisabled(true)
        }
    }

    return (
        <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
            <div className="form-group mb-3">
                <label>Email:</label>
                <input ref={emailRef} type="email" className="form-control" id="email" name="email" />
            </div>
            <div className="form-group mb-3">
                <label>Comments:</label>
                <textarea ref={commentRef} className="form-control" id="comments" name="comments" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-light fw-bold border-white bg-white mb-3" disabled={isDisabled}>{btn} <SendSharpIcon /></button>
        </form>
    )
}