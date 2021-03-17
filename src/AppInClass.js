import React from "react";
import logo from "./logo.svg";
import "./App.css";

// ==================
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// =================

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // это реактивный объект. Все элементы в нем - реактивные. При их изменении интерфейс будет их принимать и обновлять без дополнительных действий
      arrTask: [
        {
          id: 0,
          text: "Task 1",
        },
        {
          id: 1,
          text: "Task 2",
        },
      ],
      newTask: "",
    };
  }
  // =====================
  // handleClick = () => {
  //   console.log("tut");
  //   // this.state.index = ++this.state.index;
  //   this.setState({
  //     index: ++this.state.index,
  //   });
  // };
  // =====================

  handleChange = (event) => {
    this.setState({
      newTask: event.target.value, // теперь input заполняется
    }); // функция handleChange - берет клавишу, которая нажата и переносит ее в value input. Т.е. записываем input
  };

  handleSubmit = () => {
    const newTask = {
      id: new Date().getMilliseconds + this.state.arrTask.length,
      text: this.state.newTask,
    };
    this.setState({
      arrTask: [...this.state.arrTask, newTask], // это state. Мы клонируем arrTask все элементы и добавляем новое значение
      newTask: "", // обнуление поля input
    });
  };

  render() {
    // render - обязателен - это по сути отрисовка того, что в нем указано
    // ====================
    // return (
    //   <div>
    //     Index <strong>{this.state.index}</strong>
    //     <button onClick={this.handleClick}>+</button>
    //   </div>
    // ); // возвращаться должен один элемент!!
    // ====================

    return (
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            this.handleSubmit();
          }}
        >
          <input onChange={this.handleChange} value={this.state.newTask} />
          <button>Add Task</button>
        </form>
        {this.state.arrTask.map((task) => (
          <p key={task.id}>{task.text}</p>
        ))}
      </div>
    ); // JSX - это отдельный синтаксис
  }
}

export default App;
