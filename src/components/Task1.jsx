// ! Task 1 - Состояние для текста и последующее изменение его в инпуте
// useState и его использование
// - Создайте состояние для текста, передайте любое значение
// - Отобразите его на странице.
// - Затем создайте инпут, привяжите состояние к нему через атрибут value
// - После изменения инпута, значение на сайте тоже должно изменятся
// Текст на сайте должен изменятся, в зависимости от инпута
import React, { useState } from "react";

const Task1 = () => {
  const [task, setTask] = useState("");
  const changeInput = (e) => {
    setTask(e.target.value);
  };
  return (
    <div>
      <p>{task}</p>
      <input type="text" onChange={changeInput} />
    </div>
  );
};

export default Task1;
