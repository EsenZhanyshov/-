import React from "react";

const Boxes = (props) => {
  return (
    <div>
      {props.Array.map((elem, index) => (
        <div
          key={index}
          style={{
            width: elem.width,
            height: elem.height,
            backgroundColor: elem.backgroundColor,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Boxes;
// ! Task 2 - Компонент который рисуется в зависимости от массива со стилями
// props
// - В App.js создайте массив с обьектами стилей:
// let stylesArr = [{width: "300px, height: "150px", backgroundColor: "red"} и т.д]
// - Создайте папку components, и в ней новый компонент Boxes.jsx
// - Передаем наш массив stylesArr пропсами в компонент Boxes.jsx
// - В Boxes.jsx необходимо перебрать массив, и нарисовать на странице квадраты из пропсов
// В результате должны получится   различные квадраты которые рисуются в зависимости от обьектов в stylesArr
