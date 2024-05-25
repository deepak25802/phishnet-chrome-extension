import { useEffect, useState } from "react";
import CustomButton from "./components/CustomButton"

export default function App() {
  const [ currentTab, setCurrentTab ] = useState("");
  const [result, setResult ] = useState("");

  const checkWebsiteHandler = () => {
    setResult("ljfahljdf");
    console.log('check website using chrome extension');
  }
  
  const repostWebsiteHandeler = () => {
    console.log('report website using chrome extension');
  }

  useEffect( () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      const tab = tabs[0];
      setCurrentTab(tab.url || "");
    });
  }, []);

  return (
    <div className='text-center min-w-96 max-h-96'>
      <section className='text-white flex flex-col h-screen justify-center mx-4 text-center'>
        <div>
          <div>
            <div className='mt-5'>
              <input type="text" className="p-3 rounded-xl pr-10 text-xs text-white bg-black border-2 border-indigo-950 md:w-2/5 w-full" value={currentTab}/>
            </div>
            <div className=''>
              <div>
                <CustomButton type={'white'} text='Check website' onClick={checkWebsiteHandler}></CustomButton>
                <CustomButton type={'red'} text='Report website' onClick={repostWebsiteHandeler}></CustomButton>
              </div>
            </div>
          </div>
        </div>
        {
          result && <div>{result}</div>
        }
      </section>
    </div>
  )
}