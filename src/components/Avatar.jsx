import React from "react";

const Avatar = (props) => {
  console.log(props);
  return (
    <div>
      <img
        src={props.src}
        alt={props.alt}
        style={{
          width: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default Avatar;
