import React from 'react';
import axios from 'axios';
import { Link, redirect, useParams } from 'react-router-dom';

type Dog = {
  _id: string;
  name: string;
  age: number;
  breed: string;
  color: string;
}

function withParams<T extends React.ComponentType<any>>(Component: T): React.FC<any> {
  return (props: React.ComponentProps<T>) => <Component {...props} params={useParams()} />;
}

class UpdateDog extends React.Component {
  state = {
    dog: null as Dog | null
  }

  componentDidMount() {
    axios.get(`https://dogs.kobernyk.com/api/v1/dogs/${this.props.params.dogId}`)
      .then(res => {
        const dog = res.data;
        this.setState({ dog: dog });
      })
  }

  async onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Array.from(
      document.getElementsByTagName('form')[0].getElementsByTagName('input')
    ).reduce((acc, el) => { 
      acc[el.name] = el.value; 
      return acc;
    }, {} as Record<string, string | number>);
    const dogImageResult = await axios.get(`https://dog.ceo/api/breeds/image/random`);
    data.image = dogImageResult.data.message;
    await axios.patch(`https://dogs.kobernyk.com/api/v1/dogs/${this.props.params.dogId}`, data);
    return redirect('/');
  }

  render() {
    return (
      <>
        <Link to='/'>Back</Link>

        <form onSubmit={this.onSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={this.state.dog?.name} />
          </label>
          <br/>
          <label>
            Age:
            <input type="number" name="age" value={this.state.dog?.age} />
          </label>
          <br/>
          <label>
            Breed:
            <input type="text" name="breed" value={this.state.dog?.breed} />
          </label>
          <br/>
          <label>
            Color:
            <input type="text" name="color" value={this.state.dog?.color} />
          </label>
          <br/>
          <button type="submit">Submit</button>
        </form>
      </>
    )
  }
}

export default withParams(UpdateDog);