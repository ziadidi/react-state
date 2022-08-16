// import React from "react"
// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       answer: "Yes"
//     }
//   }
//     render () {
//         return (
//             <div>
//                 <h1>Is state important to know? {this.state.answer}</h1>
//             </div>
//         )
//     }
// }

// export default App

// import React from "react";

//  class App extends React.Component {
//      constructor() {
//          super()
//      this.state = {
//        name: "Diane",
//        age: 19
//      }
//    }

//    render() {
//      return (
//        <div>
//          <h1>{this.state.name},</h1>
//          <h3>Age: {this.state.age} years old</h3>
//        </div>
//      )
//    }
//  }

//  export default App

import React from "react";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
  }

  render() {
    let wordDisplay
    if (this.state.isLoggedIn) {
      wordDisplay = "in"
    } else {
      wordDisplay = "out"
    }
    return (
      <div>
      <h1>You are currently logged {wordDisplay}</h1>
    </div>
  )
}
}

export default App