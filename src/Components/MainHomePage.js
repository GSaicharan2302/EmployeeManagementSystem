import React from 'react'
import { Link } from 'react-router-dom';

function MainHomePage() {
  return (
    <div className="MainHome">
      <br></br>
      <Link ><button>Employee</button></Link>
      <br></br><br></br>
      <Link><button>Manager</button></Link>
      <br></br><br></br>
      <Link><button>Admin</button></Link>
    </div>
  )
}
export default MainHomePage;
