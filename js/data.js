let data = {
    app: {
      name: 'Sistem Pakar Kebutuhan Air',
      description: 'Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat.',
      writers: {
        title: 'Writers',
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
          name: 'nama',
          question: "what's your name ?",
          index: 'Name',
          type: 'text',
          answer: ''
        },
        {
          name: 'umur',
          question: 'How old are you ?',
          index: 'Age',
          type: 'number',
          answer: ''
        },
        {
          name: 'gender',
          question: "Which gender are you?",
          index: 'Gender',
          type: 'choice',
          choices: [
            'Male', 'Female'
          ],
          answer: ''
        },
        {
          name: 'location',
          question: "Where do you live?",
          index: 'Location',
          type: 'choice',
          choices: [
            'Depok', 'Bogor', 'Bandung'
          ],
          answer: ''
        },
      ],
    }
};
