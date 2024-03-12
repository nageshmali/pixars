import React from 'react'

const Navbar = ({setSearch}) => {
  return (
    <>
      <div className="nav mt-4">
        <div
          onClick={()=>setSearch("nature")} 
         className="button mt-4 btn btn-outline-warning mx-3">Nature</div>
        <div
          onClick={()=>setSearch("travel")} 
         className="button mt-4 btn btn-outline-primary mx-3">Travel</div>
        <div
          onClick={()=>setSearch("city")} 
         className="button mt-4 btn btn-outline-info mx-3">City</div>
        <div
          onClick={()=>setSearch("animals")} 
         className="button mt-4 btn btn-outline-light mx-3">Animals</div>
        <div
          onClick={()=>setSearch("cars")} 
         className="button mt-4 btn btn-outline-warning mx-3">Cars</div>
        <div
          onClick={()=>setSearch("fashion")} 
         className="button mt-4 btn btn-outline-info mx-3">Fashion</div>
        <div
          onClick={()=>setSearch("technology")} 
         className="button mt-4 btn btn-outline-warning mx-3">Technology</div>
        <div
          onClick={()=>setSearch("business")} 
         className="button mt-4 btn btn-outline-light mx-3">Business & Finance</div>
        <div
          onClick={()=>setSearch("dubai")} 
         className="button mt-4 btn btn-outline-info mx-3">Dubai</div>
        <div
          onClick={()=>setSearch("space")} 
         className="button mt-4 btn btn-outline-warning mx-3">Space</div>
      </div>

      <div className="container my-4" style={{width:"480px"}}>
        <div className="mb-3" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"}}>
          <input type="email"
          onChange={(e)=>setSearch(e.target.value)}
           placeholder="Search here" className="form-control bg-dark text-light" id="exampleInputEmail1" aria-describedby="emailHelp"/>          
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
        </div>
      </div>
    </>
  )
}

export default Navbar