import { FunctionComponent } from "react";

interface GreetingProps {}

const Greeting: FunctionComponent<GreetingProps> = () => {
  return (
    <div className="text-center text-2xl font-medium">
      <h1>יאנה,</h1>
      <p>יום הולדת שמח ❤️</p>
      <p>אוהבים נטלי, רפאל והילדים</p>
    </div>
  );
};

export default Greeting;
