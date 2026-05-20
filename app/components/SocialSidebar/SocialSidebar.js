import Link from "next/link";
import './custom.css';

export default function SocialSidebar() {
    return (
        <div className="social-sidebar hidden md:flex flex-col gap-1 fixed left-4 top-1/2 -translate-y-1/2 z-50">

            {/* Teams / Skype */}
            <div className="icon-container group relative flex items-center">
                <a
                    href="https://teams.microsoft.com/l/chat/0/0?users=info@tech2globe.com"
                    rel="noopener noreferrer"
                    className="text-white"
                    aria-label="Chat on Microsoft Teams"
                >
                    <div className="w-12 h-12 rounded-full bg-[#464eb8] flex items-center justify-center shadow-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={25}
                            height={25}
                            viewBox="0 0 100 100"
                            fill="none"
                        >
                            <g>
                                <path
                                    fill="#ffffff"
                                    d="M84.025 35.881c5.797 0 10.513-4.729 10.513-10.54-.577-13.983-20.45-13.979-21.026 0 0 5.811 4.717 10.54 10.513 10.54z"
                                />
                                <path
                                    fill="#ffffff"
                                    d="M90.958 38.71H51.61v-3.68c.784.139 1.605.232 2.467.268.093.001.186-.006.279-.007a15.5 15.5 0 0 0 1.063-.053c.12-.011.239-.021.357-.035.403-.045.801-.104 1.193-.181.024-.005.05-.008.074-.012a14.377 14.377 0 0 0 5.167-2.17 14.504 14.504 0 0 0 3.693-3.615c.26-.341.497-.697.718-1.061.021-.036.044-.07.065-.107.17-.287.32-.584.466-.884.064-.13.13-.26.19-.392.154-.345.296-.696.421-1.053l.032-.088c1.427-4.208.774-9.156-1.676-12.856a14.476 14.476 0 0 0-2.268-2.574c-.176-.153-.344-.314-.529-.457a14.41 14.41 0 0 0-3.567-2.159 12.49 12.49 0 0 0-1.347-.493c-.264-.081-.538-.141-.808-.207-.239-.058-.475-.121-.717-.166-.2-.038-.405-.062-.607-.092-.352-.05-.704-.096-1.06-.121-.122-.009-.245-.012-.368-.018a14.095 14.095 0 0 0-1.088-.007c-2.08.121-3.926.558-5.543 1.24-.33.149-.664.294-.975.47-3.242 1.766-5.722 4.772-6.867 8.293a15.274 15.274 0 0 0-.187 8.129l.02.076.097.345c.039.137.085.273.128.409.039.11.08.219.121.329H8.774a5.168 5.168 0 0 0-5.162 5.162v37.672a5.168 5.168 0 0 0 5.162 5.162h20.122c.026.118.059.232.087.349 2.77 10.899 12.463 18.607 23.917 18.885 9.503-.231 17.666-5.721 21.753-13.592.061.022.124.038.185.059 10.182 3.851 21.752-4.229 21.546-15.131V44.122c.001-2.984-2.434-5.412-5.426-5.412z"
                                />
                                <path
                                    fill="#ebebeb"
                                    d="M77.444 44.232c.069-2.971-2.287-5.448-5.251-5.521H50.761a1.43 1.43 0 0 0-1.429 1.433v29.095a2.433 2.433 0 0 1-2.428 2.433H30.199a1.429 1.429 0 0 0-1.399 1.721c2.367 11.561 12.248 19.837 24.1 20.126 13.856-.34 24.866-11.914 24.544-25.767zM54.077 35.298c.093.001.186-.006.279-.007.358-.005.713-.023 1.064-.053.12-.011.239-.021.357-.035.402-.045.801-.104 1.193-.181l.074-.013a14.377 14.377 0 0 0 5.167-2.17 14.508 14.508 0 0 0 3.694-3.615c.26-.341.497-.697.718-1.061.021-.036.044-.07.065-.107.17-.287.32-.585.466-.884.064-.13.13-.259.19-.392.154-.345.297-.696.421-1.053l.032-.088c1.427-4.208.774-9.157-1.676-12.856a14.476 14.476 0 0 0-2.268-2.574c-.176-.153-.344-.314-.529-.457a14.41 14.41 0 0 0-3.567-2.159A12.49 12.49 0 0 0 58.41 7.1c-.264-.081-.538-.14-.808-.207-.239-.058-.475-.121-.717-.166-.2-.038-.404-.062-.607-.092-.352-.05-.704-.096-1.06-.121-.122-.009-.245-.012-.367-.018a15.179 15.179 0 0 0-1.088-.005c-2.08.121-3.926.557-5.543 1.24-.33.149-.664.294-.975.47-3.242 1.767-5.723 4.773-6.867 8.294a15.274 15.274 0 0 0-.187 8.129l.02.076.097.345c.039.137.085.273.128.409.06.171.123.34.187.51h-.027c1.775 4.977 6.268 9.029 13.481 9.334z"
                                />
                                <path
                                    fill="#ffffff"
                                    d="M46.448 25.783H8.774a5.168 5.168 0 0 0-5.162 5.162v37.672a5.168 5.168 0 0 0 5.162 5.162h37.674a5.167 5.167 0 0 0 5.161-5.162V30.945a5.166 5.166 0 0 0-5.161-5.162z"
                                />
                                <path
                                    fill="#234268"
                                    d="M37.109 36.271h-19.28c-.771 0-1.395.625-1.395 1.396v3.514c0 .771.624 1.396 1.395 1.396h6.22v19.575c0 .771.624 1.396 1.395 1.396h4.134c.771 0 1.395-.625 1.395-1.396V42.577h6.136c.771 0 1.395-.625 1.395-1.396v-3.514c0-.771-.624-1.396-1.395-1.396z"
                                />
                            </g>
                        </svg>
                    </div>
                </a>

                <div className="details absolute left-16 hidden group-hover:block bg-black text-white px-3 py-2 rounded-lg whitespace-nowrap shadow-xl">
                    <a
                        href="https://teams.microsoft.com/l/chat/0/0?users=info@tech2globe.com"
                        className="hover:underline"
                    >
                        info@tech2globe.com
                    </a>
                </div>
            </div>

            {/* Email */}
            <div className="icon-container group relative flex items-center">
                <a
                    href="mailto:info@tech2globe.com"
                    className="text-white"
                    aria-label="Send Email"
                >
                    <div className="w-12 h-12 rounded-full bg-[#1f2937] flex items-center justify-center shadow-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            width="20"
                            height="20"
                            fill="currentColor"
                        >
                            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                        </svg>
                    </div>
                </a>

                <div className="details absolute left-16 hidden group-hover:block bg-black text-white px-3 py-2 rounded-lg whitespace-nowrap shadow-xl">
                    <a
                        href="mailto:info@tech2globe.com"
                        className="hover:underline"
                    >
                        info@tech2globe.com
                    </a>
                </div>
            </div>

            {/* Phone */}
            <div className="icon-container group relative flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#1f2937] flex items-center justify-center text-white shadow-lg cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="20"
                        height="20"
                        fill="currentColor"
                    >
                        <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                    </svg>
                </div>

                <div className="details absolute left-16 hidden group-hover:block bg-black text-white px-3 py-2 rounded-lg whitespace-nowrap shadow-xl leading-7">
                    <a href="tel:+15168585840" className="block hover:underline">
                        +1-516-858-5840 (Sales)
                    </a><br />

                    <a href="tel:+15168584836" className="block hover:underline">
                        +1-516-858-4836 (Sales)
                    </a><br />

                    <a href="tel:+17783829628" className="block hover:underline">
                        +1-778-382-9628 (Sales)
                    </a><br />

                    <a href="tel:+919899675039" className="block hover:underline">
                        +91-9899675039 (Sales)
                    </a>
                </div>
            </div>
        </div>
    );
}