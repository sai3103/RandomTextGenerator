import React from "react";
import $ from "jquery/dist/jquery.min.js"



class Text extends React.Component{

    constructor(props){
        super(props);
    }

    copyText= ()=>{
            document.execCommand('copy');
    }


    render(){
        
            return (
                <div className="col-6 mx-auto mt-5 mb-5">
                <label for="inputPassword" className="col-sm-10 col-form-label font-weight-bold text-success">Select the text manually and click copy to copy text to clipboard.</label>
                <button type="submit" onClick={this.copyText} className="btn btn-primary">Copy</button>
                </div>
            );
        
    }
}

export default Text;