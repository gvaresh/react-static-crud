// this the React programe for Add edit delete functions of a input
import { useState } from "react";
import { ItemView } from "./itemView";
export function IndexFn() {
  const [val, setVal] = useState([]);
  const [newVal, setNewVal] = useState("");

  const insertList = () => {
    if (newVal && !val.includes(newVal)) {
      setVal([...val, newVal]);
    }
  };

  function updateThisItems(i, x) {
    if (newVal && !val.includes(newVal)) {
      setVal([...val, (val[i] = x)]);
    }
    // setNewVal(x);
  }

  const handleInputChange = e => {
    setNewVal(e.target.value);
  };

  function deleteItem(x) {
    const arr = val.filter(function (obj) {
      return obj !== x;
    });

    setVal([...arr]); // console.log("logged");
  }

  function deletetList() {
    setVal([]);
  }

  return (
    <>
      <p>this index 2 </p>
      <input value={newVal} onChange={handleInputChange}></input>
      <button
        onClick={() => {
          insertList();
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          deletetList();
        }}
      >
        Delete All
      </button>
      <div className="dispaly-section">
        <ul>
          {val.map((x, i) => (
            // <li > {x}</li>
            <ItemView
              key={i}
              item={x}
              deleteItem={deleteItem}
              updateThisItems={updateThisItems}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
