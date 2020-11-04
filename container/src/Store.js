import { createStore} from "redux";
import rootReducer from "./Reducer/Reducer.Combine";

const store = createStore(rootReducer);

export default store;