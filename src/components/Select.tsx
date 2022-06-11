const Select: React.FC<any> = (props: any) => {
    const id = "un_" + Date.now();
    return (
      <div
        className={`flex relative w-full group justify-center items-center z-1001 ${props.containerClass}`}
      >
         <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>Select</option>
            <option>Select</option>
            <option>Select</option>
        </select>
   
      </div>
    );
  };
  
  export default Select;
  