const TextField = ({
  isSelect,
  placeholder,
  options = [],
  icon,
  value,
  onChange,
}) => {
  return (
    <div className="flex items-center bg-white text-black border border-gray-300 md:rounded-md px-4 py-2 shadow-sm w-full">
      {isSelect ? (
        <select
          value={value}
          onChange={onChange}
          className="flex-1 bg-transparent outline-none"
        >
          <option value="">{placeholder || "Select"}</option>
          {options.map((opt, i) => (
            <option key={i} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          value={value}
          onChange={onChange}
          placeholder={placeholder || "Search..."}
          className="flex-1 bg-transparent outline-none placeholder-gray-400"
        />
      )}
      {icon && <span className="text-gray-500 ml-2">{icon}</span>}
    </div>
  );
};

export default TextField;
