import MainContainer from "./pages/main/MainContainer";
import DescAndConnect from "./pages/main/components/DescAndConnect";
import TextBubble from "./pages/main/components/TextBubble";

export default function App() {
  return (
    <MainContainer>
      <TextBubble />
      <DescAndConnect />
      <img
        src="/src/assets/logo.png"
        alt="Lee Malka Consmetics Logo"
      />
    </MainContainer>
  );
}
