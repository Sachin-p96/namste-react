import React from "react";

class UserClass extends React.Component {
    constructor (props) {
        super(props);      
    }
    componentDidMount () {
    }
  render() {
    const {name} = this.props
    return (
      <div className="user-card">
        <div>
          <h2>name : {name}</h2>
          <h2>Location : Bengaluru</h2>
          <h2>Linkedin :sachin.p</h2>
          <h2>Designation : Lead Frontend Engineer</h2>
        </div>
      </div>
    );
  }
}

export default UserClass;
