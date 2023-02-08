import SplitScreen from "./SplitScreen";
import TopSection from "./Components/TopSection";
import LeftSection from "./Components/LeftSection";
import RightSection from "./Components/RightSection";
import FooterSection from "./Components/FooterSection";

function App() {
  return (
    <>
      <SplitScreen>
        <TopSection title="Top Section" />
        <LeftSection title="Left" />
        <RightSection title="Right" />
        <FooterSection title="Footer" />
      </SplitScreen>
    </>
  );
}

export default App;
