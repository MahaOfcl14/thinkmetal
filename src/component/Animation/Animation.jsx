import React from "react";

const Animation = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 200"
        width="800"
        height="200"
      >
        {/* Central Icon */}
        <circle cx="400" cy="100" r="20" fill="#FF5722" />
        <rect
          x="388"
          y="88"
          width="24"
          height="24"
          fill="#fff"
          transform="rotate(45, 400, 100)"
        />

        {/* Lines and Icons */}
        {[
          { x1: 400, y1: 100, x2: 100, y2: 40, icon: "red" },
          { x1: 400, y1: 100, x2: 100, y2: 160, icon: "purple" },
          { x1: 400, y1: 100, x2: 700, y2: 40, icon: "blue" },
          { x1: 400, y1: 100, x2: 700, y2: 160, icon: "green" },
        ].map((line, index) => (
          <React.Fragment key={index}>
            {/* Line Animation */}
            <line
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="#FF5722"
              strokeWidth="2"
              strokeDasharray="5,5"
              strokeDashoffset="0"
              style={{ animation: "dash 2s infinite" }}
            />
            {/* Icon at the end */}
            <circle cx={line.x2} cy={line.y2} r="15" fill={line.icon} />
          </React.Fragment>
        ))}
      </svg>
      <style>
        {`
          @keyframes dash {
            from {
              stroke-dashoffset: 20;
            }
            to {
              stroke-dashoffset: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Animation;
