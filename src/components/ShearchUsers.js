import React from "react";

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {        
      locationAll: '',
      UnitedStates: '',
      SanFrancisco: '',
      NewYork: '',
      LosAngeles: '',
      SantaBarbara: '',

      genderMale: '',
      genderFemale:'',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div>
          <h3>Location</h3>
          <ul>
        <form>
        <li><input
            name="locationAll"
            type="checkbox"
            checked={this.state.locationAll}
            onChange={this.handleInputChange} />
        <label> All </label></li>
        <li><input
            name="UnitedStates"
            type="checkbox"
            checked={this.state.UnitedStates}
            onChange={this.handleInputChange} />
        <label> United States </label></li>
        <li><input
            name="SanFrancisco"
            type="checkbox"
            checked={this.state.SanFrancisco}
            onChange={this.handleInputChange} />
        <label> San Francisco</label></li>
        <li><input
            name="NewYork"
            type="checkbox"
            checked={this.state.NewYork}
            onChange={this.handleInputChange} />
        <label> New York</label></li>
        <li><input
            name="LosAngeles"
            type="checkbox"
            checked={this.state.LosAngeles}
            onChange={this.handleInputChange} />
        <label>Los Angeles</label></li>
        <li><input
            name="SantaBarbara"
            type="checkbox"
            checked={this.state.SantaBarbara}
            onChange={this.handleInputChange} />
        <label> Santa Barbara</label></li>
        <h3>Gender</h3>
        <li><input
            name="genderMale"
            type="checkbox"
            checked={this.state.genderMale}
            onChange={this.handleInputChange} />
        <label> Male</label></li>
        <li><input
            name="genderFemale"
            type="checkbox"
            checked={this.state.genderMale}
            onChange={this.handleInputChange} />
        <label> Female</label></li>
        </form>
        </ul>
      </div>
    );
  }
}

export default Filters;