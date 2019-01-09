import React from "react";

const Selection= (props) => <div>
<form className="col-6 mx-auto mt-5" onSubmit={props.onClick}>
<select className="custom-select mb-3" name="select">
  <option selected>Select your prefered Tag</option>
  <option value="p">P Tag</option>
  <option value="ul">ul Tag</option>
  <option value="ol">ol Tag</option>
</select>
<div className="form-group row">
<label className="col-sm-6 col-form-label">Include the Tag</label>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="radio" id="inlineRadio1" value="yes"/>
  <label class="form-check-label" for="inlineRadio1">Yes</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="radio" id="inlineRadio2" value="no"/>
  <label class="form-check-label" for="inlineRadio2">No</label>
</div>
</div>
<div className="form-group row">
    <label for="inputPassword" className="col-sm-6 col-form-label">Enter the number of elements you need</label>
    <div className="col-sm-6">
      <input type="text" class="form-control" id="inputPassword" name="np"/>
    </div>
  </div>
  <div className="form-group row">
    <label for="inputPassword" className="col-sm-6 col-form-label">Enter the number of words per paragraph</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" id="inputPassword" name="nw"/>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Generate</button>
</form>
</div>;

export default Selection;