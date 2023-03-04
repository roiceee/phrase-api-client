const JokeCodeStrings = {
  fetchRandomJoke: `
async function fetchResource() {
    const response = await fetch(https://SERVERURL/api/phrase?APIKey={KEY}&type=joke, {
        mode: 'cors',
        headers: {
        'Access-Control-Allow-Origin':'*'
        }
    })
    const data = await response.json();
    return data;
}
        `,

  fetchRandomJokeResponse: `
    {
        "phrase": "I think it is wrong that the Bali 9 get a one minute silence I mean, they already got a 21 gun salute."
    }
        `,

    fetchMultipleRandomJokes: `
async function fetchResource() {
    const response = await fetch(https://SERVERURL/api/phrase?APIKey={KEY}&type=joke&qty=3, {
        mode: 'cors',
        headers: {
        'Access-Control-Allow-Origin':'*'
        }
    })
    const data = await response.json();
    return data;
}
    `,

    fetchMultipleRandomJokesResponse: `
[
    {
        "phrase": "Don't you just hate it when people answer their own questions? I do."
    },
    {
        "phrase": "How many people does it take to change a light bulb in Brazil? A Brazillion!!! http://imgur.com/c4CJjUd"
    },
    {
        "phrase": "What do you call a vegetable who has escaped prison? An escapea"
    }
]
    `,

    fetchMultipleRandomJokesWithQuery: `
async function fetchResource() {
    const response = await fetch(https://SERVERURL/api/phrase?APIKey={KEY}&type=joke&qty=3&query=dad, {
        mode: 'cors',
        headers: {
        'Access-Control-Allow-Origin':'*'
        }
    })
    const data = await response.json();
    return data;
}
    `,

    fetchMultipleRandomJokesWithQueryResponse: `
[
    {
        "phrase": "I did a terrible job preparing for my Blue Man Group audition and boy is my face red"
    },
    {
        "phrase": "When I hear \"This call is being monitored for quality assurance\" I think \"Cool, let's see how bad this person wants their job.\""
    },
    {
        "phrase": "When I was interviewed for a job in the chemistry department, they asked me if I had lab experience. I said I was more of a cat person."
    }
]
    `,

    fetchMultipleJokesWithQueryAndPagination: `
async function fetchResource() {
    const response = await fetch(https://SERVERURL/api/phrase?APIKey={KEY}&type=joke&qty=3&query=dad&page=0, {
        mode: 'cors',
        headers: {
        'Access-Control-Allow-Origin':'*'
        }
    })
    const data = await response.json();
    return data;
}
    `,

    fetchMultipleJokesWithQueryAndPaginationResponse: `
{
    "content": [
        {
            "phrase": "I saw a French rifle on eBay today It's never been fired but I heard it was dropped once."
        },
        {
            "phrase": "A Mexican fireman had twin boys He named them Jose and Hose B"
        },
        {
            "phrase": "Everytime you pull the trigger a bullet loses its job...HAHAHAHA! Because it gets FIRED. HAHAHA! *I'm in tears*"
        }
    ],
    "pageable": {
        "sort": {
            "empty": true,
            "sorted": false,
            "unsorted": true
        },
        "offset": 0,
        "pageNumber": 0,
        "pageSize": 3,
        "paged": true,
        "unpaged": false
    },
    "last": false,
    "totalElements": 7,
    "totalPages": 3,
    "size": 3,
    "number": 0,
    "sort": {
        "empty": true,
        "sorted": false,
        "unsorted": true
    },
    "first": true,
    "numberOfElements": 3,
    "empty": false
}
    `
};

export default JokeCodeStrings;
