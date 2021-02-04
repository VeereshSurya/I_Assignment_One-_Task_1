import React, { useState } from "react";

const TableOne = ({ users }) => {
  // Hooks to store index values
  const [userIndex, setUserIndex] = useState(2);

  // Button click handling
  const HandleClick = () => {
    setUserIndex(userIndex + 1);
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
              {users.map((elem) =>
                elem.id < userIndex ? (
                  <tr>
                    <td>{elem.id}</td>
                    <td>{elem.name}</td>
                    <td>{elem.company.name}</td>
                    <td>{elem.website}</td>
                    <td>{elem.email}</td>
                    <td>{elem.address.city}</td>
                    <td>{elem.phone}</td>
                  </tr>
                ) : null
              )}
            </tbody>
          </table>
        </div>
      ) : (
        // Waits for the data
        <div>
          <h2 className="text-center"> Loading... </h2>
        </div>
      )}
    </div>
  );
};

export default TableOne;
