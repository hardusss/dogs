import axios from 'axios';
import { Link } from 'react-router-dom';
import LabelWithInput from './input';
import { useState } from 'react';



function CreateDog() {
  const [dogName, setDogName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [color, setColor] = useState("");
  const [result, setResult] = useState("");


  function handleChange(e: React.FormEvent<HTMLFormElement>) {
    if (e.target.id == "name"){
        setDogName(e.target.value)
    }
    if (e.target.id == "breed"){
        setBreed(e.target.value)
    }
    if (e.target.id == "age"){
      setAge(e.target.value)
    }
    if (e.target.id == "color"){
      setColor(e.target.value)
    }
}

async function Create() {
  const dogData = {
    name: dogName,
    breed: breed,
    age: age,
    color: color,
    image: "https://www.istockphoto.com/photo/",
  };

  try {
    console.log(color)
    const response = await fetch("https://dogs.kobernyk.com/api/v1/dogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`, 
      },
      body: JSON.stringify(dogData),
    });

    const data = await response.json(); 

    if (response.ok) {
      console.log(data);
      setResult("Dog created successfully...");
    } else {
      console.error("Error creating dog:", data);
      setResult("Error creating dog...");
    }
  } catch (error) {
    console.error("Error:", error);
    setResult("Something went wrong...");
  }
}


    
  return (
    <>
      <Link to='/'>Back</Link>
      <LabelWithInput id="name" labelText="Name" inputType="text" onChange={handleChange} />
      <LabelWithInput id="breed" labelText="Breed" inputType="text" onChange={handleChange} />
      <LabelWithInput id="age" labelText="Age" inputType="number" onChange={handleChange} />
      <LabelWithInput id="color" labelText="Color" inputType="color" onChange={handleChange} />
      <button type="button" onClick={Create}>Create</button>
      <span>{result}</span>
    </>
  );
  }


export default CreateDog;