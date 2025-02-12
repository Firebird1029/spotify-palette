/* 
Home/Index page of application, contains buttons to log in in with Spotify and sign out.
*/

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import loginWithSpotify from "@/app/login/actions";
import Ipod from "@/app/IPod";
import "@/app/globals.css";
import LeftPanel from "@/app/LeftPanel";
import LoadingIcon from "@/app/LoadingIcon";
import createClient from "@/utils/supabase/client";

export default function IndexPage() {
  const router = useRouter();
  const supabase = createClient();

  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  // check if user is already logged in
  useEffect(() => {
    (async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (user) {
        // already logged in
        setLoggedIn(true);
      } else if (session && !user) {
        // user created an account but did not verify email
        // TODO
      } else {
        // user is not logged in
      }
    })().catch((err) => {
      router.push(`/error?message=${err.message}`);
    });
  }, []);

  function handleSignOut() {
    // Perform sign-out actions here, e.g., make an API request to sign the user out

    fetch("/auth/signout", { method: "POST" })
      .then((response) => {
        if (response.ok) {
          // Handle successful sign-out, e.g., redirect to login page
          window.location.href = "/";
        } else {
          // Handle sign-out failure
          router.push(`/error?message=${response.statusText}`);
        }
      })
      .catch((error) => {
        router.push(`/error?message=${error.message}`);
      });
  }

  return (
    <div
      className={`flex relative ${loading ? "h-screen" : ""}
                    lg:h-screen`}
    >
      <div
        className={`w-full flex flex-col justify-center items-center text-center ${
          loading ? "" : "hidden"
        }`}
        style={{ height: "100vh" }} // Ensure the div takes full viewport height
      >
        <LoadingIcon />
        <p className="mt-3 text-2xl">Getting things set up...</p>
      </div>
      <div
        className={`flex flex-col justify-center items-center space-x-0 pt-12 px-12 border-10 border-red
                    lg:flex-row lg:items-center lg:justify-end lg:space-x-12 ${
                      loading ? "hidden" : ""
                    }`}
      >
        <div className="w-full lg:max-w-1/2 lg:flex-shrink">
          <LeftPanel />
        </div>
        <div className="w-full lg:max-w-1/2 lg:flex-shrink">
          <Ipod>
            <div className="flex flex-col justify-center items-center text-center pt-10 space-y-10">
              <button
                className="border rounded-full bg-white px-5 py-3 text-3xl"
                type="button"
                onClick={() => {
                  setLoading(true);
                  loginWithSpotify();
                }}
              >
                {loggedIn ? "Continue to Account" : "Log in with Spotify"}
              </button>
              <div className={`${loggedIn ? "" : "hidden"}`}>
                <button
                  className="border rounded-full bg-white px-5 py-3 text-3xl"
                  type="button"
                  onClick={() => handleSignOut()}
                >
                  Logout
                </button>
              </div>
            </div>
          </Ipod>
        </div>
      </div>
    </div>
  );
}
