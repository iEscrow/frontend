export const arrows = {
  up: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <g filter="url(#filter0_d_1702_1297)">
        <rect
          x="22"
          y="20"
          width="20"
          height="20"
          rx="10"
          transform="rotate(-180 22 20)"
          className="text-white dark:text-blue"
        />
      </g>
      <path
        d="M15.825 13L12 9.18333L8.175 13L7 11.825L12 6.825L17 11.825L15.825 13Z"
        className="dark:text-white text-blue"
      />
      <defs>
        <filter
          id="filter0_d_1702_1297"
          x="0"
          y="0"
          width="24"
          height="24"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1702_1297"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1702_1297"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  ),

  down: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <g filter="url(#filter0_d_1702_1277)">
        <rect
          x="2"
          width="20"
          height="20"
          rx="10"
          className="text-white dark:text-blue"
        />
      </g>
      <path
        d="M8.175 8L12 11.8167L15.825 8L17 9.175L12 14.175L7 9.175L8.175 8Z"
        className="dark:text-white text-blue"
      />
      <defs>
        <filter
          id="filter0_d_1702_1277"
          x="0"
          y="0"
          width="24"
          height="24"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1702_1277"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1702_1277"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  ),
};
