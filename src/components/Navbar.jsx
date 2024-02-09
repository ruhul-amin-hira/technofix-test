
import { Link } from "react-router-dom"
import { Button } from "./ui/button"


const Navbar = () => {
  return (
    <div className="py-2">
    <Button asChild variant="ghost">
       <Link to="/">Home</Link>
    </Button>
    </div>
    
  )
}

export default Navbar