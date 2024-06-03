import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, setCount } from "../redux/slices/CounterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.counterReducer);

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <div className="d-flex align-items-center gap-3 justify-content-center">
        <button onClick={() => dispatch(decrease())} className="btn btn-danger">
          Azalt
        </button>
        <span className="lead fw-bold">{store.count}</span>
        <button
          onClick={() => dispatch(increase())}
          className="btn btn-success"
        >
          Arttır
        </button>
        <input
          type="number"
          className="w-25"
          onChange={(e) => dispatch(setCount(+e.target.value))}
        />
      </div>
    </div>
  );
};

export default Counter;
