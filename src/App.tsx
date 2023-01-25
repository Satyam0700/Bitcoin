import "./App.css";
import logo from "../src/assets/logo.png";
import Card from "./components/Card";

import solan from "../src/assets/Solana.png";
import bit from "../src/assets/Bitcoin.png";
import eth from "../src/assets/Ethereum.png";
import bi from "../src/assets/Binance.png";
import shi from "../src/assets/SHIBA.png";

function App() {
  return (
    <div className="bg-[#14172B] w-[100%] h-[100vh] flex items-center justify-center">
      <div className="flex flex-col">

        <div className="flex gap-4 items-center mb-20">
          <div className="border-[1.5px] p-1 border-[#DC1FFF] rounded-md">
            <img src={logo} alt="logo" />
          </div>
          <h1 className="text-white text-[16px]">Trending Assets</h1>
        </div>

        <div className="flex flex-wrap gap-5">
          <Card price="$60,000" imgUrl={bit} name="Bitcoin (BTC)" rate="$31,812.80" per="+10%" img1={solan} img2={eth} img3={bi}/>
          <Card price="$55,590" imgUrl={solan} name="Solana (SOL)" rate="$32.83" per="+12.32%" img1={bit} img2={eth} img3={bi} />
          <Card price="$40,402" imgUrl={eth} name="Ethereum (ETH)" rate="$1,466.45" per="+11.93%" img1={solan} img2={bit} img3={bi} />
          <Card price="$23,920" imgUrl={bi} name="Binance USD (BUSD)" rate="$1.00" per="+0.26%"  img1={solan} img2={eth} img3={bi} />
          <Card price="$30,000" imgUrl={shi} name="Shiba Inu (SHIB)" rate="$0.00000001948" per="+8.1%" img1={solan} img2={eth} img3={bi} />
        </div>

      </div>
    </div>
  );
}

export default App;
