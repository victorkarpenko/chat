import React from 'react';

import "./Home.scss"
import {Message} from "components";

const Home = () => {
    return (
        <section className={'home'}>
         <h2>home</h2>
            <Message
                text={'Hello, how are you?'}
                date={'Sun Apr 21 2019 21:30:07'}
                avatar={'https://i7.pngguru.com/preview/555/703/598/computer-icons-avatar-woman-user-avatar.jpg'}
                isMe={false}
                attachments={[
                    {
                        filename: "image.php",
                        url: "https://source.unsplash.com/100x100/?random=1&nature"
                    },
                    {
                        filename: "image.php",
                        url: "https://source.unsplash.com/100x100/?random=3&nature"
                    },
                    {
                        filename: "image.php",
                        url: "https://source.unsplash.com/100x100/?random=2&nature"
                    },
                ]}
            />
            <Message
                text={'Hi, i`m ok'}
                date={'Tue Jan 21 2020 15:10:52'}
                avatar={'https://i7.pngguru.com/preview/178/419/741/computer-icons-avatar-login-user-avatar.jpg'}
                isMe={true}
                isReaded={true}
            />
            <Message
                avatar={'https://i7.pngguru.com/preview/555/703/598/computer-icons-avatar-woman-user-avatar.jpg'}
                isTyping
            />
        </section>
    );
};

export default Home;