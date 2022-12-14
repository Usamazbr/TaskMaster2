import { useState, useEffect } from "react";

const apiUrl = `http://localhost:5003/api`;

const HierS = () => {
  const mems = JSON.parse(localStorage.getItem("users"));
  const self = JSON.parse(localStorage.getItem("user"));

  console.log(mems);
  console.log(self);
  const [done, setDone] = useState(false);

  const selecter = async (e) => {
    const val = e.target.value;
    const ob = mems.data.filter((f) => f.email === val);

    const response = await fetch(apiUrl + "/user/hier/" + ob[0]._id, {
      method: "PATCH",
      body: JSON.stringify(self),
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();
    setDone(true);
    var dropDown = document.getElementById("members");
    dropDown.selectedIndex = 0;
  };

  return (
    <div>
      {!done && (
        <select id="members" name="mems" onChange={selecter}>
          <option>select</option>
          <optgroup label="Admins">
            {mems.data.map((member, index) => (
              <option key={index}>{member.email}</option>
            ))}
          </optgroup>
        </select>
      )}
    </div>
  );
};

export default HierS;
