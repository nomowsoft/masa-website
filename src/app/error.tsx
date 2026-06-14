'use client';

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}
const ErrorPage = ({ error, reset}: ErrorPageProps) => {
  // Log the error for debugging but don't expose details to the user
  console.error("Application error:", error);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-success text-4xl font-bold mb-4">حدث خطأ غير متوقع</h1>
      <p className="text-gray-600 text-xl mb-8">
        نعتذر عن هذا الخلل. يرجى المحاولة مرة أخرى.
      </p>
      <button
        onClick={() => reset()}
        className="bg-success text-white px-8 py-3 rounded-lg text-lg hover:opacity-90 transition-opacity"
      >
        إعادة المحاولة
      </button>
    </div>
  )
}

export default ErrorPage
