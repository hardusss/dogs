import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function withParams<T extends React.ComponentType<any>>(Component: T): React.FC<any> {
  return (props: React.ComponentProps<T>) => <Component {...props} params={useParams()} />;
}

type Dog = {
  _id: string;
  name: string;
  age: number;
  breed: string;
  color: string;
}

class DogPage extends React.Component {
  state = {
    dog: null as Dog | null
  }
  componentDidMount() {
    
    axios.get(`https://dogs.kobernyk.com/api/v1/dogs/${this.props.params.dogId}`, {headers: {"token": localStorage.getItem("token")}})
      .then(res => {
        const dog = res.data;
        this.setState({ dog: dog });
      })
  }

  render() {
    return (
    <>
      <Link to='/'>Back</Link>
      <div>
        {
          this.state.dog
          ? <div>
              <h1>{this.state.dog.name}</h1>
              <img src={this.state.dog.image} alt={this.state.dog.name} />
              <div>Age: {this.state.dog.age}</div>
              <div>Breed: {this.state.dog.breed}</div>
              <div>Color: {this.state.dog.color}</div>
            </div>
            : <div>Loading...</div>
          }
      </div>
    </>
)
  }
}

export default withParams(DogPage);