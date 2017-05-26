import React from 'react';

const Sidebar = (props) => {

  const deselectCampus = props.deselectCampus;
  const showAllStudents = props.showAllStudents;

  return (
    <sidebar>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROm6IzSZdPo2GoKNPMoC7RjBXhe7nzXM49C8lpOke6H7655uk0" className="logo" />
      <section>
        <h4>Sidebar</h4>
        <h4 className="menu-item active">
          <a href="#" onClick={deselectCampus}>Campuses</a>
          <br/>
          <a href="#" onClick={showAllStudents}>Students</a>
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;

// <a href="#" onClick={deselectStudent}>Students</a>
