import { ResizableBox, ResizableBoxProps } from "react-resizable";
import { useEffect, useState } from "react";
import "./resizable.css";

interface ResizableProps {
  direction: "horizontal" | "vertical";
  children?: React.ReactNode;
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  let resizableProps: ResizableBoxProps;
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [width, setWidth] = useState(window.innerWidth * 0.75);

  useEffect(() => {
    let timer: any;
    const listener = () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        setInnerHeight(window.innerHeight);
        setInnerWidth(window.innerWidth);
        if (window.innerWidth * 0.75 < width) {
          setWidth(window.innerWidth * 0.75);
        }
      }, 100);
    };
    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, [width]);

  if (direction === "horizontal") {
    resizableProps = {
      className: "resize-horizontal",
      minConstraints: [innerWidth * 0.2, Infinity],
      maxConstraints: [innerWidth * 0.75, Infinity],
      height: Infinity,
      width: width,
      resizeHandles: ["e"],
      onResizeStop: (event, data) => {
        setWidth(data.size.width);
      },
    };
  } else {
    resizableProps = {
      minConstraints: [Infinity, 24],
      maxConstraints: [Infinity, innerHeight * 0.9],
      height: 300,
      width: Infinity,
      resizeHandles: ["s"],
    };
  }

  return <ResizableBox {...resizableProps}>{children}</ResizableBox>;
};

export default Resizable;
// import "./resizable.css";
// import { ResizableBox } from "react-resizable";
// import { useEffect, useState } from "react";

// interface ResizableProps {
//   direction: "horizontal" | "vertical";
//   children?: React.ReactNode;
// }

// const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
//   const getWindowDimensions = () => {
//     const { innerWidth: width, innerHeight: height } = window;
//     return {
//       width,
//       height,
//     };
//   };

//   useEffect(() => {
//     const onResize = () => {
//       setWindowDimensions(getWindowDimensions());
//     };
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);
//   const [windowDimensions, setWindowDimensions] = useState(
//     getWindowDimensions()
//   );

//   return (
//     <ResizableBox
//       minConstraints={[Infinity, windowDimensions.height * 0.1]}
//       maxConstraints={[Infinity, windowDimensions.height * 0.9]}
//       height={windowDimensions.height * 0.5}
//       width={Infinity}
//       resizeHandles={["s"]}
//       handleSize={[10, 10]}
//     >
//       {children}
//     </ResizableBox>
//   );
// };
// export default Resizable;
