import * as React from "react"
import { PostsDivWrapper, PostCreate } from "./Posts-styled"
import Post from "./Post"
import { useTypedDispatch, useTypedSelector } from "../../../store/typed-hooks"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { postAttrs, updateUserInfo } from "../../../store/slices/users-store"
import getPosts from "../../../requests/getPosts"
import { useForm } from "react-hook-form"
import UserModal from "../userInfo/userModal/UserModal"
import sendPost from "../../../requests/sendPost"

const Posts = () => {
  const { id } = useParams()
  const userFromState = useTypedSelector(state => state.UsersStore.users.find(user => id === user.id))
  const dispatch = useTypedDispatch()
  const [posts, setPosts] = useState<postAttrs[] | undefined>(userFromState?.posts)
  const [isAdditionalImageVisible, setAdditionalImageVisible] = useState(false)
  const [image, setImage] = useState<string>()
  const [imageInput, setImageInput] = useState("")
  const { reset, handleSubmit, register } = useForm<postAttrs>()
  useEffect(() => {
    //prettier-ignore
    (async () => {
      if (id) {
        const posts = await getPosts(id)
        setPosts(posts)
        dispatch({ type: updateUserInfo, payload: { posts, id } })
      }
    })()
  }, [])
  const submitHandler = async (data: postAttrs) => {
    const payload = { ...data, userId: id, dateOfCreate: new Date().toTimeString().slice(0, 8), postImage: image }
    await sendPost(payload)
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
      <PostCreate>
        <form onSubmit={handleSubmit(submitHandler)}>
          <textarea {...register("postText")} />
          <button type="button" onClick={() => setAdditionalImageVisible(true)}>
            Add Image
          </button>
          <button type="submit">Post</button>
        </form>
      </PostCreate>
      {posts &&
        posts.map(post => (
          <Post
            setPosts={setPosts}
            key={post.id}
            currentId={post.id}
            profileImg={userFromState?.profileImg}
            img={post?.postImage}
            username={userFromState?.username}
            text={post?.postText}
            date={post?.dateOfCreate}
          />
        ))}
    </PostsDivWrapper>
  )
}

export default Posts
