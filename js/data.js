let data = {
    app: {
      name: 'Aqua Meter',
      description: "This ES will give an advice about how much water that human's body needs based on weight, gender, and activity. So, how much water your body needs today?",
      writers: {
        title: 'Writers',
        list: [
          {id: '412312412', name: 'Eka Miratul Khasanah'},
          {id: '124123412', name: 'Mitha Filandari'}
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
          question: "What's your name ?",
          index: 'Name',
          type: 'text',
          answer: ''
        },
        {
          name: 'urine',
          question: 'What color of your urine recently ?',
          index: 'Urine Color',
          type: 'image',
          choices: [
              {
                name: 'Transparent',
                description: "you're drinking a lot of water, You may want to cut back.",
                description_id: 'desc-transparent',
                class: 'ur-transparent'
              },
              {
                name: 'Pale Straw',
                description: "you're normal, healthy and well-hydrated.",
                description_id: 'desc-pale',
                class: 'ur-pale'
              },
              {
                name: "Transparent Yellow",
                description: "you're normal.",
                description_id: 'desc-transparent-yellow',
                class: 'ur-transparent-yellow'
              },
              {
                name: 'Dark Yellow',
                description: "you're normal. But drink some water soon",
                description_id: 'desc-dark-yellow',
                class: 'ur-dark-yellow',
              },
              {
                name: "Amber or Honey",
                description: "your body isn't getting enough water. Drink some now",
                description_id: 'desc-amber',
                class: 'ur-amber'
              },
              {
                name: "Syrup or Brown Ale",
                description: "you could have severe dehydration. Drink water. And if it persist, see a doctor (you could have liver disease).",
                description_id: 'desc-syrup',
                class: 'ur-syrup'
              },
              {
                name: "Orange",
                description: "you may not be drinking enough water or it could be food dye. And if it persiss, see a doctor (you could have a liver or bile duct condition).",
                description_id: 'desc-orange',
                class: 'ur-orange'
              }
          ],
          answer: '',
          description: '',
          class: ''
        },
        {
          name: 'umur',
          question: 'How old are you (years) ?',
          index: 'Age',
          type: 'number',
          answer: '',
          postfix: 'years old'
        },
        {
          name: 'berat',
          question: 'How much do you weight (kg) ?',
          index: 'Weight',
          type: 'number',
          answer: '',
          postfix: 'kg'
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
          name: 'condition',
          question: "How is your condition ?",
          index: 'Condition',
          type: 'choice',
          choices: [
            'Pregnant', 'Breastfeed', 'Normal'
          ],
          abswer: ''
        },
        {
          name: 'exercise',
          question: "Do you usually exercise or not ?",
          index: 'Exercise',
          type: 'choice',
          choices: ['Yes', 'No'],
          answer: ''
        },
      ],
    }
};

// {
//   name: 'location',
//   question: "Where do you live?",
//   index: 'Location',
//   type: 'choice',
//   choices: ['Bandung', 'Banjar', 'Bekasi', 'Bogor', 'Ciamis', 'Cianjur', 'Cibinong', 'Cikarang', 'Cimahi', 'Cirebon', 'Cisaat', 'Depok', 'Garut', 'Indramayu', 'Karawang', 'Kuningan', 'Majalengka', 'Ngamprah', 'Pelabuhan-Ratu', 'Purwakarta', 'Singaparna', 'Soreang', 'Subang', 'Sumber', 'Sumedang', 'Tasikmalaya'],
//   answer: ''
// },
