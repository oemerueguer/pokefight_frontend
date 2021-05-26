import {Link} from 'react-router-dom'

export default function Instruction() {
    return (
      <div className="wrapper">
        <p>Hello World</p>
        <Link to="/home">Go home</Link>
      </div>
    );
  }