"use client";
import SendSharpIcon from "@mui/icons-material/SendSharp";
import { useRef, useState } from "react";

export default function ContactForm() {
  const [btn, setBtn] = useState("Submit");
  const [isDisabled, setDisabled] = useState(false);
  const emailRef = useRef();
  const commentRef = useRef();

  async function handleSubmit(e) {
    setDisabled(true);
    e.preventDefault();
    const response = await fetch(
      `/api?email=${emailRef.current.value}&comment=${commentRef.current.value}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailRef.current.value,
          comment: commentRef.current.value,
        }),
      }
    );
    const res = await response.json();
    console.log(res);
    if (res.status === "success") {
      setBtn("Submitted");
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
      <div className="mb-6">
        <label className="block mb-2 text-lg font-medium text-white">
          Your email
        </label>
        <input
          ref={emailRef}
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 mb-6"
          placeholder="name@flowbite.com"
          required
        />

        <label className="block mb-2 text-lg font-medium text-white">
          Your message
        </label>
        <textarea
          ref={commentRef}
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
          placeholder="Leave a comment..."
        ></textarea>
      </div>

      <button
        type="submit"
        className={`btn ${isDisabled && "disabled"}`}
        // disabled={isDisabled}
      >
        {btn} <SendSharpIcon />
      </button>
    </form>
  );
}
