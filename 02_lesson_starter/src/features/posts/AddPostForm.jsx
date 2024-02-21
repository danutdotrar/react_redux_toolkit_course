import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userId, setUserId] = useState("");

    // select all users
    const users = useSelector(selectAllUsers);

    const onTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const onContentChange = (e) => {
        setContent(e.target.value);
    };

    const onAuthorChange = (e) => {
        setUserId(e.target.value);
    };

    // const { title, content } = postData;
    // const [postData, setPostData] = useState({ title: "", content: "" });

    const dispatch = useDispatch();

    // const onChange = (e) => {
    //     setPostData((prevState) => ({
    //         ...prevState,
    //         [e.target.name]: e.target.value,
    //     }));
    // };

    const onSavePostClicked = () => {
        // if (title && content) {
        //     dispatch(postAdded({ id: nanoid(), ...postData }));
        // }
        // setPostData({ title: "", content: "" });

        dispatch(postAdded(title, content, userId));
        setTitle("");
        setContent("");
    };

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

    const usersOptions = users.map((user) => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ));

    return (
        <>
            <h2>Add a new form</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="title"
                    value={title}
                    onChange={onTitleChange}
                />

                <label htmlFor="postAuthor">Author:</label>
                <select
                    id="postAuthor"
                    value={userId}
                    onChange={onAuthorChange}
                >
                    <option value=""></option>
                    {usersOptions}
                </select>

                <label htmlFor="postContent">Content:</label>
                <input
                    type="text"
                    id="postContent"
                    name="content"
                    value={content}
                    onChange={onContentChange}
                />
                <button
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >
                    Save Post
                </button>
            </form>
        </>
    );
};

export default AddPostForm;
