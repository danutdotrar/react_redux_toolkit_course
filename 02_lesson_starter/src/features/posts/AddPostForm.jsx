import { useState } from "react";
import { postAdded } from "./postsSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

const AddPostForm = () => {
    // const [title, setTitle] = useState("");
    // const [content, setContent] = useState("");

    // const onTitleChange = (e) => {
    //     setTitle(e.target.value);
    // };

    // const onContentChange = (e) => {
    //     setContent(e.target.value);
    // };

    const [postData, setPostData] = useState({ title: "", content: "" });

    const dispatch = useDispatch();

    const { title, content } = postData;

    const onChange = (e) => {
        setPostData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(postAdded({ id: nanoid(), ...postData }));
        }

        setPostData({ title: "", content: "" });
    };

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
                    onChange={onChange}
                />
                <label htmlFor="postContent">Content:</label>
                <input
                    type="text"
                    id="postContent"
                    name="content"
                    value={content}
                    onChange={onChange}
                />
                <button type="button" onClick={onSavePostClicked}>
                    Save Post
                </button>
            </form>
        </>
    );
};

export default AddPostForm;
