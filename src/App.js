import { Component } from "react";

import CardList from "./components/card-list/card-list.component";
// import Card from "./components/card/card.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

// Functional component
// const App = () => {
//   return (
//     <div className="App">
//       <h1 className="title">Monsters API</h1>
//       {/* this is moved to the card-list component */}
//       {/* {filteredMonsters.map((monster) => {
//           return (
//             <div key={monster.id}>
//               <h1 key={monster.id}>{monster.name}</h1>
//             </div>
//           );
//         })} */}
//       <SearchBox
//         className="monsters-search-cox"
//         onChangeHandler={onSearchChange}
//         placeholder="search monsters"
//       />
//       <CardList monsters={filteredMonsters} />

//       {/* <CardList monsters={"I am monsters"} anything={["a", "b", "c"]} /> */}
//     </div>
//   );
// };

// Class component
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
    // console.log("constructor");
  }
  componentDidMount() {
    // fetch API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return {
            monsters: users,
          };
        })
      );
  }
  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="title">Monsters API</h1>
        {/* this is moved to the card-list component */}
        {/* {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1 key={monster.id}>{monster.name}</h1>
            </div>
          );
        })} */}
        <SearchBox
          className="monsters-search-cox"
          onChangeHandler={onSearchChange}
          placeholder="search monsters"
        />
        <CardList monsters={filteredMonsters} />

        {/* <CardList monsters={"I am monsters"} anything={["a", "b", "c"]} /> */}
      </div>
    );
  }
}

export default App;
