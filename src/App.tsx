import './App.css';

import { ItemForm  } from './Views/StoreModuleViews';
import { Item } from './Models/StoreModule';

const item : Item = { code : "", name : "", qoh : 0, price : 0, category : {id : 100, name : "xxx"} };


function App() {
  return (
    <div className="App">
      <ItemForm item={item}/>
    </div>
  );
}

export default App;
