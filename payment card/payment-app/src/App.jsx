
import { Amazon } from './components/amazon';
import { Apple } from './components/apple';

function App() {
  const amazon = {
    "date": new Date().toLocaleString(),
    "logo": "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
    "case": "Case Study",
    "title": "Amazon Gift",
    "method": "Pay",
    "mode" : "Desktop - Mobile"
  }
  const apple = {
    "date": new Date().toLocaleString(),
    "logo": "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
    "case": "Case Study",
    "title": "Apple Gift",
    "method": "Payment",
    "mode" : "MacOS - Mobile"
  }
  return (
    <div className="App">
      <Amazon  data ={amazon} />
      <Apple data = {apple} />
    </div>
  );
}

export default App;
