import * as React from "react"
import { PostsDivWrapper, PostCreate } from "./Posts-styled"
import Post from "./Post"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { postAttrs } from "../../../store/slices/users-store"
import { useForm } from "react-hook-form"
import UserModal from "../userInfo/userModal/UserModal"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import "./PostsAnimation.css"
import UserData from "../../../requests/UserData"
import UserPostData from "../../../requests/UserPostData"
const Posts = () => {
  const { id } = useParams()
  const [posts, setPosts] = useState<postAttrs[] | undefined>()
  const [isAdditionalImageVisible, setAdditionalImageVisible] = useState(false)
  const [image, setImage] = useState<string>()
  const [imageInput, setImageInput] = useState("")
  const userId = localStorage.getItem("userId")
  const editable = userId === id
  const { reset, handleSubmit, register } = useForm<postAttrs>()
  useEffect(() => {
    //prettier-ignore
    (async () => {
      if (id) {
        const posts = await UserData.getPosts(id)
        setPosts(posts)
      }
    })()
  }, [])
  const submitHandler = async (data: postAttrs) => {
    const payload = { ...data, userId: id, dateOfCreate: new Date().toTimeString().slice(0, 8), postImage: image }
    await UserPostData.sendPost(payload)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore "prev" must have a [SymbolIteratorMethod]()
    setPosts(prev => [{ ...payload, id: Date.now() }, ...prev])
    reset()
  }
  return (
    <PostsDivWrapper>
      {isAdditionalImageVisible && (
        <UserModal
          inputValue={imageInput}
          setInputValue={setImageInput}
          setModalVisible={setAdditionalImageVisible}
          setImage={setImage}
          field={"postImage"}
        />
      )}
      {editable && (
        <PostCreate>
          <form onSubmit={handleSubmit(submitHandler)}>
            <textarea {...register("postText")} />
            <button type="button" onClick={() => setAdditionalImageVisible(true)}>
              Add Image
            </button>
            <button type="submit">Post</button>
          </form>
        </PostCreate>
      )}
      <TransitionGroup>
        {posts &&
          userId &&
          posts.map(post => (
            <CSSTransition key={post.id} timeout={100} classNames="item">
              <Post
                setPosts={setPosts}
                key={post.id}
                currentId={post.id}
                profileImg={""}
                img={post?.postImage}
                username={userId}
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
