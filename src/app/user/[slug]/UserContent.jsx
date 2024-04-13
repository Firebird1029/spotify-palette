/*
The content of the /user/[slug] page.
Contains info about a user's top genres, top artists, top songs, and song analysis.
*/

import { ResponsiveRadar } from "@nivo/radar";
import PropTypes from "prop-types";
import "@/app/globals.css";
import GenrePieChart from "@/shared/GenrePieChart";
import Boombox from "@/components/svg-art/boombox";
import Cassette from "@/app/user/[slug]/cassette";
import PaperTitle from "@/components/svg-art/paper_title";

function UserContent({ userData, shareCassette }) {
  // Convert object to array of { id: genre, value: frequency } objects
  const top5Genres = Object.entries(userData.topGenres)
    .sort((a, b) => b[1] - a[1]) // Sort genres by frequency in descending order
    .slice(0, 5) // Get the top 5 genres
    .map(([id, value]) => ({ id, value })); // Map to { id: genre, value: frequency } objects

  const userColors = {
    bg: "#FF7448",
    light: "#FFC556",
    dark: "#7F5300",
  };

  return (
    <div
      style={{ backgroundColor: userColors.bg } /* Custom personality bg */}
      className="flex flex-col sm:pt-20 md:pt-10"
    >
      {/* top section, must be 100vh */}
      <div
        className="h-screen-2/3 \
                    md:h-screen"
      >
        {/* Boombox header, takes up 1/3-2/3 split on mobile
            and 1/2-1/2 split on larger screens */}
        <div
          className="rounded-lg pt-4 px-4 flex flex-col justify-end items-center \
                        h-1/2"
        >
          {/* Used for responsive sizing */}
          <div
            className="w-full flex flex-row justify-center items-end mt-12 w-[110%] \
                          md:w-[80%] md:mt-16 \
                          xl:w-[60%]"
          >
            <Boombox userData={userData} shareCassetteFunc={shareCassette} />
          </div>
        </div>
        {/* Spotlight transition, takes on light color + holds cassette */}
        <div
          style={{
            backgroundColor: userColors.light,
            clipPath: "polygon(27.5% 0%, 72.5% 0%, 100% 100%, 0% 100%)",
          }}
          className="h-1/2 flex flex-row justify-center"
        >
          <div
            className="justify-center items-center text-center font-koulen \
                            flex flex-col space-y-6 \ 
                            lg:flex-row lg:space-x-10"
          >
            <div className="w-[65%] lg:w-full">
              <Cassette
                userData={userData}
                userColors={userColors}
                side={"A"}
              />
            </div>
            <div
              style={{ color: userColors.dark }}
              className="flex flex-col justify-center items-center space-y-3 \
                            md:space-y-6"
            >
              <p
                className="text-4xl \
                              md:text-6xl"
              >
                See Breakdown
              </p>
              <div
                className="h-8 \
                                md:h-12"
              >
                <svg
                  className="animate-bounce"
                  width="100%"
                  height="100%"
                  viewBox="0 0 80 69"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M40 69L0.162827 0L79.8372 0L40 69Z" fill="#965100" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bg takes on spotlight color afterwards, Main Body content */}
      <div style={{ backgroundColor: userColors.light }} className="">
        <div className="rounded-lg p-4 mt-4 ml-4 justify-center">
          <PaperTitle>
            <div className="text-5xl font-koulen">TOP GENRES:</div>
          </PaperTitle>
          {top5Genres ? (
            <GenrePieChart data={top5Genres} centerCircleColor="#39466B" />
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <div className="bg-gray-100 rounded-lg p-4 mt-4 ml-4 flex">
          <div
            className="text-black text-l font-koulen"
            style={{ fontSize: 50 }}
          >
            Top Artists:
            <div className="mt-2" />
            {userData.topArtists.slice(0, 8).map((artist) => (
              <div key={artist.id} style={{ fontSize: 35 }}>
                {artist.name}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-4 mt-4 ml-4 flex">
          <div
            className="text-black text-l font-koulen"
            style={{ fontSize: 50 }}
          >
            Top Songs:
            <div className="mt-2" />
            {userData.topSongs.slice(0, 8).map((song) => (
              <div key={song.id} style={{ fontSize: 35 }}>
                {song.name}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg p-4 mt-4 ml-4 justify-center">
          <div
            className="text-black text-l font-koulen"
            style={{
              fontSize: 45,
            }}
          >
            {" "}
            SONG ANALYSIS:{" "}
          </div>
          {userData.featuresData ? (
            <div style={{ height: 450 }}>
              <ResponsiveRadar
                data={userData.featuresData}
                keys={["value"]}
                indexBy="feature"
                valueFormat=">-.1f"
                maxValue="100"
                margin={{ top: 65, right: 100, bottom: 35, left: 100 }}
                gridLabelOffset={20}
                theme={{
                  text: {
                    fontSize: 20,
                    fill: "#333333",
                    outlineWidth: 10,
                    outlineColor: "transparent",
                    fontFamily: "Koulen",
                  },
                }}
                colors={"#39466B"}
              />
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
}
export default UserContent;

UserContent.propTypes = {
  userData: PropTypes.shape({
    userProfile: PropTypes.shape({
      display_name: PropTypes.string,
    }),
    featuresData: PropTypes.arrayOf(PropTypes.shape()),
    topGenres: PropTypes.shape({}),
    topSongs: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      }),
    ),
    topSongsMedium: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      }),
    ),
    topSongsLong: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      }),
    ),
    topArtists: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      }),
    ),
    topArtistsMedium: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      }),
    ),
    topArtistsLong: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      }),
    ),
  }).isRequired,
  shareCassette: PropTypes.func.isRequired,
};
