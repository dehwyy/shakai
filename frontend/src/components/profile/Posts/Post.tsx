import React, {FC} from 'react';
import {PostDivWrapper, PostHeader, PostBody, PostMessage} from "./Posts-styled";
import {RANDOM_TEXT, PROFILE_IMAGE} from "../../../img/profile";

interface inPostProps {
    img?: string
    profileImg?: string
    text?: string
}

const Post:FC<inPostProps> = ({img, profileImg}) => {
    return (
        <PostDivWrapper data-testid="post">
            <PostHeader>
                <img src={profileImg ? profileImg : PROFILE_IMAGE} alt={"Avatar"}/>
                <span data-testid="username">{"USERNAME HERE"}</span>
                <span data-testid="date">{(new Date(Date.now())).toDateString().slice(3)}</span>
            </PostHeader>
            <PostBody>
                <PostMessage>{RANDOM_TEXT.split("\n").map((part, index) => (
                    <span key={index}>{part}<br/></span>
                ))}</PostMessage>
                {img && <img src={img} alt={"NO ALT"} />}
            </PostBody>
        </PostDivWrapper>
    );
};

export default Post;