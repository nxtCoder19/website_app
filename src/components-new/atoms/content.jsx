export const Content = ({ title, desc, color }) => {
  return (
    <div className="md:flex justify-center">
      <div className="text-center md:w-1/2">
        <span className="text-5xl font-bold">{title}</span>
        <br />
        <div className={`mt-6 text-${color}`}>
          <span className="text-xl">{desc}</span>
        </div>
      </div>
    </div>
  );
};
