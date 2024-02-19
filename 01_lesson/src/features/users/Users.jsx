import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addUser } from "./usersSlice";

const Users = () => {
    const dispatch = useDispatch();

    // select the state
    const users = useSelector((state) => state.users.users);

    const [userName, setUserName] = useState("");

    return (
        <div>
            <p>
                users state:
                {users.map((user) => (
                    <p>{user}</p>
                ))}
            </p>
            <div>
                <input
                    type="text"
                    value={userName}
                    onChange={(e) => {
                        setUserName(e.target.value);
                    }}
                />
                <button onClick={() => dispatch(addUser(userName))}>
                    Add user to state
                </button>
            </div>
        </div>
    );
};

export default Users;
