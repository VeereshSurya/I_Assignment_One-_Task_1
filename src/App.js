import React, { Component } from "react";
import { FetchUsers } from "./api/index";
import TableOne from "./Components/TableOne";
import TableTwo from "./Components/TableTwo";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount = async () => {
    const FetchedData = await FetchUsers();
    this.setState({
      users: FetchedData,
    });
  };
  render() {
    const { users } = this.state;
    return (
      <div>
        <h1 className="text-center m-3 ">Rai Techintro Private Limited </h1>
        {/* <TableOne users={users} />  */}
        <TableTwo users={users} />
      </div>
    );
  }
}

export default App;
