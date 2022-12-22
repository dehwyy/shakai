import React from 'react';
import {PostsDivWrapper} from "./Posts-styled";
import Post from "./Post";
import {RANDOM_IMAGE} from "../../../img/profile";

const Posts = () => {
    return (
        <PostsDivWrapper>
            <Post img={RANDOM_IMAGE} />
            <Post />
        </PostsDivWrapper>
    );
};

export default Posts;