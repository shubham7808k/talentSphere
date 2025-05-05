// filepath: /Users/adarshyadav/Documents/talentSphere/frontend/src/components/ui/input.jsx
export const Input = ({ className, ...props }) => {
  return (
    <input
      className={`px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${className}`}
      {...props}
    />
  );
};