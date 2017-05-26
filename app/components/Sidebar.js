import React from 'react';
import { Link } from 'react-router';

const Sidebar = (props) => {

  const deselectCampus = props.deselectCampus;
  const showAllStudents = props.showAllStudents;

  return (
    <sidebar>
      <Link to={`/`}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROm6IzSZdPo2GoKNPMoC7RjBXhe7nzXM49C8lpOke6H7655uk0" className="logo" />
      </Link>
      <section>
        <h4>Sidebar</h4>
        <h4 className="menu-item active">
          <Link to={`/campuses`}>
            Campuses
          </Link>
          <br/>
          <Link to={`/students`}>
            Students
          </Link>
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;

// <a href="#" onClick={deselectStudent}>Students</a>
