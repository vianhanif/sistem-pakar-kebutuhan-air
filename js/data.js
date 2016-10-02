const data = {
    app: {
      name: 'Sistem Pakar Kebutuhan Air',
      description: 'Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat.',
      writers: {
        title: 'Witers',
        list: [
          {id: '412312412', name: 'Eka'},
          {id: '124123412', name: 'Mitha'}
        ]
      },
      credits: {
        title: 'Credits',
        list: [
          {id: '50412668', name: 'Alvian Rahman Hanif'}
        ]
      },
      questions: [
        {
          question: "what's your name ?",
          answer: 'text',
          submit: 'Enter'
        },
        {
          question: "Where"
        }
      ],
      attributes: [
        {
          name: 'gender',
          type: 'text',
          value: 'male',
          comparison: '==', // < | > | = | <= | >= | ==
        },
        {
          name: 'age',
          type: 'number',
          value: 20,
          comparison: '<=',
        }
      ],
    }
};
