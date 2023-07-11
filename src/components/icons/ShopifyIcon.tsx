import { withAnimation } from '@/common/hocs'

function ShopifyIcon() {
    return (
        <svg width="96" height="96" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M25.3041 35.8527L26.4596 9.17294C26.8297 9.5947 27.3555 10.1103 27.9253 10.3616C28.4957 10.6132 29.2061 10.6567 29.7401 10.651C30.0163 10.648 30.264 10.6314 30.4492 10.6158C30.4884 10.6125 30.525 10.6093 30.5583 10.6062L30.5751 10.7179L30.6913 11.499C30.7905 12.1662 30.9305 13.1108 31.0978 14.2399C31.4324 16.4982 31.8758 19.4944 32.3184 22.4856C32.761 25.4769 33.2026 28.4632 33.5336 30.7017L33.9335 33.4057L34.0166 33.9679L25.3041 35.8527ZM25.0895 8.50524L23.8896 35.9022L6.55633 32.6467L6.5982 32.3223L6.8688 30.2274C7.09319 28.491 7.39342 26.1693 7.69683 23.828C8.30486 19.136 8.92259 14.3897 8.97166 14.0874L8.97324 14.0777L8.97443 14.068C9.00175 13.8445 9.02 13.7124 9.04305 13.6186C9.05672 13.5629 9.06762 13.5409 9.07147 13.5345C9.07559 13.5306 9.10061 13.5095 9.18534 13.4735C9.29112 13.4284 9.43896 13.3802 9.67401 13.306L9.69016 13.3009L9.7059 13.2947C9.70477 13.2952 9.70959 13.2933 9.72428 13.2882C9.73768 13.2836 9.75558 13.2775 9.77834 13.2699C9.8238 13.2548 9.88494 13.2349 9.96119 13.2105C10.1135 13.1617 10.322 13.096 10.5779 13.0162C11.0894 12.8566 11.7868 12.6416 12.5947 12.3946L12.8692 12.3107L12.9352 12.0314C13.2423 10.731 13.8838 8.81518 14.945 7.23738C16.0075 5.65746 17.4287 4.5 19.2939 4.5C19.6644 4.5 20.1593 4.69324 20.6032 5.25212L20.7533 5.44115H20.9947H21.1504C22.5998 5.44115 23.5095 6.66802 24.0737 8.31277L24.2323 8.775L24.698 8.62706C24.843 8.58102 24.9742 8.54031 25.0895 8.50524ZM9.07296 13.5324C9.07298 13.5325 9.07252 13.5332 9.07153 13.5344C9.07244 13.5329 9.07294 13.5323 9.07296 13.5324ZM19.6646 19.7518L19.6648 19.7519L19.6648 19.752L19.665 19.752L19.6652 19.7522L19.6655 19.7523L19.8912 19.8705L20.1201 19.7561L20.1472 19.7425L20.3289 19.6516L20.3958 19.4597L21.6754 15.7831L21.8107 15.3945L21.4554 15.187L21.2032 15.6187C21.4554 15.187 21.4552 15.1869 21.455 15.1868L21.4546 15.1866L21.4538 15.1861L21.4518 15.1849L21.4469 15.1821L21.4334 15.1746C21.4227 15.1687 21.4086 15.1612 21.3911 15.1523C21.3562 15.1345 21.3078 15.1111 21.2458 15.0841C21.1218 15.03 20.9437 14.9614 20.7111 14.8941C20.2454 14.7592 19.5638 14.6299 18.6642 14.6299C16.3426 14.6299 14.5619 15.4099 13.3672 16.6348C12.1782 17.8539 11.6037 19.4796 11.6276 21.1137C11.6282 22.1045 11.8773 22.8768 12.2625 23.5071C12.6429 24.1294 13.143 24.591 13.604 24.9762C13.7313 25.0825 13.8525 25.1808 13.9674 25.2741C14.2897 25.5355 14.5634 25.7576 14.7884 26.0075C15.0696 26.3198 15.2207 26.6224 15.2216 27.0095C15.2199 27.1121 15.198 27.2133 15.1571 27.3074C15.1158 27.4024 15.056 27.4882 14.9811 27.5598C14.9063 27.6313 14.8179 27.6873 14.7211 27.7242C14.6244 27.7612 14.5212 27.7785 14.4177 27.7751L14.4095 27.7748H14.4013C13.8448 27.7748 13.1728 27.4772 12.5907 27.1252C12.3102 26.9555 12.0698 26.7852 11.8996 26.6572C11.8148 26.5934 11.748 26.5406 11.7032 26.5044C11.6808 26.4863 11.664 26.4724 11.6531 26.4633L11.6413 26.4535L11.6389 26.4514L11.6388 26.4513L11.6387 26.4513L11.6386 26.4512L11.0611 25.9567L10.8361 26.6833L9.96134 29.5081L9.88236 29.7631L10.0503 29.9706L10.439 29.656C10.0503 29.9706 10.0505 29.9708 10.0507 29.971L10.051 29.9715L10.0518 29.9725L10.0539 29.975L10.06 29.9823L10.0793 30.005C10.0954 30.0237 10.118 30.0492 10.147 30.0807C10.2051 30.1435 10.2893 30.2302 10.3996 30.3325C10.6199 30.537 10.9456 30.8055 11.377 31.0729C12.2416 31.6089 13.5301 32.1399 15.2327 32.1399C16.6933 32.1399 17.9825 31.5928 18.9038 30.5995C19.8231 29.6083 20.345 28.2073 20.345 26.5482C20.345 24.3454 19.1011 23.0667 17.9609 22.1673C17.721 21.978 17.4806 21.8016 17.2587 21.6388C17.2192 21.6098 17.1803 21.5812 17.1421 21.5531C16.8843 21.3635 16.6596 21.1946 16.4711 21.0308C16.0749 20.6863 15.9575 20.4621 15.9575 20.2798C15.9575 20.1558 15.975 19.9056 16.1386 19.6911C16.2835 19.5011 16.6245 19.2347 17.4942 19.2347C18.0771 19.2347 18.6229 19.3636 19.0289 19.4968C19.2304 19.563 19.3934 19.6288 19.5045 19.6773C19.56 19.7016 19.6022 19.7213 19.6295 19.7345C19.6432 19.7411 19.6531 19.746 19.659 19.749L19.6646 19.7518ZM19.1652 4.62396H18.6652V4.66958C17.1673 4.86395 16.022 5.91622 15.1874 7.12605C14.2563 8.47584 13.6378 10.1227 13.2793 11.3557L13.0257 12.2277L13.8981 11.9757C14.7599 11.7267 15.6177 11.4643 16.4712 11.1884L16.7537 11.097L16.8087 10.8053C17.3877 7.73705 18.7722 6.30467 19.9273 5.75884L20.6918 5.39756L20.0068 4.90175C19.7382 4.70733 19.4524 4.62396 19.1652 4.62396ZM20.9846 9.7781L21.3376 9.6695V9.30021V9.1174C21.3376 7.82816 21.1763 6.84814 20.8857 6.09391L20.6984 5.60763L20.2203 5.8149C19.0267 6.33233 17.7714 7.65572 17.1121 10.17L16.8835 11.0418L17.7441 10.7744C18.4568 10.5529 19.1786 10.3318 19.8775 10.1177C20.255 10.0021 20.6257 9.88854 20.9846 9.7781ZM21.0675 6.09219V6.54171L21.1895 6.55472C21.3455 7.11502 21.4345 7.79861 21.4345 8.62313V8.96437V9.6488L22.0865 9.4407C22.325 9.36458 22.5598 9.29117 22.7871 9.22008C23.0938 9.12419 23.387 9.03251 23.6579 8.94404L24.1321 8.78911L23.9782 8.3145C23.7757 7.68996 23.5068 7.06361 23.1439 6.57066C22.7804 6.07702 22.2822 5.66556 21.6205 5.59501L21.577 6.00289L21.0675 6.08948V6.09219Z"
                stroke="#E6EAEE"
            />
            <path
                d="M11.1451 25.7224L9.77979 29.8173C11.7798 31.4173 12.514 32.0766 14.9834 32.0284C18.3424 31.9629 20.9834 29.5284 20.2525 25.7224C20.3764 25.3463 19.9834 23.7284 15.9834 20.5284C15.8167 19.6951 16.3834 18.4284 19.9834 20.0284L21.9834 15.5284C21.5834 14.7284 19.4834 14.5284 18.4834 14.5284C15.2834 14.5284 13.3722 16.5111 12.7055 17.6777C10.7055 20.4777 11.6858 23.4967 13.9834 25.0284C15.4834 26.0284 15.9612 27.4791 14.7612 27.8791C13.5612 28.2791 11.8118 26.5558 11.1451 25.7224Z"
                stroke="#FF9900"
            />
        </svg>
    )
}

export default withAnimation(ShopifyIcon, 'fade-up', 0.4)