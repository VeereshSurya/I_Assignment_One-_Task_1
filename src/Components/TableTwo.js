import React, { useState } from "react";

const TableTwo = ({ users }) => {
  const [userIndex, setUserIndex] = useState(0);
  //  Handling Click events
  const HandleClick = () => {
    userIndex > 8
      ? setUserIndex(0)
      : setUserIndex((userIndex) => userIndex + 1);
  };

  return (
    <div>
      {users.length ? (
        // Table container
        <div className="table-container">
          <button
            type="button"
            class="btn btn-success text-center"
            onClick={HandleClick}
          >
            NEXT
          </button>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Company</th>
                <th>Website</th>
                <th>Gmail</th>
                <th>City</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{users[userIndex].id}</td>
                <td>{users[userIndex].name}</td>
                <td>{users[userIndex].company.name}</td>
                <td>{users[userIndex].website}</td>
                <td>{users[userIndex].email}</td>
                <td>{users[userIndex].address.city}</td>
                <td>{users[userIndex].phone}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <h2 className="text-center"> Loading... </h2>
        </div>
      )}
    </div>
  );
};

export default TableTwo;
