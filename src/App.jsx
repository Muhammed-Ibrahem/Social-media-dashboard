import Header from "./components/Header";
import BrandsSection from "./components/BrandsSection";
import StatsSection from "./components/StatsSection";
function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto">
        <BrandsSection />
        <h2 className="my-8 text-2xl font-bold text-siteTheme-grayishBlueTextWhite transition-colors dark:text-siteTheme-whiteTextDark">
          Overview - Today
        </h2>
        <StatsSection />
      </main>
    </>
  );
}

export default App;
