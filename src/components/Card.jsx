import React from "react";
import Avatar from "./Avatar";

const Card = (props) => {
  //   console.log(props.children);
  return (
    <div
      style={{
        width: "300px",
        border: "2px solid red",
      }}
    >
      {props.children}
    </div>
  );
};

export default Card;

// ! Давай разберем этот таск. У нас есть задача создать два компонента: Card.jsx и Avatar.jsx. В Card.jsx мы принимаем объект props, в котором на данный момент ничего нет. В Avatar.jsx мы создаем компонент, который возвращает элемент <img /> и принимает значения src и alt из пропсов.

// Затем мы вызываем Card.jsx в App.js и передаем в него Avatar.jsx внутри. Теперь, если посмотреть в объект props в Card.jsx, мы увидим новый ключ children, который содержит все дочерние элементы, переданные внутри вызова компонента.

// Теперь нам нужно изменить стили для <div> внутри Card.jsx и передать в него children. Это означает, что все, что будет вложено внутри вызова компонента Card.jsx (в данном случае, Avatar.jsx), будет обработано внутри этого div с новыми стилями.

// Итак, задача заключается в том, чтобы настроить стили для <div> в Card.jsx и включить в него все дочерние элементы (children), которые были переданы внутри вызова компонента Card.jsx, чтобы получился желаемый результат: <div style="border: 2px solid grey"><img src="some img"/></div>.
