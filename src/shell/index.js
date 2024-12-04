import { Child1 } from "./child";
// import { Parent } from "./parent";
// import Btn from "./events";
export const Index = props => {
  //   const isGoal = props.isGoal;
  const cars = [
    "Lexus",
    "Honda",
    "Toyota",
    "Accura",
    "BMW",
    "RR",
    "RRLC",
    "LMBRGN",
  ];
  return (
    <>
      <p> its new start with RJS {5 + 5}</p>
      {/* <Parent> </Parent>
      {isGoal ? <Child1 /> : <Child2 />} */}
      <ul>
        {cars.map((car, i) => (
          <Child1 key={i} brand={car} />
        ))}
      </ul>
    </>
  );
};
