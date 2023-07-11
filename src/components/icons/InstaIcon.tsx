import { withAnimation } from '@/common/hocs'

function InstaIcon() {
    return (
        <svg width="96" height="96" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_9_5380)">
                <path
                    d="M6.6665 13.3333C6.6665 11.5652 7.36888 9.86949 8.61913 8.61925C9.86937 7.369 11.5651 6.66663 13.3332 6.66663H26.6665C28.4346 6.66663 30.1303 7.369 31.3805 8.61925C32.6308 9.86949 33.3332 11.5652 33.3332 13.3333V26.6666C33.3332 28.4347 32.6308 30.1304 31.3805 31.3807C30.1303 32.6309 28.4346 33.3333 26.6665 33.3333H13.3332C11.5651 33.3333 9.86937 32.6309 8.61913 31.3807C7.36888 30.1304 6.6665 28.4347 6.6665 26.6666V13.3333Z"
                    stroke="#E6EAEE"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M15 20C15 21.3261 15.5268 22.5979 16.4645 23.5355C17.4021 24.4732 18.6739 25 20 25C21.3261 25 22.5979 24.4732 23.5355 23.5355C24.4732 22.5979 25 21.3261 25 20C25 18.6739 24.4732 17.4021 23.5355 16.4645C22.5979 15.5268 21.3261 15 20 15C18.6739 15 17.4021 15.5268 16.4645 16.4645C15.5268 17.4021 15 18.6739 15 20Z"
                    stroke="#FF9900"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M27.5 12.5V12.5167"
                    stroke="#FF9900"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_9_5380">
                    <rect width="96" height="96" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default withAnimation(InstaIcon, 'fade-up', 0.5)
