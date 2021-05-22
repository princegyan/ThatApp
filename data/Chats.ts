export default {
    id: '1',
    users: [{
        id: 'u1',
        name: 'Prince',
        imageUri: 'https://media-exp1.licdn.com/dms/image/C5603AQEYrPFPlMeHHw/profile-displayphoto-shrink_200_200/0/1542024730101?e=1626912000&v=beta&t=LbGc_oGfCZSLUK53J6ALSK2eEihZfwYe1jXRx5p7MbU',
    }, {
        id: 'u2',
        name: 'Dennis',
        imageUri: 'https://media-exp1.licdn.com/dms/image/C4D03AQHpaCzaLcDtkg/profile-displayphoto-shrink_200_200/0/1607774046595?e=1626912000&v=beta&t=q8kshqoLR0X6G5IpLSFiHaywL_BiMFSuMzoKw5cpwgQ',
    }],
    messages: [{
        id: 'm1',
        content: 'How are you, Dennis!',
        createdAt: '2020-10-10T12:48:00.000Z',
        user: {
            id: 'u1',
            name: 'Prince',
        },
    }, {
        id: 'm2',
        content: 'I am good, good',
        createdAt: '2020-10-03T14:49:00.000Z',
        user: {
            id: 'u2',
            name: 'Dennis',
        },
    }, {
        id: 'm3',
        content: 'What about you?',
        createdAt: '2020-10-03T14:49:40.000Z',
        user: {
            id: 'u2',
            name: 'Dennis',
        },
    }, {
        id: 'm4',
        content: 'Good as well, preparing for the stream now.',
        createdAt: '2020-10-03T14:50:00.000Z',
        user: {
            id: 'u1',
            name: 'Prince',
        },
    }, {
        id: 'm5',
        content: 'How is your uni going?',
        createdAt: '2020-10-03T14:51:00.000Z',
        user: {
            id: 'u1',
            name: 'Prince',
        },
    }, {
        id: 'm6',
        content: 'It is a bit tough, as I have 2 specializations. How about yours? Do you enjoy it?',
        createdAt: '2020-10-03T14:49:00.000Z',
        user: {
            id: 'u2',
            name: 'Dennis',
        },
    }, {
        id: 'm7',
        content: 'Big Data is really interesting. Cannot wait to go through all the material.',
        createdAt: '2020-10-03T14:53:00.000Z',
        user: {
            id: 'u1',
            name: 'Prince',
        },
    }]
}
