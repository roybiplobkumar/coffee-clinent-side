

const Addcoffe = () => {
    const handleeSubmit=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const photo=form.photo.value;
        const description=form.description.value
        const coffeeData={name, photo, description}

        fetch('http://localhost:5000/addcoffee', {
            method:"POST",
            headers:{
                'content-type':"application/json"
            }, 
            body:JSON.stringify(coffeeData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
              alert('add coffee successfully')
            }
            
        })
       
    }

    
   

    return (
        <div className="bg-gray-500 h-[100vh]">
            <h1>this is add coffee page</h1>

            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleeSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="coffeeName" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input type="text" name="photo" placeholder="PhotoURL" className="input input-bordered" required />
        </div>
        <div className="">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
         <textarea className="border" name="description" placeholder=" Write description" id="" cols="30" rows="4"></textarea>

        </div>

        <button className="btn btn-outline btn-success">addCoffee</button>
       
        
      </form>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Addcoffe;