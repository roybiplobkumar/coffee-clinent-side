import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Showcoffe = () => {
    const coffeedatas=useLoaderData()
    console.log(coffeedatas)

    const [coffee, setCoffee]=useState(coffeedatas)

    const handleDelete=(id)=>{
        console.log(id)

        fetch(`http://localhost:5000/deletecoffee/${id}`, {
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data)
            const find=coffee.filter(f=>f._id!==id)
            setCoffee(find)


        })
    }
    return (
        <div>
            <h1>this is show coffee page</h1>

            {coffee.map(coffeedata=> <div key={coffeedata._id} className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={coffeedata.photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{coffeedata.name}</h2>
    <p>{coffeedata.description}</p>
    <div className="card-actions justify-center">
      <Link to={`/update/${coffeedata._id}`}><button className="btn btn-primary">Update Coffee</button></Link>
      <button  onClick={()=>handleDelete(coffeedata._id)} className="btn btn-primary">Delete Coffee</button>
    </div>
  </div>
</div>)}
            
        </div>
    );
};

export default Showcoffe;