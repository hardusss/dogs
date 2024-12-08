import { useEffect, useState } from "react"

const ListDogs = () => {
    const [dogsData, setDogsData] = useState([]);

    useEffect(() => {
        fetch("https://dogs.kobernyk.com/api/v1/dogs", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        })
        .then(response => response.json())
        .then(data => {
            const dogs = data.map(dog => (
                <div className="container" style={{"backgroundColor": "black", padding: '10px', borderRadius: "10px", boxShadow: "0 0 10px black", color: "white"}}>
                     <img src={dog.image} style={{width: "200px", height: "200px"}}></img>   
                     <div>{dog.name}</div>
                     <span>{dog.age}</span>
                     <span style={{marginLeft: "10px"}}>{dog.breed}</span>
                </div>
            ))
            setDogsData(dogs)
        })
    }, [])
    return <>
            <div style={{display: "flex", "gap": "10px"}}>
                {dogsData}
            </div>
        </>
}

export default ListDogs;