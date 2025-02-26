'use client';

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}
const ErrorPage = ({ error, reset}: ErrorPageProps) => {
  return (
    <div>
      <div>{error.message}</div>
      <button onClick={() => reset()} className="bg-success p-5 text-white">Reset</button>
    </div>
  )
}

export default ErrorPage
