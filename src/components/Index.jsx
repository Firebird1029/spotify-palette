"use client";

import { useEffect, useState } from "react";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI;
const AUTH_ENDPOINT = process.env.NEXT_PUBLIC_AUTH_ENDPOINT;
const RESPONSE_TYPE = process.env.NEXT_PUBLIC_RESPONSE_TYPE;

function Index() {
  const [token, setToken] = useState(null);

  const handleLogin = () => {
    console.log("logging in");
    const params = new URLSearchParams();
    params.append("client_id", CLIENT_ID);
    params.append("response_type", RESPONSE_TYPE);
    params.append("redirect_uri", REDIRECT_URI);
    params.append(
      "scope",
      "user-read-private user-read-email user-library-read user-follow-read user-top-read user-modify-playback-state",
    );

    const url = `${AUTH_ENDPOINT}?${params.toString()}`;

    // Open Spotify login in same window, will redirect back
    window.open(url, "_self");
  };

  const handleTokenFromCallback = () => {
    console.log("handling token");
    // Extract the token from the URL hash
    const urlParams = new URLSearchParams(window.location.hash.substr(1));
    const newToken = urlParams.get("access_token");

    if (newToken) {
      setToken(newToken);
      window.localStorage.setItem("token", newToken);
    }
  };

  // Check for token in the URL hash when component mounts
  useEffect(() => {
    handleTokenFromCallback();
  }, []);

  return (
    <div>
      <h1 className="font-koulen">Welcome to Uni.fy!</h1>
      <button
        type="button"
        className="border rounded-full px-6 py-2 text-lg font-koulen"
        onClick={() => handleLogin()}
      >
        Log In
      </button>
      <button
        type="button"
        className="border rounded-full px-6 py-2 text-lg font-koulen"
      >
        Enter Code
      </button>
    </div>
  );
}

export default Index;
