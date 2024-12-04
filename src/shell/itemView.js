import { useState } from "react";

export function ItemView(props) {
  const [editView, setEditView] = useState(false);
  const [editVal, setEditVal] = useState(props.item);
  function deleteItem() {
    props.deleteItem(props.item);
  }

  function editThisField() {
    setEditView(true);
    //
  }

  const handleEditChange = e => {
    setEditVal(e.target.value);
  };

  function updateThis(val) {
    props.updateThisItems(props.key, val);
    setEditView(false);
  }
  return (
    <>
      <li>
        {editView === false ? (
          <span>{props.item}</span>
        ) : (
          <span>
            {/* <input type="text" value={props.item} /> */}
            <input value={editVal} onChange={handleEditChange}></input>
            <button
              onClick={() => {
                updateThis(editVal);
              }}
            >
              Updatenow
            </button>
          </span>
        )}
        <span>
          <button onClick={editThisField}>editnow</button>
        </span>
        <span>
          <button onClick={deleteItem}>Delete This</button>
        </span>
      </li>
    </>
  );
}
