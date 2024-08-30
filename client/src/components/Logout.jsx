
import toast from "react-hot-toast";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../redux/authSlice";
import {  useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  const user = useSelector((state)=>state.auth.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    try {
      dispatch(logout());
      toast.success("Logout successfully");
      navigate('/');

    } catch (error) {
      toast.error("Error:"+error);
    }
  };
  return (
    <div>
      {user && (
        <button
          className="px-3 py-2 w-full bg-red-500 text-white rounded-md cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </button>
      )}
    </div>
  );
}

export default Logout;
