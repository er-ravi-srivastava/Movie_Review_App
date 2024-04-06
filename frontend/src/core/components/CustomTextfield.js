const CustomTextfield = ({ placeholder, onChange, type }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border border-blue-600 rounded-md w-full px-2 py-3"
      onChange={onChange}
    />
  );
};

export default CustomTextfield;
