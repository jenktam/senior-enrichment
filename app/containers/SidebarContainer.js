import React, {Component} from 'react';
import Sidebar from '../components/Sidebar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    playlists: state.playlists.list,
  }
};

const mapDispatchToProps = () => {};

const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

// class SidebarContainer extends Component {

//   constructor() {
//     super();
//     this.state = store.getState().playlists;
//   }

//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState().playlists);
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   render() {
//     return (
//       <Sidebar playlists={this.state.list}/>
//     );
//   }

// }

export default SidebarContainer;
