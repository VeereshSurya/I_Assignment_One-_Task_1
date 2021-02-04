import React, { Component } from "react";
import { FetchUsers } from "./api/index";
import TableOne from "./Components/TableOne";
import TableTwo from "./Components/TableTwo";
import "./App.css";

class App extends Component {
  // storing users data
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  // FetchUsers function will called here
  componentDidMount = async () => {
    const FetchedData = await FetchUsers();
    this.setState({
      users: FetchedData,
    });
  };

  render() {
    // Destructuring of users data
    const { users } = this.state;
    return (
      <div>
        <h1 className="text-center m-3 ">Rai Techintro Private Limited </h1>

        <TableTwo users={users} />

        {/* see the difference between table one and table two */}

        {/* <TableOne users={users} />  */}
      </div>
    );
  }
}

export default App;
