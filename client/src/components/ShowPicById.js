import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class ShowPicById extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
        title: "",
        image_url: ""
    };
  }

  componentDidMount() {
    console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:5000/api/posts/'+this.props.match.params.id)
      .then(res => {
        //console.log("Print-ShowPicById-API-response: res.data");
        
        var data = res.data;
        console.log("data var: " +data);
        this.setState({
          
          title: data.title,
          image_url: data.image_url
        })
        console.log(this.state);
      })
      .catch(err => {
        console.log("Error from ShowPicById");
      })
    

  };

  // onDeleteClick () {
  //   var picId = this.state.id

  //   axios
  //     .delete('http://localhost:5000/pic/'+picId)
  //     .then(res => {
  //       this.props.history.push("/");
  //     })
  //     .catch(err => {
  //       console.log("Error form ShowPicById_deleteClick");
  //     })
  // };


  render() {
      console.log('inside render function');
    //changed
    //const post = this.state.post;
    //console.log("HELLO!"+post);
    console.dir(this.state);
    let PicItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            {/* <th scope="row">1</th> */}
            {/* <td>Title</td> */}
            <td>{this.state.title}</td>
          </tr>
          <tr>
            {/* <th scope="row">2</th> */}
            {/* <td>Image</td> */}
            <td><img src={`${this.state.image_url}`} width="100%" alt="free item" /></td>
          </tr>

        </tbody>
      </table>
    </div>

    return (
      <div className="ShowPicById">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/show-pics" className="btn btn-outline-warning float-left">
                  Show Posts
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              {/* <h1 className="display-4 text-center">Animal's Record</h1>
              <p className="lead text-center">
                  View Animal's Info
              </p> */}
              <hr /> <br />
            </div>
          </div>
          <div>
            { PicItem }
          </div>

          

        </div>
      </div>
    );
  }
}

export default ShowPicById;