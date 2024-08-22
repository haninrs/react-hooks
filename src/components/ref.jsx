import { useEffect, useRef, useState } from "react";

export const ComponentRef = () => {
  const nameRef = useRef();
  const passRef = useRef();
  const [show, setShow] = useState(false);

  const onSubmit = () => {
    const data = {
      name: nameRef.current.value,
      password: passRef.current.value,
    };
    console.log(data);
  };

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={nameRef} placeholder="Nama" />
      <input type={show === false ? "password" : "text"} ref={passRef} placeholder="Password" />
      <button onClick={() => setShow(!show)}>{show === false ? "Show" : "Hide"}</button>
      <button onClick={onSubmit}>submit</button>
    </div>
  );
};
