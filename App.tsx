import React from "react"
import { Text } from "react-native"
import Task16 from "./Tasks/Task16"
import Task17 from "./Tasks/Task17"
import Task18 from "./Tasks/Task18"
import Task19 from "./Tasks/Task19"
import Task20 from "./Tasks/Task20"
import Task21 from "./Tasks/Task21"
import Task28 from "./Tasks/Task28"
import Task27 from "./Tasks/Task27"
import Task32 from "./Tasks/Task32"
import Task34 from "./Tasks/Task34"
import Task35 from "./Tasks/Task35"
import Task36 from "./Tasks/Task36"
import Task38 from "./Tasks/Task38"
import Task39 from "./Tasks/Task39"
import { Provider } from "react-redux"
import store from "./Components/store"
const App = () => {
  return(
    <Provider store={store}>
      <Task39/>
    </Provider>
    
  ); 
}
export default App