import React from "react";
import "./App.css";
import { Title } from "./Title";
class App extends React.PureComponent {
  state = {
    title: "Sudharsan - Architect",
    body: "He is the architect and senior developer",
    list: [],
  };

  componentDidMount() {
    this.apiCall();
  }

  render() {
    return (
      <div>
        {this.state.list.map((item, i) => (
          <Title
            key={i}
            index={i}
            title={item.title}
            body={item.body}
            updateTitleBtnAction={() => this.updateTitleBtnAction(i)}
          />
        ))}
      </div>
    );
  }

  updateTitleBtnAction = (index) => {
    console.log("index", index);
    let name = 'Sudharsan Sir';
  };

  apiCall = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((resp) => this.setState({ list: resp }))
      .catch((err) => console.err(err));
  };
}

export default App;
