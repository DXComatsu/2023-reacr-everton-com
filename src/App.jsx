import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [memberText, setMemberText] = useState("");
  const [memberEverton, setMemberEverton] = useState([]);
  const [startingEverton, setStartingEverton] = useState([]);

  const onChangeMemberText = (event) => setMemberText(event.target.value);

  const onClickAdd = () => {
    if (memberText === "") return;
    const newMember = [...memberEverton, memberText];
    setMemberEverton(newMember);
    setMemberText("");
    //alert(memberText);
  };

  const onClickDelete = (index) => {
    const newMember = [...memberEverton];
    newMember.splice(index, 1);
    setMemberEverton(newMember);
    //alert(index);
  };

  const onClickSelect = (index) => {
    const newStarting = [...startingEverton, memberEverton[index]];
    setStartingEverton(newStarting);
    const newMember = [...memberEverton];
    newMember.splice(index, 1);
    setMemberEverton(newMember);
    //alert(index);
  };

  const onClickSub = (index) => {
    const newMember = [...memberEverton, startingEverton[index]];
    setMemberEverton(newMember);
    const newStarting = [...startingEverton];
    newStarting.splice(index, 1);
    setStartingEverton(newStarting);
    //alert(index);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="memeber name"
          value={memberText}
          onChange={onChangeMemberText}
        />
        <button onClick={onClickAdd}>add</button>
      </div>
      <div className="member-area">
        <p className="title">EVETRON member</p>
        <ul>
          {memberEverton.map((member, index) => {
            return (
              <div key="member" className="list-row">
                <li>{member}</li>
                <button onClick={() => onClickSelect(index)}>select</button>
                <button onClick={() => onClickDelete(index)}>delete</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="starting-area">
        <p className="title">Starting member</p>
        <ul>
          {startingEverton.map((member, index) => {
            return (
              <div key="member" className="list-row">
                <li>{member}</li>
                <button onClick={() => onClickSub(index)}>sub</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
