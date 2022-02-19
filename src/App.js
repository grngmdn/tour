import React, { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = "https://course-api.com/react-tours-project"

function App() {

  const [loading, setLoading] = useState(false)
  const [tours, setTours] = useState([])


  // fetch logic to get data from an api
  const fetchTours = () => {
    setLoading(true)
    fetch(url)
    .then(res => res.json())
    .then(data => setTours(data))
    setLoading(false)
  }

  useEffect(() => { 
    fetchTours()
  },[])


  // logic to show "loading..." before fetching data
  if(loading) {
    return(
      <h1>
        {loading ? <Loading /> : null}
      </h1>
    )
  }

  // logic to refresh tour once all the tour has been removed
  if(tours.length === 0) {
    return(
      <div>
        <h1>
          No Tours left
        </h1>
        <button onClick={() => fetchTours()}>
          refresh
        </button>
      </div>
    )
  }

  // logic to remove individual tour
  function removeTour(id){

    const newTours = tours.filter(
      (tour) => tour.id !== id 
    )
    return(
      setTours(newTours)
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


