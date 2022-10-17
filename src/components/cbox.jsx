export const CBox = ({ className, children }) => {
  return (
    <div className={`border border-red-100 ${className}`}>
      {children && children}
      {!children && "😂"}
    </div>
  );
};
