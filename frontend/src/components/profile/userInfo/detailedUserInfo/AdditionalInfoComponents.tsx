import * as React from "react"
import { FC } from "react"
import Ico from "../../../../UI/Ico"

const Education: FC<{ education: string }> = ({ education }) => {
  return (
    <div>
      <Ico ExtraComponent={() => <span>Education:</span>}>school</Ico>
      <span>{education}</span>
    </div>
  )
}

const Friends: FC<{ friends: string[] }> = ({ friends }) => {
  return (
    <div>
      <Ico ExtraComponent={() => <span>Friends:</span>}>group</Ico>
      <span>{"There should be several friends' icons"}</span>
    </div>
  )
}
const DateOfBirth: FC<{ dateOfBirth: string }> = ({ dateOfBirth }) => {
  return (
    <div>
      <Ico ExtraComponent={() => <span>Birthday:</span>}>cake</Ico>
      <span>{dateOfBirth}</span>
    </div>
  )
}

const Interests: FC<{ interests: string }> = ({ interests }) => {
  return (
    <div>
      <Ico ExtraComponent={() => <span>Friends:</span>}>group</Ico>
      <span>{"There should be several friends' icons"}</span>
    </div>
  )
}

const Activity: FC<{ activity: string }> = ({ activity }) => {
  return (
    <div>
      <Ico ExtraComponent={() => <span>Friends:</span>}>group</Ico>
      <span>{"There should be several friends' icons"}</span>
    </div>
  )
}

const FavouriteBooks: FC<{ favouriteBooks: string }> = ({ favouriteBooks }) => {
  return (
    <div>
      <Ico ExtraComponent={() => <span>Favourite books:</span>}>bookmark</Ico>
      <span>{favouriteBooks}</span>
    </div>
  )
}

const FavouriteMusic: FC<{ favouriteMusic: string }> = ({ favouriteMusic }) => {
  return (
    <div>
      <Ico ExtraComponent={() => <span>Favourite music:</span>}>library_music</Ico>
      <span>{favouriteMusic}</span>
    </div>
  )
}

const FavouriteGames: FC<{ favouriteGames: string }> = ({ favouriteGames }) => {
  return (
    <div>
      <Ico ExtraComponent={() => <span>Favourite games:</span>}>videogame_asset</Ico>
      <span>{favouriteGames}</span>
    </div>
  )
}

const Info: FC<{ info: string }> = ({ info }) => {
  return (
    <div>
      <Ico ExtraComponent={() => <span>Info:</span>}>assignment_ind</Ico>
      <span>{info}</span>
    </div>
  )
}

export {
  Education, //
  Friends, //
  Info,
  FavouriteBooks, //
  FavouriteGames, //
  FavouriteMusic,
  Activity,
  DateOfBirth, //
  Interests,
}
