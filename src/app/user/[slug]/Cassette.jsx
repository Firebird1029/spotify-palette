/**
 * General purpose cassette
 * Uses user profile display name,
 * side (A or B)
 * and userColors (color scheme)
 */
import PropTypes from "prop-types";
import { homemadeApple } from "@/fonts";

export default function Cassette({ userData, side, userColors }) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 550 312"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main color - dark */}
      <rect
        y="14.1818"
        width="549.545"
        height="212.727"
        rx="14.1818"
        fill={userColors.bg}
      />
      {/* End of main color - dark */}

      <rect
        x="33.6819"
        y="120.545"
        width="26.5909"
        height="40.7727"
        fill="#FF7269"
      />
      <path
        d="M60.2727 120.545H86.8636V161.318H60.2727V120.545Z"
        fill="#5C5C5C"
      />
      <path
        d="M60.2727 120.545H86.8636V161.318H60.2727V120.545Z"
        fill="#5C5C5C"
      />
      <path
        d="M86.8638 120.545H113.455V161.318H86.8638V120.545Z"
        fill="#8769FF"
      />
      <path
        d="M86.8638 120.545H113.455V161.318H86.8638V120.545Z"
        fill="#8769FF"
      />
      <path
        d="M113.455 120.545H140.046V161.318H113.455V120.545Z"
        fill="#FF69DE"
      />
      <path
        d="M113.455 120.545H140.046V161.318H113.455V120.545Z"
        fill="#FF69DE"
      />
      <rect
        x="405.955"
        y="120.545"
        width="26.5909"
        height="40.7727"
        fill="#E169FF"
      />
      <path
        d="M432.545 120.545H459.136V161.318H432.545V120.545Z"
        fill="#69FF8A"
      />
      <path
        d="M432.545 120.545H459.136V161.318H432.545V120.545Z"
        fill="#69FF8A"
      />
      <path
        d="M459.136 120.545H485.727V161.318H459.136V120.545Z"
        fill="#9069FF"
      />
      <path
        d="M459.136 120.545H485.727V161.318H459.136V120.545Z"
        fill="#9069FF"
      />
      <path
        d="M485.728 120.545H512.318V161.318H485.728V120.545Z"
        fill="#D5A807"
      />
      <path
        d="M485.728 120.545H512.318V161.318H485.728V120.545Z"
        fill="#D5A807"
      />

      {/* Light color band */}
      <rect
        y="49.6364"
        width="549.545"
        height="70.9091"
        fill={userColors.light}
      />
      {/* End of Light color band */}

      <path
        d="M54.0925 81.1623C53.3377 81.1623 52.6418 80.9684 52.0047 80.5807C51.3746 80.1929 50.8691 79.677 50.4882 79.033C50.1143 78.3821 49.9273 77.6688 49.9273 76.8932V75.9169C49.9273 75.8407 49.9619 75.8026 50.0312 75.8026H52.4202C52.4756 75.8026 52.5033 75.8407 52.5033 75.9169V76.8932C52.5033 77.3572 52.6591 77.7588 52.9707 78.0981C53.2823 78.4305 53.6563 78.5967 54.0925 78.5967C54.5357 78.5967 54.9131 78.4271 55.2247 78.0878C55.5363 77.7415 55.6921 77.3434 55.6921 76.8932C55.6921 76.3739 55.3528 75.9203 54.6742 75.5325C54.5634 75.4633 54.418 75.3802 54.2379 75.2832C54.0648 75.1794 53.8571 75.0617 53.6147 74.9301C53.3724 74.7985 53.1369 74.6704 52.9084 74.5458C52.6799 74.4142 52.4583 74.2896 52.2436 74.1718C51.4681 73.7148 50.8898 73.1435 50.509 72.458C50.1351 71.7655 49.9481 70.9899 49.9481 70.1313C49.9481 69.3418 50.142 68.6286 50.5298 67.9915C50.9175 67.3614 51.4231 66.8628 52.0463 66.4958C52.6764 66.1218 53.3585 65.9349 54.0925 65.9349C54.8473 65.9349 55.5398 66.1218 56.1699 66.4958C56.8001 66.8766 57.3021 67.3821 57.6761 68.0123C58.0569 68.6424 58.2474 69.3488 58.2474 70.1313V71.8763C58.2474 71.9317 58.2197 71.9594 58.1643 71.9594H55.7752C55.7198 71.9594 55.6921 71.9317 55.6921 71.8763L55.6714 70.1313C55.6714 69.6327 55.5156 69.2276 55.2039 68.916C54.8923 68.6044 54.5219 68.4486 54.0925 68.4486C53.6563 68.4486 53.2823 68.6147 52.9707 68.9471C52.6591 69.2795 52.5033 69.6742 52.5033 70.1313C52.5033 70.5952 52.6003 70.983 52.7941 71.2946C52.995 71.6062 53.3585 71.904 53.8848 72.1879C53.9402 72.2156 54.0683 72.2848 54.2691 72.3956C54.4699 72.5064 54.6915 72.6311 54.9339 72.7696C55.1832 72.9011 55.4082 73.0223 55.609 73.1331C55.8099 73.237 55.931 73.2993 55.9726 73.3201C56.6789 73.7148 57.2364 74.1995 57.6449 74.7743C58.0604 75.349 58.2681 76.0554 58.2681 76.8932C58.2681 77.7034 58.0812 78.4305 57.7072 79.0745C57.3264 79.7185 56.8209 80.2275 56.1907 80.6014C55.5606 80.9754 54.8612 81.1623 54.0925 81.1623ZM62.2568 80.9546H59.847C59.7777 80.9546 59.7431 80.92 59.7431 80.8507L59.7639 66.2361C59.7639 66.1807 59.7916 66.153 59.847 66.153H62.236C62.2914 66.153 62.3191 66.1807 62.3191 66.2361L62.3399 80.8507C62.3399 80.92 62.3122 80.9546 62.2568 80.9546ZM68.1255 80.9338L64.3134 80.9546C64.2442 80.9546 64.2095 80.92 64.2095 80.8507L64.2511 66.2361C64.2511 66.1807 64.2788 66.153 64.3342 66.153L68.3124 66.1322C69.1019 66.1115 69.8151 66.2915 70.4522 66.6724C71.0962 67.0532 71.6086 67.5691 71.9895 68.22C72.3772 68.864 72.5711 69.5773 72.5711 70.3598V76.4674C72.5711 77.2845 72.3738 78.0324 71.9791 78.711C71.5774 79.3827 71.0442 79.9193 70.3795 80.321C69.7147 80.7157 68.9634 80.92 68.1255 80.9338ZM68.3124 68.6771L66.8271 68.6978L66.8063 78.337H68.1255C68.6517 78.337 69.0949 78.1535 69.455 77.7865C69.8151 77.4195 69.9951 76.9798 69.9951 76.4674V70.339C69.9951 69.8889 69.8289 69.4976 69.4966 69.1653C69.1642 68.8259 68.7695 68.6632 68.3124 68.6771ZM81.2028 80.9546H74.3265C74.2712 80.9546 74.2435 80.92 74.2435 80.8507L74.2642 66.2361C74.2642 66.1807 74.2919 66.153 74.3473 66.153H81.182C81.2374 66.153 81.2651 66.1876 81.2651 66.2569V68.6355C81.2651 68.6909 81.2374 68.7186 81.182 68.7186H76.8194V72.0425H81.182C81.2374 72.0425 81.2651 72.0702 81.2651 72.1256L81.2859 74.5354C81.2859 74.5908 81.2582 74.6185 81.2028 74.6185H76.8194V78.337H81.2028C81.2582 78.337 81.2859 78.3717 81.2859 78.4409V80.8715C81.2859 80.9269 81.2582 80.9546 81.2028 80.9546Z"
        fill="black"
      />
      <path d="M129.409 82.4318H494.591" stroke="black" strokeWidth="1.77273" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.5909 0C11.9052 0 0 11.9052 0 26.5909V285.409C0 300.095 11.9052 312 26.5909 312H522.955C537.64 312 549.545 300.095 549.545 285.409V26.5909C549.545 11.9052 537.64 0 522.955 0H26.5909ZM53.1819 37.2273C43.3914 37.2273 35.4546 45.164 35.4546 54.9545V207.409C35.4546 217.2 43.3914 225.136 53.1819 225.136H494.591C504.381 225.136 512.318 217.2 512.318 207.409V54.9545C512.318 45.164 504.381 37.2273 494.591 37.2273H53.1819Z"
        fill="#161616"
      />
      <rect
        x="134.728"
        y="85.0909"
        width="280.091"
        height="86.8636"
        rx="14.1818"
        fill="#161616"
      />
      <circle cx="186.136" cy="127.636" r="26.5909" fill="#D9D9D9" />
      <circle cx="361.636" cy="127.636" r="26.5909" fill="#D9D9D9" />
      <rect
        x="226.909"
        y="102.818"
        width="93.9545"
        height="49.6364"
        fill="#D9D9D9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M320.864 152.44C307.078 151.989 296.045 141.057 296.045 127.636C296.045 114.216 307.078 103.284 320.864 102.833V152.44Z"
        fill="#5E5E5E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M249.955 102.818H226.909V152.455H249.955V102.818ZM274.773 127.622C274.773 141.042 263.74 151.975 249.955 152.426V102.818C263.74 103.269 274.773 114.202 274.773 127.622Z"
        fill="#5E5E5E"
      />
      <path
        d="M119.985 311.114L138.035 254.386H423.079L445.426 311.114H119.985Z"
        fill="black"
        stroke="#5E5E5E"
        strokeWidth="1.77273"
        strokeLinejoin="bevel"
      />
      <path
        d="M176.449 285.259C179.794 290.087 180.223 295.583 177.407 297.535C174.59 299.487 169.595 297.155 166.249 292.326C162.903 287.498 162.474 282.002 165.291 280.05C168.107 278.098 173.103 280.43 176.449 285.259Z"
        fill="#D9D9D9"
      />
      <path
        d="M388.967 285.288C385.622 290.116 385.193 295.613 388.009 297.564C390.826 299.516 395.821 297.184 399.167 292.356C402.513 287.527 402.942 282.031 400.125 280.079C397.309 278.128 392.313 280.46 388.967 285.288Z"
        fill="#D9D9D9"
      />
      <path
        d="M285.15 262.874C287.381 266.093 286.579 270.51 283.36 272.741C280.142 274.971 275.724 274.17 273.493 270.951C271.263 267.732 272.064 263.315 275.283 261.084C278.502 258.854 282.919 259.655 285.15 262.874Z"
        fill="#5E5E5E"
      />
      <path
        d="M283.637 271.227L274.773 262.364"
        stroke="#161616"
        strokeWidth="1.77273"
      />
      <path
        d="M274.773 271.227L283.636 262.364"
        stroke="#161616"
        strokeWidth="1.77273"
      />

      {/* Text items */}
      <foreignObject x="94.5" y="175.5" width="352" height="43">
        <div
          style={{ color: userColors.light }}
          id="tagline"
          className="w-full h-full flex justify-center items-center font-koulen text-3xl"
        >
          Listen to {userData.topArtists[0].name} much?
        </div>
      </foreignObject>
      <foreignObject x="83.5" y="55.5" width="35" height="65">
        <div
          id="side"
          className="w-full h-full flex justify-center items-center font-koulen text-6xl"
        >
          {side || "A"}
        </div>
      </foreignObject>
      <foreignObject x="129.5" y="55" width="365" height="35">
        <div
          id="username"
          className="w-full h-full flex justify-center items-center text-xl"
        >
          <div className={homemadeApple.className}>
            @ {userData.userProfile.display_name}
          </div>
        </div>
      </foreignObject>
    </svg>
  );
}

Cassette.propTypes = {
  userColors: PropTypes.shape({
    light: PropTypes.string.isRequired,
    bg: PropTypes.string.isRequired,
  }).isRequired,
  side: PropTypes.string,
  userData: PropTypes.shape({
    topArtists: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
    ),
    userProfile: PropTypes.shape({
      display_name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
