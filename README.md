# Fullstack Social Network

## Technologies stack:
$\color[RGB]{99,131,215} Typescript$ <br>
$\color[RGB]{20,142,248} React$ <br>
$\color[RGB]{74,59,248} Styled-components$ <br>
$\color[RGB]{153,24,227} Redux Toolkit + query$ <br>
$\color[RGB]{55,180,225} React-transition-group$ <br>
$\color[RGB]{180,61,230} React-hook-form$ <br>
$\color[RGB]{255,255,255} Express $<br>
$\color[RGB]{58,218,103} MongoDB + mongoose$ <br>
$\color[RGB]{215,193,69} JWT$ <br>
$\color[RGB]{243,132,48} Jest + React-testing-library$<br>
$\color[RGB]{82,199,54} Vite$ <br>
$\color[RGB]{204,227,46} Babel$ <br>
$\color[RGB]{255,65,107} ESLint$ <br>
$\color[RGB]{204,227,46} Prettier$ <br>

## Here is a plan:

- make maintainable project with test, typescript, linters:
- going to use `mongo` + `express` + `react` to make fullstack app
- Going to do 2 build modes: production && development

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
- 1.12.2023 - add managing userPageInfo
- 2.12.2023 - add opportunity to change profile images
- 3.12.2023 - refactored code & end up with userPageInfo
- 4.12.2023 - started development of posts interaction
- 5.12.2023 - since that date, post could be added
- 6.12.2023 - react-transition, finished functionality of userPage
- 8.12.2023 - realised that I made a shit - demolished rtk for future migrating from axios to rtk query and also for clean code
- 8.12.2023 - setup basement of rtk query & etc
- 9.12.2023 - remaking endpoints and managing them on front part
- 10.12.2023 - fully migrated to rtk q (q stands for query; now and for future), I'm going to make client side customization - 2-3 app theme; going to make app looks prettier: transition, adaptive & etc; time will tell  
