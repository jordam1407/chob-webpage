import { withAnimation } from '@/common/hocs'

function WixIcon() {
    return (
        <svg width="96" height="96" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_9_5368)">
                <path
                    d="M5 15L7.5 25L9.79833 15.8083C9.8559 15.5774 9.98905 15.3723 10.1766 15.2258C10.3641 15.0792 10.5953 14.9996 10.8333 14.9996C11.0713 14.9996 11.3025 15.0792 11.4901 15.2258C11.6776 15.3723 11.8108 15.5774 11.8683 15.8083L14.1667 25L16.6667 15"
                    stroke="#FF9900"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M21.6665 19.1666V25"
                    stroke="#FF9900"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M26.6665 15L34.9998 25"
                    stroke="#FF9900"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M34.9998 15L26.6665 25"
                    stroke="#FF9900"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M21.6665 15H21.6832"
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
                <clipPath id="clip0_9_5368">
                    <rect width="96" height="96" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default withAnimation(WixIcon, 'fade-up', 0.3)
