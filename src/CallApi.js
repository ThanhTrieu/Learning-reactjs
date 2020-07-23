import React from 'react';
import axios from 'axios';

class CallApi extends React.Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
    this.getDataV2 = this.getDataV2.bind(this);
  }

  /*
  async componentDidMount() {
    await fetch("http://jsonplaceholder.typicode.com/users",{
      method: 'GET',
      mode: 'no-cors',
      cache: 'no-cache',
      headers: {
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Credentials': true,
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Content-Type': 'application/json'
      },
      referrer: 'no-referrer'
    }).then(res => res.json())
    .then((data) => {
      console.log(data)
    })
    .catch(console.log);
  }
  */

  getDataV2 = async () => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/search/movie?query=badman&api_key=cfe422613b250f702980a3bbf9e90716`,{
      headers: {
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Credentials': true,
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
    .then(res => {
      console.log(res.data)
    })
    .catch(error => console.log(error));
  }

  getData = async () => {
    const proxyUrl  = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://api.themoviedb.org/3/search/movie?query=badman&api_key=cfe422613b250f702980a3bbf9e90716'; 
    //'https://suddi.io/public/resume.json'; 
    //'http://jsonplaceholder.typicode.com/users'; 
    //'https://suddi.io/public/resume.json';
    await fetch(proxyUrl + targetUrl ,{
      cache: 'no-cache',
      referrer: 'no-referrer'
    }).then(res =>  res.json()).then((data) => {
      console.log(data);
    });
  }

  render() {
    return(
      <div>
        <button onClick={this.getDataV2}>Get Data</button>
      </div>
    );
  }
}

export default CallApi;