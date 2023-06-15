import { FunctionComponent } from "react";

interface DescAndConnectProps {}

const DescAndConnect: FunctionComponent<DescAndConnectProps> = () => {
  return (
    <div className="text-center">
      <p className="text-xl font-medium second">
        שובר זה מעניק לך טיפול לק ג’ל מתנה !
      </p>
      <p className="third">
        לקביעת תור דרך הוואטסאפ{" "}
        <a
          className="underline"
          href="https://api.whatsapp.com/message/5DH5GQGGGTY3K1?autoload=1&app_absent=0"
        >
          לחצי כאן
        </a>{" "}
      </p>
    </div>
  );
};

export default DescAndConnect;
