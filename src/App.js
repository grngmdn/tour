import React, { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = "https://course-api.com/react-tours-project"

function App() {

  const [loading, setLoading] = useState(false)
  const [tours, setTours] = useState([])

  useEffect(() => { 
    setLoading(true)
    const fetchTours = fetch(url)
    .then(res => res.json())
    .then(data => setTours(data))
    setLoading(false)
  },[])

  function removeTour(id){

    const newTours = tours.filter(
      (tour) => tour.id !== id 
    )
    return(
      setTours(newTours)
    )
  }

  if(loading) {
    return(
      <h1>
        {loading ? <Loading /> : null}
      </h1>
    )
  }

  if(tours.length === 0) {
    return(
      <div>
        <h1>
          No Tours left
        </h1>
        <button onClick={() => useEffect()}>
          refresh
        </button>
      </div>

    )
  }

  return (
      <div>
        <Tours tours={tours} removeTour={removeTour}/>
        {console.log(tours)}
      </div>
  );
}

export default App;


