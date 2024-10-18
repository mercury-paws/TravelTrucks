import { FaLinux } from "react-icons/fa";

const MyCustomSVG = ({ svgName }) => {
  switch (svgName) {
    case "ac-icon":
      return (
        <svg
          width="32"
          height="28"
          viewBox="0 0 32 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25 2C23.6739 2 22.4021 2.52678 21.4645 3.46447C20.5268 4.40215 20 5.67392 20 7C20 7.26522 19.8946 7.51957 19.7071 7.70711C19.5196 7.89464 19.2652 8 19 8C18.7348 8 18.4804 7.89464 18.2929 7.70711C18.1054 7.51957 18 7.26522 18 7C18 5.61553 18.4105 4.26215 19.1797 3.11101C19.9489 1.95986 21.0421 1.06266 22.3212 0.532843C23.6003 0.00302917 25.0078 -0.135594 26.3656 0.134502C27.7235 0.404599 28.9708 1.07128 29.9497 2.05025C30.9287 3.02922 31.5954 4.2765 31.8655 5.63437C32.1356 6.99223 31.997 8.3997 31.4672 9.67878C30.9373 10.9579 30.0401 12.0511 28.889 12.8203C27.7378 13.5895 26.3845 14 25 14H1C0.734784 14 0.48043 13.8946 0.292893 13.7071C0.105357 13.5196 0 13.2652 0 13C0 12.7348 0.105357 12.4804 0.292893 12.2929C0.48043 12.1054 0.734784 12 1 12H25C26.3261 12 27.5979 11.4732 28.5355 10.5355C29.4732 9.59785 30 8.32608 30 7C30 5.67392 29.4732 4.40215 28.5355 3.46447C27.5979 2.52678 26.3261 2 25 2ZM11 4C10.4696 4 9.96086 4.21071 9.58579 4.58579C9.21071 4.96086 9 5.46957 9 6C9 6.26522 8.89464 6.51957 8.70711 6.70711C8.51957 6.89464 8.26522 7 8 7C7.73478 7 7.48043 6.89464 7.29289 6.70711C7.10536 6.51957 7 6.26522 7 6C7 5.20887 7.2346 4.43552 7.67412 3.77772C8.11365 3.11992 8.73836 2.60723 9.46927 2.30448C10.2002 2.00173 11.0044 1.92252 11.7804 2.07686C12.5563 2.2312 13.269 2.61216 13.8284 3.17157C14.3878 3.73098 14.7688 4.44371 14.9231 5.21964C15.0775 5.99556 14.9983 6.79983 14.6955 7.53073C14.3928 8.26164 13.8801 8.88635 13.2223 9.32588C12.5645 9.7654 11.7911 10 11 10H1C0.734784 10 0.48043 9.89464 0.292893 9.70711C0.105357 9.51957 0 9.26522 0 9C0 8.73478 0.105357 8.48043 0.292893 8.29289C0.48043 8.10536 0.734784 8 1 8H11C11.5304 8 12.0391 7.78929 12.4142 7.41421C12.7893 7.03914 13 6.53043 13 6C13 5.46957 12.7893 4.96086 12.4142 4.58579C12.0391 4.21071 11.5304 4 11 4ZM0 17C0 16.7348 0.105357 16.4804 0.292893 16.2929C0.48043 16.1054 0.734784 16 1 16H21.084C22.2707 16 23.4307 16.3519 24.4174 17.0112C25.4041 17.6705 26.1732 18.6075 26.6273 19.7039C27.0814 20.8003 27.2002 22.0067 26.9687 23.1705C26.7372 24.3344 26.1658 25.4035 25.3266 26.2426C24.4875 27.0818 23.4184 27.6532 22.2545 27.8847C21.0907 28.1162 19.8843 27.9974 18.7879 27.5433C17.6915 27.0892 16.7545 26.3201 16.0952 25.3334C15.4359 24.3467 15.084 23.1867 15.084 22C15.084 21.7348 15.1894 21.4804 15.3769 21.2929C15.5644 21.1054 15.8188 21 16.084 21C16.3492 21 16.6036 21.1054 16.7911 21.2929C16.9786 21.4804 17.084 21.7348 17.084 22C17.084 22.7911 17.3186 23.5645 17.7581 24.2223C18.1976 24.8801 18.8224 25.3928 19.5533 25.6955C20.2842 25.9983 21.0884 26.0775 21.8644 25.9231C22.6403 25.7688 23.353 25.3878 23.9124 24.8284C24.4718 24.269 24.8528 23.5563 25.0071 22.7804C25.1615 22.0044 25.0823 21.2002 24.7795 20.4693C24.4768 19.7384 23.9641 19.1136 23.3063 18.6741C22.6485 18.2346 21.8751 18 21.084 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17Z"
            fill="#101828"
          />
        </svg>
      );
    case "automatic-icon":
      return (
        <svg
          width="32"
          height="24"
          viewBox="0 0 32 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 3C12 2.20435 12.3161 1.44129 12.8787 0.87868C13.4413 0.316071 14.2044 0 15 0H17C17.7956 0 18.5587 0.316071 19.1213 0.87868C19.6839 1.44129 20 2.20435 20 3V5C20 5.79565 19.6839 6.55871 19.1213 7.12132C18.5587 7.68393 17.7956 8 17 8V10H28C28.2652 10 28.5196 10.1054 28.7071 10.2929C28.8946 10.4804 29 10.7348 29 11V13C29 13.2652 28.8946 13.5196 28.7071 13.7071C28.5196 13.8946 28.2652 14 28 14C27.7348 14 27.4804 13.8946 27.2929 13.7071C27.1054 13.5196 27 13.2652 27 13V12H17V13C17 13.2652 16.8946 13.5196 16.7071 13.7071C16.5196 13.8946 16.2652 14 16 14C15.7348 14 15.4804 13.8946 15.2929 13.7071C15.1054 13.5196 15 13.2652 15 13V12H5V13C5 13.2652 4.89464 13.5196 4.70711 13.7071C4.51957 13.8946 4.26522 14 4 14C3.73478 14 3.48043 13.8946 3.29289 13.7071C3.10536 13.5196 3 13.2652 3 13V11C3 10.7348 3.10536 10.4804 3.29289 10.2929C3.48043 10.1054 3.73478 10 4 10H15V8C14.2044 8 13.4413 7.68393 12.8787 7.12132C12.3161 6.55871 12 5.79565 12 5V3ZM17 6C17.2652 6 17.5196 5.89464 17.7071 5.70711C17.8946 5.51957 18 5.26522 18 5V3C18 2.73478 17.8946 2.48043 17.7071 2.29289C17.5196 2.10536 17.2652 2 17 2H15C14.7348 2 14.4804 2.10536 14.2929 2.29289C14.1054 2.48043 14 2.73478 14 3V5C14 5.26522 14.1054 5.51957 14.2929 5.70711C14.4804 5.89464 14.7348 6 15 6H17ZM0 19C0 18.2044 0.31607 17.4413 0.87868 16.8787C1.44129 16.3161 2.20435 16 3 16H5C5.79565 16 6.55871 16.3161 7.12132 16.8787C7.68393 17.4413 8 18.2044 8 19V21C8 21.7956 7.68393 22.5587 7.12132 23.1213C6.55871 23.6839 5.79565 24 5 24H3C2.20435 24 1.44129 23.6839 0.87868 23.1213C0.31607 22.5587 0 21.7956 0 21L0 19ZM3 18C2.73478 18 2.48043 18.1054 2.29289 18.2929C2.10536 18.4804 2 18.7348 2 19V21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H5C5.26522 22 5.51957 21.8946 5.70711 21.7071C5.89464 21.5196 6 21.2652 6 21V19C6 18.7348 5.89464 18.4804 5.70711 18.2929C5.51957 18.1054 5.26522 18 5 18H3ZM12 19C12 18.2044 12.3161 17.4413 12.8787 16.8787C13.4413 16.3161 14.2044 16 15 16H17C17.7956 16 18.5587 16.3161 19.1213 16.8787C19.6839 17.4413 20 18.2044 20 19V21C20 21.7956 19.6839 22.5587 19.1213 23.1213C18.5587 23.6839 17.7956 24 17 24H15C14.2044 24 13.4413 23.6839 12.8787 23.1213C12.3161 22.5587 12 21.7956 12 21V19ZM15 18C14.7348 18 14.4804 18.1054 14.2929 18.2929C14.1054 18.4804 14 18.7348 14 19V21C14 21.2652 14.1054 21.5196 14.2929 21.7071C14.4804 21.8946 14.7348 22 15 22H17C17.2652 22 17.5196 21.8946 17.7071 21.7071C17.8946 21.5196 18 21.2652 18 21V19C18 18.7348 17.8946 18.4804 17.7071 18.2929C17.5196 18.1054 17.2652 18 17 18H15ZM24 19C24 18.2044 24.3161 17.4413 24.8787 16.8787C25.4413 16.3161 26.2044 16 27 16H29C29.7956 16 30.5587 16.3161 31.1213 16.8787C31.6839 17.4413 32 18.2044 32 19V21C32 21.7956 31.6839 22.5587 31.1213 23.1213C30.5587 23.6839 29.7956 24 29 24H27C26.2044 24 25.4413 23.6839 24.8787 23.1213C24.3161 22.5587 24 21.7956 24 21V19ZM27 18C26.7348 18 26.4804 18.1054 26.2929 18.2929C26.1054 18.4804 26 18.7348 26 19V21C26 21.2652 26.1054 21.5196 26.2929 21.7071C26.4804 21.8946 26.7348 22 27 22H29C29.2652 22 29.5196 21.8946 29.7071 21.7071C29.8946 21.5196 30 21.2652 30 21V19C30 18.7348 29.8946 18.4804 29.7071 18.2929C29.5196 18.1054 29.2652 18 29 18H27Z"
            fill="#101828"
          />
        </svg>
      );
    case "kitchen-icon":
      return (
        <svg
          width="33"
          height="32"
          viewBox="0 0 33 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_12164_573)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.50009 12C1.35046 12.0001 1.20275 12.0337 1.06784 12.0984C0.93294 12.1632 0.814284 12.2574 0.720622 12.3741C0.626959 12.4907 0.560679 12.627 0.526666 12.7727C0.492653 12.9184 0.491774 13.0699 0.524095 13.216L3.82809 28.084C4.07472 29.1945 4.69264 30.1877 5.57986 30.8997C6.46707 31.6116 7.57054 31.9998 8.7081 32H20.2921C21.4297 31.9998 22.5331 31.6116 23.4203 30.8997C24.3076 30.1877 24.9255 29.1945 25.1721 28.084L25.4341 26.904C26.9639 27.1901 28.5451 26.8706 29.8438 26.0129C31.1425 25.1552 32.0571 23.8264 32.3945 22.307C32.7319 20.7876 32.4657 19.1966 31.6521 17.8698C30.8386 16.543 29.5413 15.5843 28.0341 15.196L28.4761 13.216C28.5084 13.0699 28.5075 12.9184 28.4735 12.7727C28.4395 12.627 28.3732 12.4907 28.2796 12.3741C28.1859 12.2574 28.0673 12.1632 27.9323 12.0984C27.7974 12.0337 27.6497 12.0001 27.5001 12H1.50009ZM26.5001 25C26.2884 25.0001 26.0771 24.9834 25.8681 24.95L27.6021 17.154C28.5271 17.4219 29.3245 18.0144 29.8479 18.8227C30.3714 19.631 30.5858 20.601 30.4518 21.5546C30.3179 22.5083 29.8446 23.3817 29.1187 24.0145C28.3928 24.6474 27.4631 24.9973 26.5001 25ZM5.7801 27.65L2.74609 14H26.2541L23.2201 27.65C23.0722 28.3164 22.7015 28.9124 22.1691 29.3396C21.6368 29.7669 20.9747 29.9998 20.2921 30H8.7081C8.02551 29.9998 7.36338 29.7669 6.83105 29.3396C6.29871 28.9124 5.92799 28.3164 5.7801 27.65Z"
              fill="#101828"
            />
            <path
              d="M9.3 1.6L9.294 1.608L9.266 1.646C9.12048 1.84624 8.98433 2.05313 8.858 2.266C8.75068 2.43664 8.65641 2.61515 8.576 2.8C8.524 2.92 8.508 2.984 8.502 3.006V3.014C8.52506 3.1908 8.58724 3.36024 8.684 3.51C8.834 3.776 9.04 4.054 9.3 4.4L9.32 4.424C9.556 4.74 9.84 5.118 10.06 5.51C10.284 5.91 10.5 6.42 10.5 7C10.5 7.376 10.37 7.736 10.262 7.988C10.1464 8.25615 10.0114 8.51551 9.858 8.764C9.7011 9.02626 9.53225 9.2812 9.352 9.528L9.316 9.578L9.306 9.594L9.302 9.598C9.14314 9.81043 8.90639 9.95106 8.64384 9.98895C8.38129 10.0268 8.11444 9.95886 7.902 9.8C7.68956 9.64113 7.54893 9.40438 7.51105 9.14183C7.47317 8.87928 7.54114 8.61244 7.7 8.4L7.706 8.392L7.734 8.354C7.87952 8.15375 8.01567 7.94687 8.142 7.734C8.24932 7.56336 8.34359 7.38485 8.424 7.2C8.476 7.08 8.492 7.016 8.498 6.994C8.47671 6.81459 8.41517 6.64231 8.318 6.49C8.13235 6.17971 7.92588 5.88236 7.7 5.6L7.68 5.576C7.40979 5.23062 7.16259 4.86783 6.94 4.49C6.66759 4.03945 6.51604 3.52625 6.5 3C6.5 2.624 6.63 2.264 6.738 2.012C6.856 1.736 7.006 1.464 7.142 1.236C7.30088 0.974982 7.46967 0.72013 7.648 0.471998L7.698 0.401999C7.85686 0.18956 8.09361 0.0489314 8.35616 0.0110491C8.61872 -0.0268333 8.88556 0.0411339 9.098 0.199999C9.31044 0.358863 9.45107 0.595612 9.48895 0.858163C9.52683 1.12071 9.45886 1.38756 9.3 1.6ZM15.3 1.6L15.294 1.608L15.266 1.646C15.1205 1.84624 14.9843 2.05313 14.858 2.266C14.7507 2.43664 14.6564 2.61515 14.576 2.8C14.524 2.92 14.508 2.984 14.502 3.006V3.014C14.5251 3.1908 14.5872 3.36024 14.684 3.51C14.834 3.776 15.04 4.054 15.3 4.4L15.32 4.424C15.556 4.74 15.84 5.118 16.06 5.51C16.284 5.91 16.5 6.42 16.5 7C16.5 7.376 16.37 7.736 16.262 7.988C16.1464 8.25615 16.0114 8.51551 15.858 8.764C15.7011 9.02626 15.5323 9.2812 15.352 9.528L15.316 9.578L15.306 9.594L15.302 9.598C15.1431 9.81043 14.9064 9.95106 14.6438 9.98895C14.3813 10.0268 14.1144 9.95886 13.902 9.8C13.6896 9.64113 13.5489 9.40438 13.5111 9.14183C13.4732 8.87928 13.5411 8.61244 13.7 8.4L13.706 8.392L13.734 8.354C13.8795 8.15375 14.0157 7.94687 14.142 7.734C14.2493 7.56336 14.3436 7.38485 14.424 7.2C14.476 7.08 14.492 7.016 14.498 6.994C14.4767 6.81459 14.4152 6.64231 14.318 6.49C14.1323 6.17971 13.9259 5.88236 13.7 5.6L13.68 5.576C13.4098 5.23062 13.1626 4.86783 12.94 4.49C12.6676 4.03945 12.516 3.52625 12.5 3C12.5 2.624 12.63 2.264 12.738 2.012C12.856 1.736 13.006 1.464 13.142 1.236C13.3009 0.974982 13.4697 0.72013 13.648 0.471998L13.698 0.401999C13.8569 0.18956 14.0936 0.0489314 14.3562 0.011049C14.6187 -0.0268333 14.8856 0.0411339 15.098 0.199999C15.3104 0.358863 15.4511 0.595612 15.4889 0.858163C15.5268 1.12071 15.4589 1.38756 15.3 1.6ZM21.3 1.6L21.294 1.608L21.266 1.646C21.1205 1.84624 20.9843 2.05313 20.858 2.266C20.7507 2.43664 20.6564 2.61515 20.576 2.8C20.524 2.92 20.508 2.984 20.502 3.006V3.014C20.5251 3.1908 20.5872 3.36024 20.684 3.51C20.834 3.776 21.04 4.054 21.3 4.4L21.32 4.424C21.556 4.74 21.84 5.118 22.06 5.51C22.284 5.91 22.5 6.42 22.5 7C22.5 7.376 22.37 7.736 22.262 7.988C22.1464 8.25615 22.0114 8.51551 21.858 8.764C21.7017 9.02622 21.5336 9.28116 21.354 9.528L21.316 9.578L21.306 9.594L21.302 9.598C21.1431 9.81043 20.9064 9.95106 20.6438 9.98895C20.3813 10.0268 20.1144 9.95886 19.902 9.8C19.6896 9.64113 19.5489 9.40438 19.5111 9.14183C19.4732 8.87928 19.5411 8.61244 19.7 8.4L19.706 8.392L19.734 8.354C19.8795 8.15375 20.0157 7.94687 20.142 7.734C20.2493 7.56336 20.3436 7.38485 20.424 7.2C20.476 7.08 20.492 7.016 20.498 6.994C20.4767 6.81459 20.4152 6.64231 20.318 6.49C20.1324 6.17971 19.9259 5.88236 19.7 5.6L19.68 5.576C19.4098 5.23062 19.1626 4.86783 18.94 4.49C18.6676 4.03945 18.516 3.52625 18.5 3C18.5 2.624 18.63 2.264 18.738 2.012C18.856 1.736 19.006 1.464 19.142 1.236C19.3009 0.974982 19.4697 0.72013 19.648 0.471998L19.698 0.401999C19.8569 0.18956 20.0936 0.0489314 20.3562 0.011049C20.6187 -0.0268333 20.8856 0.0411339 21.098 0.199999C21.3104 0.358863 21.4511 0.595612 21.4889 0.858163C21.5268 1.12071 21.4589 1.38756 21.3 1.6Z"
              fill="#101828"
            />
          </g>
          <defs>
            <clipPath id="clip0_12164_573">
              <rect
                width="32"
                height="32"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      );
    case "tv-icon":
      return (
        <svg
          width="32"
          height="25"
          viewBox="0 0 32 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 4C0 4 0 0 4 0H28C28 0 32 0 32 4V16C32 16 32 20 28 20H20C20 21.3333 20.1667 22.3333 20.5 23H22C22.2652 23 22.5196 23.1054 22.7071 23.2929C22.8946 23.4804 23 23.7348 23 24C23 24.2652 22.8946 24.5196 22.7071 24.7071C22.5196 24.8946 22.2652 25 22 25H10C9.73478 25 9.48043 24.8946 9.29289 24.7071C9.10536 24.5196 9 24.2652 9 24C9 23.7348 9.10536 23.4804 9.29289 23.2929C9.48043 23.1054 9.73478 23 10 23H11.5C11.8333 22.3333 12 21.3333 12 20H4C4 20 0 20 0 16V4ZM2.796 2.29C2.57644 2.44309 2.4012 2.65145 2.288 2.894C2.11952 3.24697 2.02168 3.62948 2 4.02V16C2 16.65 2.156 17.004 2.29 17.204C2.43 17.412 2.63133 17.5813 2.894 17.712C3.23168 17.8736 3.59663 17.9706 3.97 17.998L4.02 18H28C28.65 18 29.004 17.844 29.204 17.71C29.4236 17.5569 29.5988 17.3486 29.712 17.106C29.8736 16.7683 29.9706 16.4034 29.998 16.03L30 15.98V4C30 3.35 29.844 2.996 29.71 2.796C29.5569 2.57644 29.3486 2.4012 29.106 2.288C28.753 2.11952 28.3705 2.02168 27.98 2H4C3.35 2 2.996 2.156 2.796 2.29Z"
            fill="#101828"
          />
        </svg>
      );
    case "bathroom-icon":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.42 1.6C15.38 0.59 16 0 16 0C16.2187 0.725333 16.466 1.41733 16.742 2.076C18.366 5.968 20.888 8.776 23.136 11.276C25.756 14.192 28 16.69 28 20C28 23.1826 26.7357 26.2348 24.4853 28.4853C22.2348 30.7357 19.1826 32 16 32C12.8174 32 9.76515 30.7357 7.51472 28.4853C5.26428 26.2348 4 23.1826 4 20C4 13.336 11.16 5.034 14.42 1.6ZM15.246 3.642C13.9611 5.03141 12.7405 6.47893 11.588 7.98C10.136 9.88 8.716 11.996 7.668 14.12C6.608 16.266 6 18.276 6 20C6 22.6522 7.05357 25.1957 8.92893 27.0711C10.8043 28.9464 13.3478 30 16 30C18.6522 30 21.1957 28.9464 23.0711 27.0711C24.9464 25.1957 26 22.6522 26 20C26 17.598 24.408 15.686 21.638 12.6L21.578 12.536C19.5 10.22 17 7.442 15.246 3.642Z"
            fill="#101828"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.10596 15.552C10.746 12.27 12.54 10.046 13.292 9.29199L14.708 10.708C14.128 11.288 12.452 13.33 10.894 16.448L9.10596 15.552Z"
            fill="#101828"
          />
        </svg>
      );
    case "van-icon":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_12164_590)">
            <path
              d="M12 2H2V30H12V2ZM30 2H20V12H30V2ZM30 20V30H20V20H30ZM0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0L12 0C12.5304 0 13.0391 0.210714 13.4142 0.585786C13.7893 0.960859 14 1.46957 14 2V30C14 30.5304 13.7893 31.0391 13.4142 31.4142C13.0391 31.7893 12.5304 32 12 32H2C1.46957 32 0.960859 31.7893 0.585786 31.4142C0.210714 31.0391 0 30.5304 0 30V2ZM18 2C18 1.46957 18.2107 0.960859 18.5858 0.585786C18.9609 0.210714 19.4696 0 20 0L30 0C30.5304 0 31.0391 0.210714 31.4142 0.585786C31.7893 0.960859 32 1.46957 32 2V12C32 12.5304 31.7893 13.0391 31.4142 13.4142C31.0391 13.7893 30.5304 14 30 14H20C19.4696 14 18.9609 13.7893 18.5858 13.4142C18.2107 13.0391 18 12.5304 18 12V2ZM20 18C19.4696 18 18.9609 18.2107 18.5858 18.5858C18.2107 18.9609 18 19.4696 18 20V30C18 30.5304 18.2107 31.0391 18.5858 31.4142C18.9609 31.7893 19.4696 32 20 32H30C30.5304 32 31.0391 31.7893 31.4142 31.4142C31.7893 31.0391 32 30.5304 32 30V20C32 19.4696 31.7893 18.9609 31.4142 18.5858C31.0391 18.2107 30.5304 18 30 18H20Z"
              fill="#101828"
            />
          </g>
          <defs>
            <clipPath id="clip0_12164_590">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "integrated-icon":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2H11C11.7956 2 12.5587 2.31607 13.1213 2.87868C13.6839 3.44129 14 4.20435 14 5V11C14 11.7956 13.6839 12.5587 13.1213 13.1213C12.5587 13.6839 11.7956 14 11 14H5C4.20435 14 3.44129 13.6839 2.87868 13.1213C2.31607 12.5587 2 11.7956 2 11V5ZM5 4C4.73478 4 4.48043 4.10536 4.29289 4.29289C4.10536 4.48043 4 4.73478 4 5V11C4 11.2652 4.10536 11.5196 4.29289 11.7071C4.48043 11.8946 4.73478 12 5 12H11C11.2652 12 11.5196 11.8946 11.7071 11.7071C11.8946 11.5196 12 11.2652 12 11V5C12 4.73478 11.8946 4.48043 11.7071 4.29289C11.5196 4.10536 11.2652 4 11 4H5ZM18 5C18 4.20435 18.3161 3.44129 18.8787 2.87868C19.4413 2.31607 20.2044 2 21 2H27C27.7956 2 28.5587 2.31607 29.1213 2.87868C29.6839 3.44129 30 4.20435 30 5V11C30 11.7956 29.6839 12.5587 29.1213 13.1213C28.5587 13.6839 27.7956 14 27 14H21C20.2044 14 19.4413 13.6839 18.8787 13.1213C18.3161 12.5587 18 11.7956 18 11V5ZM21 4C20.7348 4 20.4804 4.10536 20.2929 4.29289C20.1054 4.48043 20 4.73478 20 5V11C20 11.2652 20.1054 11.5196 20.2929 11.7071C20.4804 11.8946 20.7348 12 21 12H27C27.2652 12 27.5196 11.8946 27.7071 11.7071C27.8946 11.5196 28 11.2652 28 11V5C28 4.73478 27.8946 4.48043 27.7071 4.29289C27.5196 4.10536 27.2652 4 27 4H21ZM2 21C2 20.2044 2.31607 19.4413 2.87868 18.8787C3.44129 18.3161 4.20435 18 5 18H11C11.7956 18 12.5587 18.3161 13.1213 18.8787C13.6839 19.4413 14 20.2044 14 21V27C14 27.7956 13.6839 28.5587 13.1213 29.1213C12.5587 29.6839 11.7956 30 11 30H5C4.20435 30 3.44129 29.6839 2.87868 29.1213C2.31607 28.5587 2 27.7956 2 27V21ZM5 20C4.73478 20 4.48043 20.1054 4.29289 20.2929C4.10536 20.4804 4 20.7348 4 21V27C4 27.2652 4.10536 27.5196 4.29289 27.7071C4.48043 27.8946 4.73478 28 5 28H11C11.2652 28 11.5196 27.8946 11.7071 27.7071C11.8946 27.5196 12 27.2652 12 27V21C12 20.7348 11.8946 20.4804 11.7071 20.2929C11.5196 20.1054 11.2652 20 11 20H5ZM18 21C18 20.2044 18.3161 19.4413 18.8787 18.8787C19.4413 18.3161 20.2044 18 21 18H27C27.7956 18 28.5587 18.3161 29.1213 18.8787C29.6839 19.4413 30 20.2044 30 21V27C30 27.7956 29.6839 28.5587 29.1213 29.1213C28.5587 29.6839 27.7956 30 27 30H21C20.2044 30 19.4413 29.6839 18.8787 29.1213C18.3161 28.5587 18 27.7956 18 27V21ZM21 20C20.7348 20 20.4804 20.1054 20.2929 20.2929C20.1054 20.4804 20 20.7348 20 21V27C20 27.2652 20.1054 27.5196 20.2929 27.7071C20.4804 27.8946 20.7348 28 21 28H27C27.2652 28 27.5196 27.8946 27.7071 27.7071C27.8946 27.5196 28 27.2652 28 27V21C28 20.7348 27.8946 20.4804 27.7071 20.2929C27.5196 20.1054 27.2652 20 27 20H21Z"
            fill="#101828"
          />
        </svg>
      );
    case "alcove-icon":
      return (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 2V6H2V2H6ZM8 26V22C8 21.4696 7.78929 20.9609 7.41421 20.5858C7.03914 20.2107 6.53043 20 6 20H2C1.46957 20 0.960859 20.2107 0.585786 20.5858C0.210714 20.9609 0 21.4696 0 22V26C0 26.5304 0.210714 27.0391 0.585786 27.4142C0.960859 27.7893 1.46957 28 2 28H6C6.53043 28 7.03914 27.7893 7.41421 27.4142C7.78929 27.0391 8 26.5304 8 26ZM8 16V12C8 11.4696 7.78929 10.9609 7.41421 10.5858C7.03914 10.2107 6.53043 10 6 10H2C1.46957 10 0.960859 10.2107 0.585786 10.5858C0.210714 10.9609 0 11.4696 0 12V16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H6C6.53043 18 7.03914 17.7893 7.41421 17.4142C7.78929 17.0391 8 16.5304 8 16ZM8 6V2C8 1.46957 7.78929 0.960859 7.41421 0.585786C7.03914 0.210714 6.53043 0 6 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V6C0 6.53043 0.210714 7.03914 0.585786 7.41421C0.960859 7.78929 1.46957 8 2 8H6C6.53043 8 7.03914 7.78929 7.41421 7.41421C7.78929 7.03914 8 6.53043 8 6ZM18 26V22C18 21.4696 17.7893 20.9609 17.4142 20.5858C17.0391 20.2107 16.5304 20 16 20H12C11.4696 20 10.9609 20.2107 10.5858 20.5858C10.2107 20.9609 10 21.4696 10 22V26C10 26.5304 10.2107 27.0391 10.5858 27.4142C10.9609 27.7893 11.4696 28 12 28H16C16.5304 28 17.0391 27.7893 17.4142 27.4142C17.7893 27.0391 18 26.5304 18 26ZM18 16V12C18 11.4696 17.7893 10.9609 17.4142 10.5858C17.0391 10.2107 16.5304 10 16 10H12C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12V16C10 16.5304 10.2107 17.0391 10.5858 17.4142C10.9609 17.7893 11.4696 18 12 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16ZM18 6V2C18 1.46957 17.7893 0.960859 17.4142 0.585786C17.0391 0.210714 16.5304 0 16 0H12C11.4696 0 10.9609 0.210714 10.5858 0.585786C10.2107 0.960859 10 1.46957 10 2V6C10 6.53043 10.2107 7.03914 10.5858 7.41421C10.9609 7.78929 11.4696 8 12 8H16C16.5304 8 17.0391 7.78929 17.4142 7.41421C17.7893 7.03914 18 6.53043 18 6ZM16 2V6H12V2H16ZM26 2V6H22V2H26ZM6 12V16H2V12H6ZM16 12V16H12V12H16ZM26 12H22V16H26V12ZM6 22V26H2V22H6ZM16 22V26H12V22H16ZM26 22V26H22V22H26ZM22 0C21.4696 0 20.9609 0.210714 20.5858 0.585786C20.2107 0.960859 20 1.46957 20 2V6C20 6.53043 20.2107 7.03914 20.5858 7.41421C20.9609 7.78929 21.4696 8 22 8H26C26.5304 8 27.0391 7.78929 27.4142 7.41421C27.7893 7.03914 28 6.53043 28 6V2C28 1.46957 27.7893 0.960859 27.4142 0.585786C27.0391 0.210714 26.5304 0 26 0H22ZM20 12C20 11.4696 20.2107 10.9609 20.5858 10.5858C20.9609 10.2107 21.4696 10 22 10H26C26.5304 10 27.0391 10.2107 27.4142 10.5858C27.7893 10.9609 28 11.4696 28 12V16C28 16.5304 27.7893 17.0391 27.4142 17.4142C27.0391 17.7893 26.5304 18 26 18H22C21.4696 18 20.9609 17.7893 20.5858 17.4142C20.2107 17.0391 20 16.5304 20 16V12ZM22 20C21.4696 20 20.9609 20.2107 20.5858 20.5858C20.2107 20.9609 20 21.4696 20 22V26C20 26.5304 20.2107 27.0391 20.5858 27.4142C20.9609 27.7893 21.4696 28 22 28H26C26.5304 28 27.0391 27.7893 27.4142 27.4142C27.7893 27.0391 28 26.5304 28 26V22C28 21.4696 27.7893 20.9609 27.4142 20.5858C27.0391 20.2107 26.5304 20 26 20H22Z"
            fill="#101828"
          />
        </svg>
      );
    case "heart-icon":
      return (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <svg
            width="26"
            height="24"
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 9.854L11.659 7.1705C11.326 6.506 10.7485 5.5505 9.931 4.778C9.127 4.0175 8.164 3.5 7 3.5C4.486 3.5 2.5 5.489 2.5 7.88C2.5 9.6965 3.331 10.979 5.302 12.935C5.8075 13.436 6.3835 13.9775 7.021 14.5745C8.683 16.1345 10.75 18.0755 13 20.6705C15.25 18.0755 17.317 16.1345 18.979 14.5745C19.6165 13.9775 20.194 13.4345 20.698 12.935C22.669 10.979 23.5 9.6965 23.5 7.88C23.5 5.489 21.514 3.5 19 3.5C17.8345 3.5 16.873 4.0175 16.069 4.778C15.2515 5.5505 14.674 6.506 14.341 7.1705L13 9.854ZM13.588 22.292C13.5158 22.3776 13.4257 22.4463 13.3242 22.4935C13.2226 22.5407 13.112 22.5651 13 22.5651C12.888 22.5651 12.7774 22.5407 12.6758 22.4935C12.5743 22.4463 12.4842 22.3776 12.412 22.292C10.0105 19.439 7.837 17.399 6.0475 15.7205C2.95 12.812 1 10.9835 1 7.88C1 4.6325 3.685 2 7 2C9.4 2 11.0785 3.575 12.106 5.012C12.496 5.5595 12.793 6.086 13 6.5C13.2597 5.982 13.5586 5.48456 13.894 5.012C14.9215 3.5735 16.6 2 19 2C22.315 2 25 4.6325 25 7.88C25 10.9835 23.05 12.812 19.9525 15.7205C18.163 17.4005 15.9895 19.442 13.588 22.292Z"
              fill="#101828"
            />
          </svg>
        </svg>
      );
    default:
      return <FaLinux />;
  }
};

export default MyCustomSVG;
