export const userPageInfoFields = [
  { icon: "school", fieldToUpdate: "education" },
  { icon: "assignment_ind", fieldToUpdate: "info" },
  { icon: "chrome_reader_mode", fieldToUpdate: "activity" },
  { icon: "group", fieldToUpdate: "interests" },
  { icon: "cake", fieldToUpdate: "dateOfBirth", customText: "Birthday" },
  { icon: "queue_music", fieldToUpdate: "favouriteMusic", customText: "Favourite music" },
  { icon: "videogame_asset", fieldToUpdate: "favouriteGames", customText: "Favourite games" },
  { icon: "bookmark", fieldToUpdate: "favouriteBooks", customText: "Favourite books" },
] as Array<{ icon: string; fieldToUpdate: userPageFullInfoKeysT; customText?: string }>
