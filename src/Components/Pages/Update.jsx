import { useLoaderData } from "react-router-dom";


const Update = () => {

   const data=useLoaderData();
   console.log(data)


   const handleUpdate=(e)=>{


    e.preventDefault();
    const form=e.target
    const name=form.name.value;
    const photo=form.photo.value;
    const description=form.description.value
    
    const updateUser={name, photo, description}
    console.log(updateUser);

    fetch(`http://localhost:5000/addcoffee/${data._id}`, {
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(updateUser)
    })
    .then(res=>res.json)
    .then(data=>{
        console.log(data)
    })

   }




    return (
        <div>
            <h1> this is update page </h1>

            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleUpdate} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name"defaultValue={data.name} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input type="text" name="photo"defaultValue={data.photo}  className="input input-bordered" required />
        </div>
        <div className="">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
         <textarea className="border" name="description" defaultValue={data.description}  id="" cols="30" rows="4"></textarea>

        </div>

        <button className="btn btn-outline btn-success">Update</button>
       
        
      </form>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Update;