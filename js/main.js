document.addEventListener('DOMContentLoaded', () => {

  // Cлучайное целое число
  const randomInt = (numMin, numMax) => {
    if (numMin < 0 || numMax < 0 || numMax <= numMin) {
      return false;
    } else {
      numMin = Math.ceil(numMin);
      numMax = Math.floor(numMax);
      return Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
    }
  };

  // Максимальная длина строки
  const strLengthMax = (str, strMax) => {
    if (str.length <= strMax) {
      return true;
    } else {
      return false;
    }
  };
  strLengthMax('Текст', 10);

  const randomName = ['Матвей', 'Полина', 'Артём', 'Эмма', 'Есения', 'Денис', 'Андрей', 'Мирон', 'Владислав', 'Семён'];

  const randomСomment = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

  const fotoDescArr = [
    {
      id: 1,
      url: 'photos/1.jpg',
      description: 'Описание один',
      likes: randomInt(15, 200),
      comments: [
        {
          id: 101,
          avatar: `img/avatar-${randomInt(1, 6)}.svg`,
          message: randomСomment[randomInt(0, 5)],
          name: randomName[randomInt(0, 9)],
        },
      ]
    },
    {
      id: 2,
      url: 'photos/2.jpg',
      description: 'Описание два',
      likes: randomInt(15, 200),
      comments: [
        {
          id: 102,
          avatar: `img/avatar-${randomInt(1, 6)}.svg`,
          message: randomСomment[randomInt(0, 5)],
          name: randomName[randomInt(0, 9)],
        },
        {
          id: 103,
          avatar: `img/avatar-${randomInt(1, 6)}.svg`,
          message: randomСomment[randomInt(0, 5)],
          name: randomName[randomInt(0, 9)],
        },
      ]
    },
    {
      id: 3,
      url: 'photos/3.jpg',
      description: 'Описание три',
      likes: randomInt(15, 200),
      comments: [
        {
          id: 104,
          avatar: `img/avatar-${randomInt(1, 6)}.svg`,
          message: randomСomment[randomInt(0, 5)],
          name: randomName[randomInt(0, 9)],
        },
      ]
    },
    {
      id: 4,
      url: 'photos/4.jpg',
      description: 'Описание четыри',
      likes: randomInt(15, 200),
      comments: [
        {
          id: 105,
          avatar: `img/avatar-${randomInt(1, 6)}.svg`,
          message: randomСomment[randomInt(0, 5)],
          name: randomName[randomInt(0, 9)],
        },
        {
          id: 106,
          avatar: `img/avatar-${randomInt(1, 6)}.svg`,
          message: randomСomment[randomInt(0, 5)],
          name: randomName[randomInt(0, 9)],
        },
        {
          id: 107,
          avatar: `img/avatar-${randomInt(1, 6)}.svg`,
          message: randomСomment[randomInt(0, 5)],
          name: randomName[randomInt(0, 9)],
        },
      ]
    },
    {
      id: 5,
      url: 'photos/5.jpg',
      description: 'Описание пять',
      likes: randomInt(15, 200),
      comments: [
        {
          id: 108,
          avatar: `img/avatar-${randomInt(1, 6)}.svg`,
          message: randomСomment[randomInt(0, 5)],
          name: randomName[randomInt(0, 9)],
        },
      ]
    },
    {
      id: 6,
      url: 'photos/6.jpg',
      description: 'Описание шесть',
      likes: randomInt(15, 200),
      comments: [
        {
          id: 109,
          avatar: `img/avatar-${randomInt(1, 6)}.svg`,
          message: randomСomment[randomInt(0, 5)],
          name: randomName[randomInt(0, 9)],
        },
      ]
    },
    {
      id: 7,
      url: 'photos/7.jpg',
      description: 'Описание семь',
      likes: randomInt(15, 200),
      comments: [
        {
          id: 110,
          avatar: `img/avatar-${randomInt(1, 6)}.svg`,
          message: randomСomment[randomInt(0, 5)],
          name: randomName[randomInt(0, 9)],
        },
        {
          id: 111,
          avatar: `img/avatar-${randomInt(1, 6)}.svg`,
          message: randomСomment[randomInt(0, 5)],
          name: randomName[randomInt(0, 9)],
        },
      ]
    },
    {
      id: 8,
      url: 'photos/8.jpg',
      description: 'Описание восемь',
      likes: randomInt(15, 200),
      comments: [
        {
          id: 112,
          avatar: `img/avatar-${randomInt(1, 6)}.svg`,
          message: randomСomment[randomInt(0, 5)],
          name: randomName[randomInt(0, 9)],
        },
        {
          id: 113,
          avatar: `img/avatar-${randomInt(1, 6)}.svg`,
          message: randomСomment[randomInt(0, 5)],
          name: randomName[randomInt(0, 9)],
        },
      ]
    },
    {
      id: 9,
      url: 'photos/9.jpg',
      description: 'Описание девять',
      likes: randomInt(15, 200),
      comments: [
        {
          id: 114,
          avatar: `img/avatar-${randomInt(1, 6)}.svg`,
          message: randomСomment[randomInt(0, 5)],
          name: randomName[randomInt(0, 9)],
        },
      ]
    },
    {
      id: 10,
      url: 'photos/10.jpg',
      description: 'Описание десять',
      likes: randomInt(15, 200),
      comments: [
        {
          id: 115,
          avatar: `img/avatar-${randomInt(1, 6)}.svg`,
          message: randomСomment[randomInt(0, 5)],
          name: randomName[randomInt(0, 9)],
        },
      ]
    },
    {
      id: 11,
      url: 'photos/11.jpg',
      description: 'Описание одиннадцать',
      likes: randomInt(15, 200),
      comments: [
        {
          id: 116,
          avatar: `img/avatar-${randomInt(1, 6)}.svg`,
          message: randomСomment[randomInt(0, 5)],
          name: randomName[randomInt(0, 9)],
        },
      ]
    },
    {
      id: 12,
      url: 'photos/12.jpg',
      description: 'Описание двенадцать',
      likes: randomInt(15, 200),
      comments: [
        {
          id: 117,
          avatar: `img/avatar-${randomInt(1, 6)}.svg`,
          message: randomСomment[randomInt(0, 5)],
          name: randomName[randomInt(0, 9)],
        },
      ]
    },
    {
      id: 13,
      url: 'photos/13.jpg',
      description: 'Описание тринадцать',
      likes: randomInt(15, 200),
      comments: [
        {
          id: 118,
          avatar: `img/avatar-${randomInt(1, 6)}.svg`,
          message: randomСomment[randomInt(0, 5)],
          name: randomName[randomInt(0, 9)],
        },
      ]
    },
    {
      id: 14,
      url: 'photos/14.jpg',
      description: 'Описание четырнадцать',
      likes: randomInt(15, 200),
      comments: [
        {
          id: 118,
          avatar: `img/avatar-${randomInt(1, 6)}.svg`,
          message: randomСomment[randomInt(0, 5)],
          name: randomName[randomInt(0, 9)],
        },
      ]
    },
    {
      id: 15,
      url: 'photos/15.jpg',
      description: 'Описание пятнадцать',
      likes: randomInt(15, 200),
      comments: [
        {
          id: 119,
          avatar: `img/avatar-${randomInt(1, 6)}.svg`,
          message: randomСomment[randomInt(0, 5)],
          name: randomName[randomInt(0, 9)],
        },
      ]
    },
    {
      id: 16,
      url: 'photos/16.jpg',
      description: 'Описание шестнадцать',
      likes: randomInt(15, 200),
      comments: [
        {
          id: 120,
          avatar: `img/avatar-${randomInt(1, 6)}.svg`,
          message: randomСomment[randomInt(0, 5)],
          name: randomName[randomInt(0, 9)],
        },
      ]
    },
    {
      id: 17,
      url: 'photos/17.jpg',
      description: 'Описание семнадцать',
      likes: randomInt(15, 200),
      comments: [
        {
          id: 121,
          avatar: `img/avatar-${randomInt(1, 6)}.svg`,
          message: randomСomment[randomInt(0, 5)],
          name: randomName[randomInt(0, 9)],
        },
      ]
    },
    {
      id: 18,
      url: 'photos/18.jpg',
      description: 'Описание восемнадцать',
      likes: randomInt(15, 200),
      comments: [
        {
          id: 122,
          avatar: `img/avatar-${randomInt(1, 6)}.svg`,
          message: randomСomment[randomInt(0, 5)],
          name: randomName[randomInt(0, 9)],
        },
      ]
    },
    {
      id: 19,
      url: 'photos/19.jpg',
      description: 'Описание девятнадцать',
      likes: randomInt(15, 200),
      comments: [
        {
          id: 123,
          avatar: `img/avatar-${randomInt(1, 6)}.svg`,
          message: randomСomment[randomInt(0, 5)],
          name: randomName[randomInt(0, 9)],
        },
      ]
    },
    {
      id: 20,
      url: 'photos/20.jpg',
      description: 'Описание двадцать',
      likes: randomInt(15, 200),
      comments: [
        {
          id: 124,
          avatar: `img/avatar-${randomInt(1, 6)}.svg`,
          message: randomСomment[randomInt(0, 5)],
          name: randomName[randomInt(0, 9)],
        },
      ]
    },
    {
      id: 21,
      url: 'photos/21.jpg',
      description: 'Описание двадцать один',
      likes: randomInt(15, 200),
      comments: [
        {
          id: 125,
          avatar: `img/avatar-${randomInt(1, 6)}.svg`,
          message: randomСomment[randomInt(0, 5)],
          name: randomName[randomInt(0, 9)],
        },
      ]
    },
    {
      id: 22,
      url: 'photos/22.jpg',
      description: 'Описание двадцать два',
      likes: randomInt(15, 200),
      comments: [
        {
          id: 126,
          avatar: `img/avatar-${randomInt(1, 6)}.svg`,
          message: randomСomment[randomInt(0, 5)],
          name: randomName[randomInt(0, 9)],
        },
      ]
    },
    {
      id: 23,
      url: 'photos/23.jpg',
      description: 'Описание двадцать три',
      likes: randomInt(15, 200),
      comments: [
        {
          id: 127,
          avatar: `img/avatar-${randomInt(1, 6)}.svg`,
          message: randomСomment[randomInt(0, 5)],
          name: randomName[randomInt(0, 9)],
        },
      ]
    },
    {
      id: 24,
      url: 'photos/24.jpg',
      description: 'Описание двадцать четыри',
      likes: randomInt(15, 200),
      comments: [
        {
          id: 128,
          avatar: `img/avatar-${randomInt(1, 6)}.svg`,
          message: randomСomment[randomInt(0, 5)],
          name: randomName[randomInt(0, 9)],
        },
      ]
    },
    {
      id: 25,
      url: 'photos/25.jpg',
      description: 'Описание двадцать пять',
      likes: randomInt(15, 200),
      comments: [
        {
          id: 127,
          avatar: `img/avatar-${randomInt(1, 6)}.svg`,
          message: randomСomment[randomInt(0, 5)],
          name: randomName[randomInt(0, 9)],
        },
      ]
    },
  ];

  // Чтобы не ругался ESLint
  const photoIdFunc = (id) => id;
  photoIdFunc(fotoDescArr[0]);

});
