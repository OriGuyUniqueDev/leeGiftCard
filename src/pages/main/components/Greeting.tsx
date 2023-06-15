import { FunctionComponent } from "react";

interface GreetingProps {}

const Greeting: FunctionComponent<GreetingProps> = () => {
  return (
    <div className="fourth text-center text-2xl font-medium">
      <h1>יאנה,</h1>
      <p>
        יום הולדת שמח <div className="animate-bounce inline-block">❤️</div>
      </p>
      <p>אוהבים נטלי, רפאל והילדים</p>
    </div>
  );
};

export default Greeting;
