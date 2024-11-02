import { Link, useNavigate } from "react-router-dom";
import FAButton from "./FAButton";

export default function Header() {


    return (
        <div>
            <div className="bg-gray-200 p-3 flex justify-between items-center mb-2">
                <h1 className="text-xl font-bold">Users</h1>
                <Link to={'/DashBoard/UserForm'}><FAButton label='UserForm' className="bg-cyan-950 text-white px-4 py-2 rounded hover:bg-yellow-600" /></Link>
            </div>
        </div>
    );
}
