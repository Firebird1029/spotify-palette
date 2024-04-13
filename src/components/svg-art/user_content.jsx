/*
The content of the /user/[slug] page.
Contains info about a user's top genres, top artists, top songs, and song analysis.
*/

import { ResponsiveRadar } from "@nivo/radar";
import { ResponsivePie } from "@nivo/pie";
import { useState, useEffect, useRef } from "react";
import "@/app/globals.css";
import PropTypes from "prop-types";

function VinylCircle({ centerCircleColor, width }) {
  const newWidth = Math.min((width - 280) / 2, 160);
  const radii = [];
  if (newWidth > 0) {
    for (let i = newWidth - 1; i > 10; i -= 3) {
      radii.push(i);
    }
  }

  return (
    <svg width={Math.min(400, width)} height="400" data-testid="VinylCircle">
      {radii.map((radius) => (
        <circle
          key={radius}
          r={radius}
          cx="200"
          cy="200"
          fill="none"
          stroke="black"
          strokeWidth="1.35"
        />
      ))}
      <circle
        r={Math.round(newWidth * 0.15625)}
        cx="200"
        cy="200"
        fill="none"
        stroke={centerCircleColor}
        strokeWidth={Math.round(newWidth * 0.2)}
      />
      <circle
        r={Math.round(newWidth * 0.275)}
        cx="200"
        cy="200"
        fill="none"
        stroke="black"
        strokeWidth={Math.round(newWidth * 0.05)}
      />
    </svg>
  );
}

function GenrePieChart({ data, centerCircleColor }) {
  const [divWidth, setDivWidth] = useState(0); // Step 1: State for storing div width
  const divRef = useRef(null); // Step 2: Ref for the div

  // Step 3: Effect hook for setting and updating div width
  useEffect(() => {
    // Function to update div width
    const updateWidth = () => {
      if (divRef.current) {
        setDivWidth(divRef.current.offsetWidth); // Update div width
      }
    };

    window.addEventListener("resize", updateWidth); // Add resize event listener
    updateWidth(); // Initial update

    return () => window.removeEventListener("resize", updateWidth); // Cleanup
  }, []);

  return (
    <div
      ref={divRef}
      style={{ height: 440, position: "relative" }}
      data-testid="GenrePieChart"
    >
      <ResponsivePie
        data={data}
        margin={{ top: 70, right: 140, bottom: 50, left: 140 }}
        innerRadius={0.3}
        keys={["value"]}
        colors={["#8D97A9", "#BDC8DA", "#121D2A", "#737D8E", "#1F2937"]}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        enableArcLabels={false}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
        isInteractive={false}
        animate={false}
        legends={[]}
        theme={{
          text: {
            fontSize: 20,
            fill: "#333333",
            outlineWidth: 0,
            outlineColor: "transparent",
            fontFamily: "Koulen",
          },
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 0,
          bottom: 0,
          left: Math.min(0, divWidth - 400),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <VinylCircle centerCircleColor={centerCircleColor} width={divWidth} />
      </div>
    </div>
  );
}

function UserContent({ userData, shareCassette }) {
  // Convert object to array of { id: genre, value: frequency } objects
  const top5Genres = Object.entries(userData.topGenres)
    .sort((a, b) => b[1] - a[1]) // Sort genres by frequency in descending order
    .slice(0, 5) // Get the top 5 genres
    .map(([id, value]) => ({ id, value })); // Map to { id: genre, value: frequency } objects

  return (
    <div
      className="flex flex-col \
                    md:grid md:grid-cols-2 md:p-8"
    >
      {/* <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Koulen&display=swap');
      </style> */}

      <div className="bg-[#39466B] rounded-lg p-4 flex flex-col">
        <p className="text-white text-5xl font-koulen mb-24 mr-4 mt-4 ml-4">
          @{userData.userProfile.display_name}
        </p>
        <div className="flex flex-row justify-center">
          {/* <button
            type="button"
            className="bg-gray-300 rounded-full py-2.5 px-4 flex items-center mr-4"
            style={{
              cursor: "pointer",
              backgroundColor: "#D9D9D9",
              fontSize: 20,
            }}
            onClick={unify}
          >
            <span className="font-koulen text-gray-800 mr-2">Unify</span>
          </button> */}
          <button
            type="button"
            className="bg-gray-300 rounded-full py-2.5 px-4 flex items-center"
            style={{
              cursor: "pointer",
              backgroundColor: "#D9D9D9",
              fontSize: 20,
            }}
            onClick={shareCassette}
          >
            <span className="font-koulen text-[#273049] mr-2">
              Share Cassette
            </span>
          </button>
        </div>
      </div>
      <div className="bg-gray-100 rounded-lg p-4 ml-4 flex"> </div>
      <div className="rounded-lg p-4 mt-4 ml-4 justify-center">
        <div
          className="text-black text-l font-koulen"
          style={{
            fontSize: 45,
          }}
        >
          {" "}
          TOP GENRES:{" "}
        </div>
        {top5Genres ? (
          <GenrePieChart data={top5Genres} centerCircleColor="#39466B" />
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div className="bg-gray-100 rounded-lg p-4 mt-4 ml-4 flex">
        <div className="text-black text-l font-koulen" style={{ fontSize: 50 }}>
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
        <div className="text-black text-l font-koulen" style={{ fontSize: 50 }}>
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

VinylCircle.propTypes = {
  centerCircleColor: PropTypes.string,
  width: PropTypes.number,
};
VinylCircle.defaultProps = {
  centerCircleColor: "#1d40af",
  width: PropTypes.number,
};

GenrePieChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ).isRequired,
  centerCircleColor: PropTypes.string,
};

GenrePieChart.defaultProps = {
  centerCircleColor: "#1d40af", // Default color value
};

export { VinylCircle, GenrePieChart };
