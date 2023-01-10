import * as React from "react"
import { PostsDivWrapper, PostCreate } from "./Posts-styled"
import Post from "./Post"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useForm } from "react-hook-form"
import UserModal from "../userInfo/userModal/UserModal"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import "./PostsAnimation.css"
import { useCreatePostMutation, useFetchPostsQuery } from "../../../store/req/posts-slice.api"
import { useTypedSelector } from "../../../hooks/rtk-hooks"
import { useGetUserPageInfoQuery } from "../../../store/req/userPage-slice-api"

const Posts = () => {
  const { id } = useParams()
  const [isAdditionalImageVisible, setAdditionalImageVisible] = useState(false)
  const [image, setImage] = useState<string>()
  const { reset, handleSubmit, register } = useForm<postAttrs>()
  const { data: postsData } = useFetchPostsQuery(id as string)
  const [createPostApi, {}] = useCreatePostMutation()
  const { data } = useGetUserPageInfoQuery(id as string)
  const editable = useTypedSelector(state => state.currentUser._id) === id
  const submitHandler = async (data: postAttrs) => {
    const payload = { ...data, userId: id, dateOfCreate: new Date().toTimeString().slice(0, 8), postImage: image }
    createPostApi(payload)
    reset()
    setImage("")
  }
  return (
    <PostsDivWrapper>
      {isAdditionalImageVisible && (
        <UserModal setModalVisible={setAdditionalImageVisible} field={"postImage"} setImage={setImage} />
      )}
      {editable && (
        <PostCreate>
          <form onSubmit={handleSubmit(submitHandler)}>
            <textarea {...register("postText")} />
            <button type="button" onClick={() => setAdditionalImageVisible(true)}>
              Add Image
            </button>
            <button type="submit">Post</button>
            {image && (
              <div>
                <img src={image} />
              </div>
            )}
          </form>
        </PostCreate>
      )}
      <TransitionGroup>
        {postsData &&
          postsData.map(post => (
            <CSSTransition key={post._id} timeout={100} classNames="item">
              <Post
                key={post._id}
                currentId={post._id}
                profileImg={data?.profileImg || ""}
                img={post?.postImage}
                username={post?.userId}
                text={post?.postText}
                date={post?.dateOfCreate}
              />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </PostsDivWrapper>
  )
}

export default Posts
