/*
LoadingIcon: General purpose loading icon (simple SVG cassette animation).
*/
import React from "react";

export default function LoadingIcon() {
  return (
    <div>
      <svg
        width="395"
        height="208"
        viewBox="0 0 395 208"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="395" height="207" rx="17" fill="#5E5E5E" />
        <rect x="22" y="22" width="354" height="122" rx="17" fill="#8D8D8D" />
        <rect
          width="203.905"
          height="57.5397"
          rx="14.1818"
          transform="matrix(0.999997 -0.00260222 -0.000751556 1 96.9227 54.5249)"
          fill="#161616"
        />
        <g opacity="1" id="left-circle">
          <path
            d="M281.897 82.7931C281.889 92.7342 273.824 100.814 263.883 100.84C253.942 100.866 245.889 92.8279 245.897 82.8867C245.904 72.9456 253.969 64.8658 263.91 64.8399C273.851 64.814 281.904 72.8519 281.897 82.7931Z"
            fill="#D9D9D9"
          />
          <path
            d="M260.042 69.7942C261.218 65.7184 267.054 65.9119 267.958 70.0567L269.612 77.6431C269.778 78.4032 270.157 79.1001 270.705 79.6521L276.721 85.7137C279.67 88.6846 276.778 93.6431 272.743 92.5362L265.089 90.4369C264.366 90.2385 263.602 90.2432 262.882 90.4502L255.16 92.6689C251.22 93.8012 248.254 89.0684 250.99 86.0128L256.818 79.5028C257.228 79.0448 257.53 78.5001 257.7 77.9093L260.042 69.7942Z"
            fill="#0D0D0D"
          />
          <path
            d="M268.57 82.638C268.57 85.3275 266.391 87.5078 263.703 87.5078C261.015 87.5078 258.836 85.3275 258.836 82.6381C258.836 79.9486 261.015 77.7683 263.703 77.7683C266.391 77.7683 268.57 79.9486 268.57 82.638Z"
            fill="#4B4B4B"
          />
          <path
            d="M281.397 82.7927C281.389 92.4583 273.548 100.315 263.882 100.34C254.218 100.365 246.39 92.5514 246.397 82.8871C246.404 73.2215 254.246 65.3651 263.912 65.3399C273.576 65.3148 281.404 73.1284 281.397 82.7927ZM267.47 70.1632L269.124 77.7497C269.31 78.6026 269.735 79.3848 270.35 80.0044L276.366 86.0659C278.955 88.6742 276.415 93.0251 272.875 92.054L265.221 89.9547C264.41 89.7321 263.552 89.7372 262.743 89.9697L255.022 92.1883C251.565 93.1818 248.961 89.0289 251.363 86.3463L257.191 79.8363C257.651 79.3223 257.989 78.711 258.181 78.0479L260.522 69.9328C261.555 66.3558 266.676 66.5255 267.47 70.1632ZM270.101 77.5366L268.447 69.9502C267.432 65.2984 260.882 65.081 259.562 69.6555L257.22 77.7707C257.07 78.2893 256.806 78.7673 256.446 79.1693L250.618 85.6793C247.548 89.1078 250.874 94.4207 255.298 93.1495L263.02 90.9308C263.652 90.7491 264.322 90.745 264.957 90.9191L272.61 93.0184C277.141 94.2611 280.385 88.6949 277.076 85.3615L271.06 79.2999C270.579 78.8155 270.246 78.2038 270.101 77.5366ZM268.07 82.638C268.07 85.0517 266.114 87.0078 263.703 87.0078C261.291 87.0078 259.336 85.0517 259.336 82.6381C259.336 80.2244 261.291 78.2683 263.703 78.2683C266.114 78.2683 268.07 80.2244 268.07 82.638ZM263.703 88.0078C266.667 88.0078 269.07 85.6034 269.07 82.638C269.07 79.6727 266.667 77.2683 263.703 77.2683C260.739 77.2683 258.336 79.6727 258.336 82.6381C258.336 85.6034 260.739 88.0078 263.703 88.0078Z"
            stroke="#D9D9D9"
          />
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="360 263.9 83"
            to="0 263.9 83"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </g>
        <g opacity="1" id="right-circle">
          <path
            d="M150.969 82.9527C150.961 92.8939 142.897 100.974 132.955 101C123.014 101.025 114.962 92.9875 114.969 83.0464C114.976 73.1053 123.041 65.0254 132.982 64.9996C142.924 64.9737 150.976 73.0116 150.969 82.9527Z"
            fill="#D9D9D9"
          />
          <path
            d="M129.114 69.9538C130.29 65.8781 136.126 66.0716 137.03 70.2163L138.684 77.8028C138.85 78.5629 139.229 79.2598 139.777 79.8118L145.793 85.8734C148.742 88.8442 145.85 93.8027 141.815 92.6958L134.161 90.5965C133.438 90.3982 132.674 90.4028 131.954 90.6099L124.233 92.8286C120.292 93.9609 117.327 89.228 120.062 86.1724L125.89 79.6625C126.301 79.2045 126.602 78.6598 126.772 78.069L129.114 69.9538Z"
            fill="#0D0D0D"
          />
          <path
            d="M137.642 82.7977C137.642 85.4872 135.463 87.6675 132.775 87.6675C130.087 87.6675 127.908 85.4872 127.908 82.7977C127.908 80.1082 130.087 77.928 132.775 77.928C135.463 77.928 137.642 80.1082 137.642 82.7977Z"
            fill="#4B4B4B"
          />
          <path
            d="M150.469 82.9524C150.462 92.618 142.62 100.474 132.954 100.5C123.29 100.525 115.462 92.7111 115.469 83.0468C115.476 73.3812 123.318 65.5247 132.984 65.4996C142.648 65.4744 150.476 73.288 150.469 82.9524ZM136.542 70.3229L138.196 77.9093C138.382 78.7623 138.807 79.5445 139.422 80.164L145.439 86.2256C148.027 88.8338 145.488 93.1847 141.947 92.2136L134.294 90.1144C133.482 89.8917 132.625 89.8969 131.816 90.1294L124.094 92.348C120.637 93.3414 118.033 89.1886 120.435 86.5059L126.263 79.996C126.723 79.4819 127.062 78.8706 127.253 78.2076L129.595 70.0925C130.627 66.5154 135.748 66.6851 136.542 70.3229ZM139.173 77.6963L137.519 70.1098C136.504 65.4581 129.954 65.2407 128.634 69.8152L126.292 77.9304C126.142 78.4489 125.878 78.927 125.518 79.329L119.69 85.8389C116.62 89.2675 119.947 94.5804 124.371 93.3091L132.092 91.0905C132.724 90.9087 133.394 90.9047 134.029 91.0787L141.683 93.178C146.213 94.4207 149.457 88.8546 146.148 85.5212L140.132 79.4596C139.651 78.9751 139.318 78.3634 139.173 77.6963ZM137.142 82.7977C137.142 85.2113 135.187 87.1675 132.775 87.1675C130.364 87.1675 128.408 85.2113 128.408 82.7977C128.408 80.3841 130.364 78.428 132.775 78.428C135.187 78.428 137.142 80.3841 137.142 82.7977ZM132.775 88.1675C135.739 88.1675 138.142 85.7631 138.142 82.7977C138.142 79.8324 135.739 77.428 132.775 77.428C129.811 77.428 127.408 79.8324 127.408 82.7977C127.408 85.7631 129.811 88.1675 132.775 88.1675Z"
            stroke="#D9D9D9"
          />
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="360 133 83"
            to="0 133 83"
            dur="5s"
            repeatCount="indefinite"
          />
        </g>
        <rect
          width="68.3986"
          height="32.8798"
          transform="matrix(0.999997 -0.00260222 -0.000751556 1 164.022 66.0928)"
          fill="#D9D9D9"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M232.396 98.7848C222.36 98.5121 214.334 91.2913 214.341 82.4015C214.347 73.5118 222.384 66.2491 232.42 65.9242L232.396 98.7848Z"
          fill="#5E5E5E"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M180.799 66.0491L164.022 66.0928L163.997 98.9726L180.774 98.9289L180.774 98.9098C190.81 98.5848 198.847 91.3222 198.854 82.4324C198.861 73.5427 190.835 66.3219 180.799 66.0491L180.799 66.0491Z"
          fill="#5E5E5E"
        />
        <path
          d="M86.8364 206.755L99.2911 167.612H295.978L311.398 206.755H86.8364Z"
          fill="black"
          stroke="#5E5E5E"
          strokeWidth="1.22322"
          strokeLinejoin="bevel"
        />
        <path
          d="M125.798 188.914C128.106 192.246 128.402 196.039 126.459 197.385C124.515 198.732 121.068 197.123 118.76 193.791C116.451 190.46 116.155 186.667 118.098 185.32C120.042 183.974 123.489 185.583 125.798 188.914Z"
          fill="#D9D9D9"
        />
        <path
          d="M272.44 188.934C270.131 192.266 269.835 196.058 271.779 197.405C273.722 198.752 277.169 197.143 279.478 193.811C281.787 190.479 282.083 186.687 280.139 185.34C278.196 183.993 274.749 185.602 272.44 188.934Z"
          fill="#D9D9D9"
        />
        <path
          d="M200.804 173.469C202.343 175.69 201.79 178.738 199.569 180.277C197.348 181.816 194.3 181.263 192.761 179.042C191.222 176.821 191.774 173.773 193.996 172.234C196.217 170.695 199.265 171.247 200.804 173.469Z"
          fill="#5E5E5E"
        />
        <path
          d="M199.76 179.232L193.643 173.116"
          stroke="#161616"
          strokeWidth="1.22322"
        />
        <path
          d="M193.644 179.232L199.76 173.116"
          stroke="#161616"
          strokeWidth="1.22322"
        />
      </svg>
    </div>
  );
}
