'use client';

import { useRef, useState } from 'react';

const CommentForm = () => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const commentRef = useRef<HTMLTextAreaElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const storeDataRef = useRef<HTMLInputElement>(null);

  const handleCommentSubmit = () => {
    setError(false);
    const comment = commentRef.current?.value;
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const storeData = storeDataRef.current?.checked;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = { name, email, body: comment };

    if (storeData) {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('email', email);
    } else {
      window.localStorage.removeItem('name');
      window.localStorage.removeItemItem('email');
    }
  };

  return (
    <div>
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Comment Form</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentRef}
          className="p-4 outline-none w-full rounded-sm"
          placeholder="comment"
          name="comment"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          ref={nameRef}
          className="px-4 outline-none w-full rounded-sm"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          ref={emailRef}
          className="px-4 outline-none w-full rounded-sm"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            type="checkbox"
            name="storeData"
            id="storeData"
            ref={storeDataRef}
          />
          <label htmlFor="storeData" className="text-gray-500 cursor-pointer">
            Save my name and email
          </label>
        </div>
      </div>
      {error && (
        <p className="text-xs text-red-500">All fields are required!</p>
      )}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleCommentSubmit}
          className="transition duration-500 ease hover:bg-blue-600 inline-block bg-pink-600 rounded-full text-lg px-8 py-3 cursor-pointer"
        >
          Post
        </button>
        {showSuccess && (
          <span className="text-xl float-right font-semibold mt-3 text-green">
            Comment submitted!
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentForm;
