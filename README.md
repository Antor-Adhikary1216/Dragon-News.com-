# 🐉 Dragon News

**Dragon News** is a modern news portal web application built with **React**, **Vite**, **Firebase Authentication**, **React Router**, **Tailwind CSS**, and **DaisyUI**.

The app displays category-based news, author information, ratings, views, latest news, and protected news details pages. Users need to log in before reading full news details.

---

## 🚀 Live Demo

Live link:https://boisterous-naiad-2a9beb.netlify.app/cetagory/0

---

## ✨ Features

* 📰 Modern news portal UI
* 🏠 Home page with news layout
* 🗂️ Category-based news filtering
* 🔥 Today’s pick filtering
* 📖 News card with title, author, image, rating, and views
* 🔐 Firebase authentication
* 📝 User registration
* 🔑 User login
* 👤 Update user profile support
* 🚪 Logout functionality
* 🛡️ Private route for news details
* 📄 Dynamic news details page
* 🧭 Left sidebar and right sidebar layout
* 📢 Latest news section
* 🏃 Fast marquee support
* 🎨 Responsive styling with Tailwind CSS and DaisyUI
* ⚡ Fast development experience with Vite

---

## 🛠️ Technologies Used

* React.js
* Vite
* React Router
* Firebase Authentication
* Tailwind CSS
* DaisyUI
* React Icons
* React Fast Marquee
* Date-fns
* JavaScript
* JSON Data

---

## 📁 Project Structure

```bash
Dragon-News.com-/
├── public/
│   ├── news.json
│   └── categories.json
├── src/
│   ├── Components/
│   │   ├── Header/
│   │   ├── HomelayoutGrid/
│   │   ├── LetestNews/
│   │   ├── NavBar/
│   │   └── NewsCArd/
│   ├── Layouts/
│   │   ├── AuthLayot.jsx
│   │   └── HomeLayouts.jsx
│   ├── Page/
│   │   ├── CetagoryNews.jsx
│   │   ├── Home.jsx
│   │   ├── Loading.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── newsdetails.jsx
│   ├── Provider/
│   │   ├── AuthProvider.jsx
│   │   └── PrivateRoute.jsx
│   ├── Routs/
│   │   └── Roots.jsx
│   ├── firebase.com/
│   │   └── firebase.config.js
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation and Setup

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/Antor-Adhikary1216/Dragon-News.com-.git
```

### 2. Go to the project folder

```bash
cd Dragon-News.com-
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create environment file

Create a `.env.local` file in the root folder and add your Firebase config.

```env
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_firebase_auth_domain
VITE_projectId=your_firebase_project_id
VITE_storageBucket=your_firebase_storage_bucket
VITE_messagingSenderId=your_firebase_messaging_sender_id
VITE_appId=your_firebase_app_id
```

### 5. Start the development server

```bash
npm run dev
```

Now open the local server URL in your browser.

---

## 📦 Available Scripts

```bash
npm run dev
```

Runs the app in development mode.

```bash
npm run build
```

Builds the app for production.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs ESLint to check code quality.

---

## 🧩 Main Routes

| Route             | Description                          |
| ----------------- | ------------------------------------ |
| `/`               | Home page, redirects to category `0` |
| `/cetagory/:id`   | Category-based news page             |
| `/newsdetais/:id` | Protected news details page          |
| `/auth/login`     | Login page                           |
| `/auth/Register`  | Register page                        |
| `/*`              | 404 error route                      |

---

## 🔐 Authentication

The app uses Firebase Authentication.

Authentication features include:

* Create user with email and password
* Sign in with email and password
* Logout
* Update user profile
* Track current user with `onAuthStateChanged`
* Protect private pages using `PrivateRoute`

Users who are not logged in are redirected to the login page before they can access the full news details page.

---

## 📰 News Data

The app loads news data from `news.json`.

Each news item can include:

```js
{
  id,
  category_id,
  title,
  rating,
  total_view,
  author,
  thumbnail_url,
  image_url,
  details,
  tags,
  others,
  production
}
```

---

## 🧠 How the App Works

The app uses React Router for navigation. The home page redirects users to the default category route.

The category page loads all news from `news.json`. If the category ID is `0`, it displays all news. If the category ID is `1`, it displays today’s pick news. Otherwise, it filters news by `category_id`.

Each news card shows the author, publish date, title, image, short details, rating, and total views. Clicking **Read More** opens the news details page. The details page is protected, so only logged-in users can access it.

---

## 🔥 Firebase Setup

1. Create a Firebase project.
2. Enable Email/Password authentication.
3. Create a web app inside Firebase.
4. Copy your Firebase config.
5. Add the config values to `.env.local`.
6. Restart the development server.

---

## 📌 Future Improvements

* Fix spelling in route names such as `cetagory` and `newsdetais`
* Add Google login
* Add bookmark functionality
* Add share functionality
* Add search news feature
* Add category data from API
* Add responsive mobile improvements
* Add user profile page
* Add admin dashboard
* Add live deployment link
* Add project screenshots

---

## 👨‍💻 Author

**Antor Adhikary**

GitHub: [Antor-Adhikary1216](https://github.com/Antor-Adhikary1216)

---

## 📄 License

This project is open source and available for learning and practice purposes.
