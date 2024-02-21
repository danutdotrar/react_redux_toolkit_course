import { useSelector } from "react-redux";
import React from "react";
import { selectAllUsers } from "../users/usersSlice";

const PostAuthor = ({ userId }) => {
    // select users
    const users = useSelector(selectAllUsers);

    // find user by id
    const author = users.find((user) => user.id === userId);

    return <span> by {author ? author.name : "Unknown author"}</span>;
};

export default PostAuthor;