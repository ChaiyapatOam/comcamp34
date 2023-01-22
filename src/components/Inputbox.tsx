import { useState } from "react";

const Inputbox = ({
  label,
  name,
  obj,
  setObj,
  placeholder,
  required,
}: {
  label?: string;
  name: string;
  obj?: string;
  setObj?: any;
  placeholder: string;
  required?: boolean;
}) => {
  const [valid, setValid] = useState<boolean>(false);
  const Reg = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!(event.target instanceof HTMLInputElement)) return;
    const value = event.target.value;

    if (Reg.test(value) === true) setValid(true);
    else setValid(false);
    setObj(value);
  };

  return (
    <>
      <div className="flex">
        {label ? <p> {label} </p> : <p>{name}</p>}
        {required ? <p className="text-red-900">*</p> : <p></p>}
      </div>
      <input
        type="text"
        className="border"
        placeholder={placeholder}
        name={name}
        value={obj}
        onChange={handleChange}
        required={required}
      />
      {valid ? (
        <p className="text-red-900">Please enter valid form</p>
      ) : (
        <label></label>
      )}
    </>
  );
};

export default Inputbox;
