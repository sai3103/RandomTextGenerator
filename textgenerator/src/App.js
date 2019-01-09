import React, { Component } from 'react';
import './App.css';
import Title from "./components/Title";
import Selection from "./components/Selection";
import Text from "./components/Text";
import $ from "jquery/dist/jquery.min.js"
// http://www.randomtext.me/api/h1/15
let select="",radio="";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      text: "",
      chk: false
    };
}
  

  getText= async (e) => {
    e.preventDefault();
    const n_par=e.target.elements.np.value;
    const n_wor=e.target.elements.nw.value;
    select=e.target.elements.select.value;
    radio=e.target.elements.radio.value;
    
    if(n_par=="" || n_wor=="" || select=="" || radio==""){
      document.getElementById('error').innerHTML="Please fill all the fileds";
      document.getElementById('txt').innerHTML="";
      this.setState({
        chk: false
      });
    }
    else{
      document.getElementById('error').innerHTML="";
    let apiCall=await fetch(`http://www.randomtext.me/api/${select}-${n_par}/${n_wor}`);
    const data=await apiCall.json();
    // const txt=<div>{data.text_out}</div>
    this.setState({
      text: data.text_out,
      chk: true
    });
    }
    // console.log(this.state.text);

    if(radio=="no"){
      document.getElementById('txt').innerHTML=this.state.text;
    }
    
    
  }



  render() {

    

    return (
      <div>
       <Title/>
       <Selection onClick={this.getText}/>
        <div className="col-6 mx-auto mt-5" id="txt">
                {radio!="no" && this.state.text}
        </div>
        <h1 id="error" className="col-6 mx-auto mt-5 text-danger text-center"></h1>
        <div id="footer"></div>
        {this.state.chk && <Text/>}
       
      </div>
    );
  }

 
}

export default App;
