import React from 'react';

import "./Home.scss"
import {Message} from "components";
import {Dialogs} from "components";

const Home = () => {
    return (
        <section className={'home'}>
            <Dialogs items={[
                {
                    unreaded: 1,
                    message: {
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                        isReaded: false,
                        created_at: new Date(),
                    },
                    user: {
                        fullname: 'Lev Tolstoy',
                        avatar: 'https://i7.pngguru.com/preview/555/703/598/computer-icons-avatar-woman-user-avatar.jpg',
                        isOnline: true,
                        _id: 2
                    },
                },
                {
                    message: {
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                        isReaded: false,

                        created_at: new Date(2019, 0, 10),
                    },
                    user: {
                        fullname: 'Lev Hudoi',
                       // avatar: 'https://i7.pngguru.com/preview/178/419/741/computer-icons-avatar-login-user-avatar.jpg',
                        isOnline: false,
                        _id: '21dsfdsfs34234',
                    },
                },
                {
                    message: {
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                        isReaded: false,

                        created_at: new Date(2019, 0, 15),
                    },
                    user: {
                        fullname: 'Lev Hudoi',
                        avatar: 'https://i7.pngguru.com/preview/178/419/741/computer-icons-avatar-login-user-avatar.jpg',
                        isOnline: false,
                        _id: 4,
                    },
                }
            ]} userId={1}/>

            <Message
                avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
                date="Sun Apr 21 2019 21:55:29"
                audio="https://notificationsounds.com/soundfiles/069059b7ef840f0c74a814ec9237b6ec/file-de_vuvuzela-power-down.mp3"
            />
        </section>
    );
};

export default Home;