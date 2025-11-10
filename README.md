## Social App (Web, React + Vite)

Web client for the Social platform. Pairs with the backend API and shares core features with the mobile app (auth, posts, comments, likes).

- **Backend repo**: `../social-api` (must be running)
- **Mobile app**: `../social-mobile` (Expo/React Native)
- **UI**: MUI
- **Data**: React Query

### Requirements
- Node 18+
- pnpm/npm/yarn

### Environment
The API base URL is defined in `src/AppProvider.jsx`:
```
const api = "http://localhost:8800";
```
If your API runs elsewhere, update `api` to match. The app sends `Authorization: Bearer <token>` using a token stored in `localStorage`.

### Quick Start
1) Start the API:
```bash
cd ../social-api
npm install
npm run dev
```
2) Start the web app:
```bash
cd ../social-app
npm install
npm run dev
```
Open the printed local URL from Vite (e.g., `http://localhost:5173`).

### Authentication
On load, the app verifies the token with:
- `GET /users/verify` using header `Authorization: Bearer <token>`
- Token is stored in `localStorage` under `token`
- See `src/AppProvider.jsx` for the flow

### Project Structure
```
src/
  AppProvider.jsx      # Theme, auth bootstrap, React Query provider
  components/
    AppDrawer.jsx
    Header.jsx
    Form.jsx
    Post.jsx
    Comment.jsx
  pages/
    Login.jsx
    Register.jsx
    Posts.jsx
    View.jsx
    Profile.jsx
  main.jsx
  App.jsx
```

### Scripts
```bash
npm run dev       # Start Vite dev server
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # ESLint
```

### Troubleshooting
- Ensure `../social-api` is on `http://localhost:8800` before opening the app.
- If the API runs on a different host/port, change `const api` in `src/AppProvider.jsx`.
- CORS errors: configure CORS in the API to allow the web origin during development.

### Related
- API service: `../social-api/README.md`
- Mobile app: `../social-mobile/README.md`
