import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoImg from "@/public/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-12 pb-6 [&_a]:hover:text-primary [&_a]:hover:translate-x-1 [&_a]:transition-all">
      <div className="flex gap-10 flex-wrap container justify-between [&_li]:mb-2.5">
        <div className="lg:pr-20">
          <Image src={logoImg} alt="logo" className="w-30 lg:w-34" />
          <p className="text-gray-600 text-sm max-w-[400px] mt-5">
            We craft high-performance web solutions with Laravel, PHP, and
            modern DevOps practices.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/NiamahShopofficial"
              blank
              className=""
            >
              <svg
                width={24}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5l0-170.3-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 175.9C413.8 494.8 512 386.9 512 256z" />
              </svg>
            </a>
            <a href="www.youtube.com" blank className="">
              <svg
                fill="#000000"
                width={24}
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-143 145 512 512"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <polygon points="78.9,450.3 162.7,401.1 78.9,351.9 "></polygon>{" "}
                    <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M241,446.8L241,446.8 c0,44.1-44.1,44.1-44.1,44.1H29.1c-44.1,0-44.1-44.1-44.1-44.1v-91.5c0-44.1,44.1-44.1,44.1-44.1h167.8c44.1,0,44.1,44.1,44.1,44.1 V446.8z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </a>
            <a
              href="whatsapp://send?NiamahShop=01740717473&text=Assalamualaikum!"
              className=""
            >
              <svg
                width={24}
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>whatsapp_fill</title>{" "}
                  <g
                    id="页面-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    {" "}
                    <g
                      id="Brand"
                      transform="translate(-864.000000, -48.000000)"
                    >
                      {" "}
                      <g
                        id="whatsapp_fill"
                        transform="translate(864.000000, 48.000000)"
                      >
                        {" "}
                        <path
                          d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                          id="MingCute"
                          fill-rule="nonzero"
                        >
                          {" "}
                        </path>{" "}
                        <path
                          d="M12,2 C6.47715,2 2,6.47715 2,12 C2,13.8896 2.52505,15.6594 3.43756,17.1683 L2.54581,20.2002 C2.32023,20.9672 3.03284,21.6798 3.79975,21.4542 L6.83171,20.5624 C8.34058,21.475 10.1104,22 12,22 C17.5228,22 22,17.5228 22,12 C22,6.47715 17.5228,2 12,2 Z M9.73821,14.2627 C11.7607,16.2852 13.692,16.5518 14.3739,16.5769 C15.4111,16.6151 16.421,15.823 16.8147,14.9042 C16.9112,14.6792 16.8871,14.4085 16.7255,14.2014 C16.1782,13.5005 15.4373,12.9983 14.7134,12.4984 C14.4006,12.282 13.9705,12.349 13.7401,12.6555 L13.1394,13.5706 C13.0727,13.6721 12.9402,13.707 12.8348,13.6467 C12.4283,13.4143 11.8356,13.018 11.4092,12.5916 C10.9833,12.1657 10.6111,11.5998 10.4022,11.2195 C10.3473,11.1195 10.3777,10.996 10.4692,10.928 L11.3927,10.2422 C11.6681,10.0038 11.7165,9.59887 11.5138,9.30228 C11.065,8.64569 10.5422,7.8112 9.7855,7.25926 C9.57883,7.1085 9.3174,7.09158 9.10155,7.18408 C8.1817,7.5783 7.38574,8.58789 7.42398,9.62695 C7.44908,10.3089 7.71572,12.2402 9.73821,14.2627 Z"
                          id="形状"
                          fill="#09244B"
                        >
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </a>
            <a href="#" className="">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        <div className="">
          <div className="mb-6 w-fit">
            <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
            <div className="flex justify-between mt-2">
              <div className="w-[75%] border-[1.5px] border-primary rounded-full"></div>
              <div className="w-[20%] border-[1.5px] border-primary rounded-full"></div>
            </div>
          </div>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="">
                Products
              </Link>
            </li>
            <li>
              <Link href="/services" className="">
                About
              </Link>
            </li>

            <li>
              <Link href="/contact" className="">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="mb-6 w-fit">
            <h3 className="text-lg font-semibold text-primary">Our Products</h3>
            <div className="flex justify-between mt-2">
              <div className="w-[75%] border-[1.5px] border-primary rounded-full"></div>
              <div className="w-[20%] border-[1.5px] border-primary rounded-full"></div>
            </div>
          </div>

          <ul className="space-y-2">
            <li>
              <Link href="/services" className="">
                Ghee
              </Link>
            </li>
            <li>
              <Link href="/services" className="">
                Honey
              </Link>
            </li>
            <li>
              <Link href="/services" className="">
                Ghee
              </Link>
            </li>
            <li>
              <Link href="/services" className="">
                Oil
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="mb-6 w-fit">
            <h3 className="text-lg font-semibold text-primary">Get in Touch</h3>
            <div className="flex justify-between mt-2">
              <div className="w-[75%] border-[1.5px] border-primary rounded-full"></div>
              <div className="w-[20%] border-[1.5px] border-primary rounded-full"></div>
            </div>
          </div>

          <ul className="space-y-3 text-sm">
            <li className="flex items-start space-x-2">
              <svg
                width={18}
                className="fill-primary"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
              </svg>
              <span>Chittagong, Bangladesh</span>
            </li>
            <li className="flex items-start space-x-2">
              <svg
                width={18}
                className="fill-primary"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z" />
              </svg>
              <span>01740-717473</span>
            </li>
            <li className="flex items-start space-x-2">
              <svg
                width={18}
                className="fill-primary"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z" />
              </svg>
              <span>shop.niamah@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container border-t border-gray-500 mt-10 pt-6 text-center text-sm text-gray-500">
        <p>
          © <span id="year">2025</span> Sakura SoftTech. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
