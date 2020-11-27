import { useUser } from "reactfire";

import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import LogOut from "./components/LogOut";

function CheckUser() {
  const user = useUser();
  return (
    <div className="App">
      {user && <LogOut />}
      {!user && (
        <>
          <SignUp />
          <LogIn />
        </>
      )}
    </div>
  );
}

export default CheckUser;
