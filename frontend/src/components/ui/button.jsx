// filepath: /Users/adarshyadav/Documents/talentSphere/frontend/src/components/ui/button.jsx
export const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};