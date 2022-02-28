import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, logout } from "../../store/actions/authAction";
import { Button } from "reactstrap";
const AuthView = (props) => {
  let dispatch = useDispatch();
  return (
    <>
      <h2>Auth View</h2>
    </>
  );
};

export default AuthView;
