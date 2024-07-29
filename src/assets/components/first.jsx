

function first() {
    const abc = "this is abc value"

    // useEffect(() => {
      
    // } , []);
    const getOut = () => {
      console.log("first")
    }
  return (
    <>
    <div>first</div>
    <div>{abc}</div>
    <button onClick={getOut}>click</button>
    </>
  )
}

export default first