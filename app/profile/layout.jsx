import { Suspense } from "react";
import ProfileLinks from "./_components/ProfileLinks";

const ProfileLayout = ({ children }) => {
  return (
    <div className="container mt-10">
      <div className="w-full md:w-[95%] 2xl:w-[90%] mx-auto">
        <div className="rounded-[40px] grid place-items-center bg-[linear-gradient(111deg,_rgba(135,50,227,0.5)_41.17%,_rgba(255,21,185,0.5)_100.77%)] backdrop-blur-[100px] h-64 ">
          <div className="grid place-items-center">
            <Suspense>
              <UserInfo />
            </Suspense>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 my-11 ">
          {/* navigation */}
          <ProfileLinks />

          <div className="w-full lg:w-auto flex-1">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;

function UserInfo() {
  const { data } = { name: "Abid", phone: "01879939332" };

  return (
    <>
      <svg
        width={128}
        height={128}
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_dd_10_5678)">
          <rect
            x={14}
            y={10}
            width={100}
            height={100}
            rx={50}
            fill="white"
            shapeRendering="crispEdges"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M64 10C36.385 10 14 32.385 14 60C14 87.615 36.385 110 64 110C91.615 110 114 87.615 114 60C114 32.385 91.615 10 64 10ZM46.5 47.5C46.5 45.2019 46.9526 42.9262 47.8321 40.803C48.7116 38.6798 50.0006 36.7507 51.6256 35.1256C53.2507 33.5006 55.1798 32.2116 57.303 31.3321C59.4262 30.4527 61.7019 30 64 30C66.2981 30 68.5738 30.4527 70.697 31.3321C72.8202 32.2116 74.7493 33.5006 76.3744 35.1256C77.9994 36.7507 79.2884 38.6798 80.1679 40.803C81.0473 42.9262 81.5 45.2019 81.5 47.5C81.5 52.1413 79.6562 56.5925 76.3744 59.8744C73.0925 63.1562 68.6413 65 64 65C59.3587 65 54.9075 63.1562 51.6256 59.8744C48.3437 56.5925 46.5 52.1413 46.5 47.5ZM95.29 84.92C91.5472 89.6281 86.789 93.4298 81.3708 96.041C75.9527 98.6523 70.0146 100.006 64 100C57.9854 100.006 52.0473 98.6523 46.6292 96.041C41.211 93.4298 36.4528 89.6281 32.71 84.92C40.815 79.105 51.875 75 64 75C76.125 75 87.185 79.105 95.29 84.92Z"
            fill="#FF9923"
            stroke="white"
            strokeWidth={5}
          />
        </g>
        <defs>
          <filter
            id="filter0_dd_10_5678"
            x="0.5"
            y="0.5"
            width={127}
            height={127}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={1} />
            <feGaussianBlur stdDeviation="1.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_10_5678"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius={3}
              operator="dilate"
              in="SourceAlpha"
              result="effect2_dropShadow_10_5678"
            />
            <feOffset dy={4} />
            <feGaussianBlur stdDeviation={4} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_10_5678"
              result="effect2_dropShadow_10_5678"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_10_5678"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      <p className="text-2xl font-extrabold capitalize">{data?.name}</p>
      <p className="text-base text-[#D5BBF2]">{data?.email || data?.phone}</p>
    </>
  );
}
