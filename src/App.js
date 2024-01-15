import React from "react";
import Task1 from "./components/Task1";
import Boxes from "./components/Boxes";
import Card from "./components/Card";
import Avatar from "./components/Avatar";
import Counter from "./components/Counter";

const App = () => {
  let stylesArr = [
    { width: "300px", height: "150px", backgroundColor: "red" },
    { width: "200px", height: "150px", backgroundColor: "blue" },
    { width: "150px", height: "150px", backgroundColor: "green" },
  ];
  return (
    <div>
      <Task1 />
      <Boxes Array={stylesArr} />
      <Card>
        <Avatar
          src={
            "https://img.freepik.com/premium-vector/prism-logo-design-vector-template_14313-170.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698624000&semt=ais"
          }
          alt={"#"}
        />
      </Card>
      <Counter />
    </div>
  );
};

export default App;
