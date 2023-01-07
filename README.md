# Fullstack Social Network

## Here is a plan:

- make maintainable project with test, typescript, linters:
- going to use `mongo` + `express` + `react` (MERN) to make fullstack app with restful api
- Going to do 2 build modes: production && development
- Live chat on `websockets` soon...

> this is my first time using `babel`, `jest`, `react-testing-library`, `express` with `typescript` + `react hook form`(since 25.12.2022), `eslint`, `prettier`

## archive

- 22.12.2022 - made basement of project
- 23.12.2022 - add tests, cfgs etc., made mongodb connected
- 24.12.2022 - fixed issues at backend - setup tests and fixed esm import (that was pretty hard tbh)
- 24.12.2022(2) - refactored tests, add jwt token system for security, add several endpoints
- 25.12.2022 - custom scroll, add profile-menu
- 25.12.2022(2) - made basic form using react-hook-form
- 26.12.2022(UTC: 2:00) - made adaptive auth component system with react-hook-form + full-typescript
- 26.12.2022(UTC: 10:00) - made login and registration forms, update tests from _.test.jsx to _.test.tsx, profile menu depends on accessToken(soon) in localStorage
- 27.12.2022(UTC: 0:00) - set up prettier and very basics of eslint
- 27.12.2022(UTC: 9:00) - configured eslint and prettier
- 28.12.2022(UTC: 6:25) - setup redux, axios instance, made connection with backend and frontend, refactor backend logic, made new schemes in db
  - yesterday I was struggling with vite and babel; Idk why, but they just don't want to work together: Vite can do everything by himself and babel can do everything by himself, but not both💀💀; After 5 hours I gave up, but I'll be back 😎(maybe just going to setup esbuild or webpack, time will tell); Also, I sometimes hate prettier cuz of its strange line breaking, like I've 2 arg in func and their summary length is 10, and prettier just leave each arg on new line, thus code becomes unreadable😐
- 29.12.2022(UTC: ~20:00) - started refactoring login and registration form cuz it was hell
- 30.12.2022(UTC: ~0:00) - refactored registration & login
- 31.12.2022(UTC: 23:00) - made unique user pages & linked them to backend(user's full info)
