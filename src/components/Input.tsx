const Input: React.FC<any> = (props: any) => {
  const id = "un_" + Date.now();
  return (
    <div
      className={`flex relative w-full group justify-center items-center z-1001 ${props.containerClass}`}
    >
      <input
        id={id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        className={`flex h-30px input-bg-color w-full px-4 py-2 pr-14 placeholder-[#45464b] text-white text-18px flex-none border-nones outline-none rounded-lg ${props.inputClass}`}
        checked={props.checked}
      />
      {props.label && <label htmlFor={id}>{props.label}</label>}
      {props.icon && (
        <span
          className={`flex absolute right-0 input-bg-color p-2 pr-3 ${props.iconClass}`}
        >
          <img className={`w-5 ${props.imageClass}`} src={props.icon} />
        </span>
      )}
    </div>
  );
};

export default Input;
