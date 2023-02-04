import {Outlet, Link} from 'react-router-dom';

export default function Root(){
   return(

     <div>
        <h1>Root Element</h1>
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
        </ul>
        <Outlet/>
    </div>
   )
}