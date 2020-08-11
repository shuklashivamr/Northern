import React, { Component } from "react";
import { AppBar } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Final from "./Final";
import LinearProgress from "@material-ui/core/LinearProgress";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      UserInput: "",
      selection: "",
      loading: false,
      finalComponent: false,
    };
  }

  fetchData = () => {
    this.setState({ loading: true });

    //Faking API call here
  setTimeout(() => {
      this.setState({ loading: false, finalComponent: true });
    }, 2000);
  };

  validate = () => {
    let emailError = "";
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!this.state.UserInput.match(pattern)) {
      emailError = "Please Enter valid Email";
      this.setState({ emailError });
      return false;
    }
    if (this.state.UserInput.match(pattern)) {
      emailError = "";
      this.setState({ emailError });
      return true;
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const isValid = this.validate();
    if (isValid) {
      //console.log(this.state);
      // clear form
      this.fetchData();
      this.setState({
        [e.target.name]: e.target.value,
      });
      console.log(this.state.UserInput + " " + this.state.selection);
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { loading, UserInput, emailError, selection } = this.state;
    if (this.state.finalComponent === false) {
      return (
        <div>
          <p className="App-p">
            Prepare for your career for Project Management, Web Development,
            Graphic design, or Digital Marketing Internship at Northern.
          </p>
          <form onSubmit={this.handleSubmit}>
            <React.Fragment>
              <AppBar />
              <FormControl fullWidth variant="outlined">
                <div
                  style={{
                    fontSize: "12px",
                    fontFamily: "'Merriweather',Regular",
                    color: "#D02035",
                    marginTop: 3,
                    textAlign: "right",
                  }}
                >
                  {emailError}
                </div>
                <TextField
                  id="outlined-textarea"
                  label="Your Email *"
                  multiline
                  variant="outlined"
                  name="UserInput"
                  backgroundColor="red"
                  onChange={this.handleChange}
                  value={UserInput}
                />
                <br />
                <FormControl variant="outlined">
                  <InputLabel id="demo-simple-select-outlined-label">
                    Your Interest
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    name="selection"
                    onChange={this.handleChange}
                    value={selection}
                    label="Your Interest"
                  >
                    {/* <MenuItem value="">
                    <em>None</em>
                  </MenuItem> */}
                    <MenuItem value="Development">Development</MenuItem>
                    <MenuItem value="Desiging">Designing</MenuItem>
                    <MenuItem value="Marketing">Marketing</MenuItem>
                  </Select>
                </FormControl>
                <br />
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  disabled={loading}
                >
                  {/* {loading && (
                    // <i
                    //   className="fa fa-refresh fa-spin"

                    //   style={{ marginRight: "5px", color: "red" }}
                    // />
                    <CircularProgress variant="static" />
                  )} */}
                  {loading && (
                    <span>
                      Submitting ...
                      <LinearProgress />
                    </span>
                  )}
                  {!loading && <span>SignUp Now ⯮</span>}
                </Button>
                <br />
              </FormControl>
            </React.Fragment>
          </form>
        </div>
      );
    } else if (this.state.finalComponent === true) {
      return <Final />;
    }
  }
}

export default Form;
