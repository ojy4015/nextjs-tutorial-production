'use client';
import { useFormStatus } from 'react-dom';

export const SubmitBtn = ({ text }) => {
  //useFormStatus: hook that provides the status info of the last submission
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-primary join-item"
      disabled={pending}
    >
      {pending ? 'Please wait ...' : text}
    </button>
  );
};
