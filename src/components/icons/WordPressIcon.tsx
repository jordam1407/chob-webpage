import { withAnimation } from '@/common/hocs'

function WordPressIcon() {
    return (
        <svg width="96" height="96" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_9_5360)">
                <path
                    d="M18.3335 15L23.3335 33.3333L30.0002 18.3333"
                    stroke="#FF9900"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M9.1665 15L14.9998 33.3333L19.9998 21.6667"
                    stroke="#FF9900"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M29.9998 18.3333C30.2948 17.4533 31.6665 16.06 31.6665 14.1667C31.6665 11.2 30.3732 10 28.5415 10C27.0448 10 26.6665 11.3533 26.6665 12.3817C26.6665 15.4317 29.9998 15.8117 29.9998 18.3333Z"
                    stroke="#FF9900"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M15.8335 15H20.8335"
                    stroke="#FF9900"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M6.6665 15H10.8332"
                    stroke="#FF9900"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M32.5002 11.6667C31.1271 9.61167 29.2676 7.92777 27.0868 6.76471C24.9061 5.60164 22.4717 4.99545 20.0002 5.00003C17.5329 4.99852 15.1035 5.60624 12.9275 6.76923C10.7516 7.93222 8.89645 9.61449 7.52686 11.6667"
                    stroke="#E6EAEE"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M32.5002 28.3334C31.1271 30.3884 29.2676 32.0723 27.0868 33.2354C24.9061 34.3984 22.4717 35.0046 20.0002 35C17.5329 35.0015 15.1035 34.3938 12.9275 33.2308C10.7516 32.0679 8.89645 30.3856 7.52686 28.3334"
                    stroke="#E6EAEE"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_9_5360">
                    <rect width="96" height="96" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default withAnimation(WordPressIcon, 'fade-up', 0.2)
