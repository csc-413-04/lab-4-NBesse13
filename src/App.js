import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { doTest } from './redux/actions';
import Header from './Header';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      color: 'black',
      banner: 'hello',
      isOpen: false,
    };
    this.buttonhandler = this.buttonhandler.bind(this);
    this.textHandler = this.textHandler.bind(this);
    // this.buttonHandler2 = this.buttonHandler2.bind(this);
  }
  buttonhandler(){
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  // buttonHandler2(){
  //   this.setState({
  //     isOpen: !this.state.isOpen,
  //   });
  // }

  textHandler(e){
    this.setState({
      banner: e.target.value,
    })
  }

  render() {
    let myVariable = <h2>Nick</h2>
    let myBanner;
    let image;
    if (this.state.isOpen){
      image = <img src={logo} className="App-logo" alt="logo"/> 
    }
    else{
      image = <img style={{visibility: "hidden"}} src={logo} className="App-logo" alt="logo" />
    }
    // if(this.props.doTest){
    //   myVariable = <h2>Reducer Works</h2>
    // }
    return (
      <div className="App">
        <header className="App-header">
          {image}
          <Header/>
          {this.props.test}
          <input value={this.state.banner} onChange={this.textHandler}/>
          <button onClick={this.buttonhandler} >Click Me</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    test: state.testReducer.test,
  };
};

const mapDispatchToProps = { doTest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
