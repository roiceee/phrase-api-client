const QuoteCodeStrings = {
  fetchRandomQuote: `
    async function fetchRandomJoke() {
      const response = await fetch(https://SERVERURL/api?APIKey={KEY}&type=joke, {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
          }
        })
      const data = await response.json();
      return data;
    }
    `,

  fetchRandomQuoteResponse: `
    {
      "author": "Og Mandino",
      "phrase": "I seek constantly to improve my manners and graces, for they are the sugar to which all are attracted."
     }
    `,

  fetchMultipleRandomQuotes: `
    async function fetchRandomJoke() {
      const response = await fetch(https://SERVERURL/api?APIKey={KEY}&type=quote&qty=3, {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
          }
        })
      const data = await response.json();
      return data;
    }
    `,

  fetchMultipleRandomQuotesResponse: `
    [
      {
          "author": "John Holmes",
          "phrase": "Never tell a young person that anything cannot be done. God may have been waiting centuries for someone ignorant enough of the impossible to do that very thing."
      },
      {
          "author": "Buddha",
          "phrase": "Those who are free of resentful thoughts surely find peace."
      },
      {
          "author": "Og Mandino",
          "phrase": "I seek constantly to improve my manners and graces, for they are the sugar to which all are attracted."
      }
  ]
    `,

    fetchMultipleRandomQuotesWithQuery: `
    async function fetchRandomJoke() {
      const response = await fetch(https://SERVERURL/api?APIKey={KEY}&type=quote&qty=2&query=success, {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
          }
        })
      const data = await response.json();
      return data;
    }
    `,

    fetchMultipleRandomQuotesWithQueryResponse: `
    [
        {
            "author": "David Brinkley",
            "phrase": "A successful person is one who can lay a firm foundation with the bricks that others throw at him or her."
        },
        {
            "author": "Arnold Schwarzenegger",
            "phrase": "Bodybuilding is much like any other sport. To be successful, you must dedicate yourself 100% to your training, diet and mental approach."
        }
    ]`,

    fetchMultipleQuotesWithQueryAndPagination: `
    async function fetchRandomJoke() {
      const response = await fetch(https://SERVERURL/api?APIKey={KEY}&type=quote&qty=2&query=success&page=0, {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
          }
        })
      const data = await response.json();
      return data;
    }
    `,

    fetchMultipleQuotesWithQueryAndPaginationResponse: `
    {
        "content": [
            {
                "author": "Charles Kettering",
                "phrase": "One fails forward toward success."
            },
            {
                "author": "Cullen Hightower",
                "phrase": "When performance exceeds ambition, the overlap is called success."
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
            "pageSize": 2,
            "paged": true,
            "unpaged": false
        },
        "last": false,
        "totalElements": 57,
        "totalPages": 29,
        "size": 2,
        "number": 0,
        "sort": {
            "empty": true,
            "sorted": false,
            "unsorted": true
        },
        "first": true,
        "numberOfElements": 2,
        "empty": false
    }
    `
};

export default QuoteCodeStrings;
