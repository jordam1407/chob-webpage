import { withAnimation } from '@/common/hocs'

function WebFlowIcon() {
    return (
        <svg width="96" height="96" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_14_5349)">
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
                <path
                    d="M25.1538 18.6154C25.1538 18.6154 23.5662 22.7762 23.4231 23.2308C23.37 22.7692 21.6923 14 21.6923 14C18.6612 14 17.3469 15.8023 16.5 18.0385C16.5 18.0385 14.3735 23.3381 14.1923 23.8077C14.1773 23.3831 13.6154 18.6154 13.6154 18.6154C13.4423 15.8796 11.0642 14.0231 9 14.0231L11.3077 29C14.475 28.985 16.7538 27.1977 17.6538 24.9615C17.6538 24.9615 19.3154 20 19.3846 19.7692C19.3996 19.9769 20.5385 29 20.5385 29C23.7208 29 25.9546 27.1238 26.8846 24.9615L30.9231 14C27.7708 14 26.0158 16.3712 25.1538 18.6154Z"
                    stroke="#FF9900"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_14_5349">
                    <rect width="40" height="40" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default withAnimation(WebFlowIcon, 'fade-up', 0.6)
