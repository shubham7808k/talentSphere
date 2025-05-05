// filepath: /Users/adarshyadav/Documents/talentSphere/frontend/src/components/ui/textarea.jsx
export const Textarea = ({ className, ...props }) => {
  return (
    <textarea
      className={`px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${className}`}
      {...props}
    />
  );
};