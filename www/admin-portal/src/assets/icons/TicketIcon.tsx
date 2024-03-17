import {SVGProps} from 'react'

const TicketIcon = ({...props}: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="white" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M6.66667 33.3334C5.75 33.3334 4.96528 33.007 4.3125 32.3542C3.65972 31.7015 3.33334 30.9167 3.33334 30.0001V24.3751C3.33334 24.0695 3.43056 23.8056 3.625 23.5834C3.81945 23.3612 4.06945 23.2223 4.375 23.1667C5.04167 22.9445 5.59028 22.5417 6.02084 21.9584C6.45139 21.3751 6.66667 20.7223 6.66667 20.0001C6.66667 19.2779 6.45139 18.6251 6.02084 18.0417C5.59028 17.4584 5.04167 17.0556 4.375 16.8334C4.06945 16.7779 3.81945 16.639 3.625 16.4167C3.43056 16.1945 3.33334 15.9306 3.33334 15.6251V10.0001C3.33334 9.08341 3.65972 8.29869 4.3125 7.64591C4.96528 6.99314 5.75 6.66675 6.66667 6.66675H33.3333C34.25 6.66675 35.0347 6.99314 35.6875 7.64591C36.3403 8.29869 36.6667 9.08341 36.6667 10.0001V15.6251C36.6667 15.9306 36.5695 16.1945 36.375 16.4167C36.1806 16.639 35.9306 16.7779 35.625 16.8334C34.9583 17.0556 34.4097 17.4584 33.9792 18.0417C33.5486 18.6251 33.3333 19.2779 33.3333 20.0001C33.3333 20.7223 33.5486 21.3751 33.9792 21.9584C34.4097 22.5417 34.9583 22.9445 35.625 23.1667C35.9306 23.2223 36.1806 23.3612 36.375 23.5834C36.5695 23.8056 36.6667 24.0695 36.6667 24.3751V30.0001C36.6667 30.9167 36.3403 31.7015 35.6875 32.3542C35.0347 33.007 34.25 33.3334 33.3333 33.3334H6.66667ZM20 28.3334C20.4722 28.3334 20.8681 28.1737 21.1875 27.8542C21.5069 27.5348 21.6667 27.139 21.6667 26.6667C21.6667 26.1945 21.5069 25.7987 21.1875 25.4792C20.8681 25.1598 20.4722 25.0001 20 25.0001C19.5278 25.0001 19.1319 25.1598 18.8125 25.4792C18.4931 25.7987 18.3333 26.1945 18.3333 26.6667C18.3333 27.139 18.4931 27.5348 18.8125 27.8542C19.1319 28.1737 19.5278 28.3334 20 28.3334ZM20 21.6667C20.4722 21.6667 20.8681 21.507 21.1875 21.1876C21.5069 20.8681 21.6667 20.4723 21.6667 20.0001C21.6667 19.5279 21.5069 19.132 21.1875 18.8126C20.8681 18.4931 20.4722 18.3334 20 18.3334C19.5278 18.3334 19.1319 18.4931 18.8125 18.8126C18.4931 19.132 18.3333 19.5279 18.3333 20.0001C18.3333 20.4723 18.4931 20.8681 18.8125 21.1876C19.1319 21.507 19.5278 21.6667 20 21.6667ZM20 15.0001C20.4722 15.0001 20.8681 14.8404 21.1875 14.5209C21.5069 14.2015 21.6667 13.8056 21.6667 13.3334C21.6667 12.8612 21.5069 12.4654 21.1875 12.1459C20.8681 11.8265 20.4722 11.6667 20 11.6667C19.5278 11.6667 19.1319 11.8265 18.8125 12.1459C18.4931 12.4654 18.3333 12.8612 18.3333 13.3334C18.3333 13.8056 18.4931 14.2015 18.8125 14.5209C19.1319 14.8404 19.5278 15.0001 20 15.0001Z"
        fill="white"/>
    </svg>
  );
};

export default TicketIcon;
