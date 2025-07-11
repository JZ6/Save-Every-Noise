To implement a React webpage that allows users to log in using the Spotify Authorization Code with PKCE Flow, follow these steps:

1. Set up your Spotify Developer account and create a new application to get the `client_id`:
- Visit the Spotify Developer Dashboard(https://developer.spotify.com/dashboard/applications).
    - Log in or sign up for a Spotify Developer account.
   - Click "Create an App" and fill in the necessary information.
   - Once the app is created, note the`client_id`.

2. Install the necessary dependencies for your React app:

    ```sh
npx create-react-app spotify-login-pkce
cd spotify-login-pkce
npm install @auth0/auth0-react
npm install spotify-web-api-js
```

3. In your `src` folder, create a new file named `config.js` and add your Spotify `client_id`:

```js
const config = {
  clientId: "YOUR_SPOTIFY_CLIENT_ID",
};

export default config;
```

4. Create a custom hook named`useSpotifyAuth.js` in your`src` folder:

```js
import { useState, useEffect } from "react";
import { generateRandomString, sha256 } from "./utils";
import config from "./config";

const { clientId } = config;

export default function useSpotifyAuth(redirectUri) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const hash = window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        if (item) {
          const parts = item.split("=");
          initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
      }, {});

    window.location.hash = "";

    const { access_token } = hash;

    if (access_token) {
      setIsLoggedIn(true);
    }
  }, []);

  const login = async () => {
    const verifier = generateRandomString(128);
    const challenge = await sha256(verifier);

    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(
redirectUri
    )}& code_challenge_method=S256 & code_challenge=${ challenge } `;

    window.location.href = authUrl;
  };

  return { isLoggedIn, login };
}
```

5. Create a `utils.js` file in your`src` folder with utility functions for PKCE:

    ```js
import { encode as base64UrlEncode } from "base64-url";

export function generateRandomString(length) {
  const array = new Uint32Array(length / 2);
  window.crypto.getRandomValues(array);
  return Array.from(array, (n) => n.toString(16)).join("");
}

export async function sha256(plain) {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  const digest = await window.crypto.subtle.digest("SHA-256", data);
  return base64UrlEncode(digest);
}
```

6. Modify your `App.js` to use the custom hook and add the login button:

```js
import React from "react";
import useSpotifyAuth from "./useSpotifyAuth";
import config from "./config";

const { clientId } = config;

function App() {
  const redirectUri = window.location.origin + "/callback";
  const { isLoggedIn, login } = useSpotifyAuth(redirectUri);

  return (
    <div className="App">
      {!isLoggedIn && (
        <button onClick={login}>Login with Spotify (PKCE Flow)</button>
      )}
      {isLoggedIn && <p>You are logged in!</p>}
    </div>
 