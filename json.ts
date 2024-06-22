export const ChatDetails = {
  participants: [
    { id: "+1234567890", name: "Nithesh" },
    { id: "+0987654321", name: "Balaji" },
    { id: "+7463897362", name: "Dharani" },
    { id: "+954692383", name: "Sanjay" },
    { id: "+1111111111", name: "Varun" },
    { id: "+2222222222", name: "Thanush" },
    { id: "+3333333333", name: "Praveen" },
    { id: "+4444444444", name: "Yukendran" },
    { id: "+5555555555", name: "Gowsinathan" },
    { id: "+6666666666", name: "Saran" },
  ],
  messages: [
    {
      id: "1",
      sender: "+1234567890",
      timestamp: "2024-05-25T14:23:00Z",
      type: "text",
      content: "Hey Bob, how are you?",
      profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP3FqoYVPZxd_5TH71L8ccH4Mf7CxqWD0OxnPOL8_3bg&s",
    },
    {
      id: "2",
      sender: "+0987654321",
      timestamp: "2024-05-25T14:25:00Z",
      type: "text",
      content: "I'm good, Alice. How about you?",
      profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP3FqoYVPZxd_5TH71L8ccH4Mf7CxqWD0OxnPOL8_3bg&s",
    },
    {
      id: "3",
      sender: "+1234567890",
      timestamp: "2024-05-25T14:26:00Z",
      type: "text",
      content: "I'm doing great, thanks!",
      profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP3FqoYVPZxd_5TH71L8ccH4Mf7CxqWD0OxnPOL8_3bg&s",
    },
    {
      id: "4",
      sender: "+0987654321",
      timestamp: "2024-05-25T14:27:00Z",
      type: "image",
      profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP3FqoYVPZxd_5TH71L8ccH4Mf7CxqWD0OxnPOL8_3bg&s",
      content: {
        url: "https://example.com/image1.jpg",
        caption: "Check out this photo!",
      },
    },
    {
      id: "5",
      sender: "+1234567890",
      timestamp: "2024-05-25T14:30:00Z",
      type: "audio",
      content: {
        url: "https://example.com/audio1.mp3",
        duration: "00:00:30",
      },
      profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP3FqoYVPZxd_5TH71L8ccH4Mf7CxqWD0OxnPOL8_3bg&s",
    },
    {
      id: "6",
      sender: "+0987654321",
      timestamp: "2024-05-25T14:35:00Z",
      type: "video",
      content: {
        url: "https://example.com/video1.mp4",
        duration: "00:01:00",
      },
      profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP3FqoYVPZxd_5TH71L8ccH4Mf7CxqWD0OxnPOL8_3bg&s",
    },
    {
      id: "7",
      sender: "+7463897362",
      timestamp: "2024-05-26T14:23:00Z",
      type: "text",
      content: "I'm good ka. How about you?",
    },
    {
      id: "8",
      sender: "+954692383",
      timestamp: "2024-05-26T14:03:00Z",
      type: "text",
      content: "Chennai epadi bruh?",
    },
    {
      id: "9",
      sender: "+1111111111",
      timestamp: "2024-05-26T15:03:00Z",
      type: "text",
      content: "Hey, what's up?",
    },
    {
      id: "10",
      sender: "+2222222222",
      timestamp: "2024-05-26T16:03:00Z",
      type: "text",
      content: "Are we meeting today?",
    },
    {
      id: "11",
      sender: "+3333333333",
      timestamp: "2024-05-26T17:03:00Z",
      type: "text",
      content: "I have completed the task.",
    },
    {
      id: "12",
      sender: "+4444444444",
      timestamp: "2024-05-26T18:03:00Z",
      type: "text",
      content: "Let's catch up soon.",
    },
    {
      id: "13",
      sender: "+5555555555",
      timestamp: "2024-05-26T19:03:00Z",
      type: "text",
      content: "Where is the meeting?",
    },
    {
      id: "14",
      sender: "+6666666666",
      timestamp: "2024-05-26T20:03:00Z",
      type: "text",
      content: "I will be there in 10 minutes.",
    },
  ],
};

export const whatsappStatusData = [
  {
    name: "Nithesh",
    updated: "2024-05-25T14:23:00Z",
    content: 'Traveler',
    status: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3BmLTE0LWx1a2VzdGFja3Bvb2xlOS1jb29sLXJvYWQtZi1qb2I1ODAuanBn.jpg'
  },
  {
    name: "Balaji",
    updated: "2024-05-25T15:00:00Z",
    content: 'Nature Beauty',
    status: 'https://wallpaper.forfun.com/fetch/c5/c5b1810ebc9bd6aafa31c757b5efc687.jpeg'
  },
  {
    name: "Dharani",
    updated: "2024-05-25T16:30:00Z",
    content: 'Adobe Illustrator',
    status: 'https://cdn.pixabay.com/photo/2023/07/25/10/07/ai-generated-8148716_640.png'
  },
  {
    name: "Sanjay",
    updated: "2024-05-25T17:45:00Z",
    content: 'South indian No.1 Designer',
    status: 'https://i.pinimg.com/564x/6b/29/44/6b2944da0a46afc43632525d0aa868e2.jpg'
  },
  {
    name: "Varun",
    updated: "2024-05-25T18:10:00Z",
    content: 'Train Vlogs',
    status: 'https://w0.peakpx.com/wallpaper/929/270/HD-wallpaper-beautiful-scenery-mobile-beautiful-sky.jpg'
  },
  {
    name: "Thanush",
    updated: "2024-05-25T19:20:00Z",
    content: 'Dream',
    status: 'https://preview.redd.it/eerie-and-fantasy-wallpapers-for-your-mobile-devices-v0-w9wa06o7q0oa1.jpg?width=1080&crop=smart&auto=webp&s=d78204730a75bfbc799bad251e9f1171278f62c9'
  },
  {
    name: "Praveen",
    updated: "2024-05-25T20:30:00Z",
    content: 'Designer',
    status: 'https://i.pinimg.com/564x/6b/29/44/6b2944da0a46afc43632525d0aa868e2.jpg'
  },
  {
    name: "Yukendran",
    updated: "2024-05-25T21:15:00Z",
    content: 'Travelling On',
    status: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3BmLTE0LWx1a2VzdGFja3Bvb2xlOS1jb29sLXJvYWQtZi1qb2I1ODAuanBn.jpg'
  },
  {
    name: "Gowsinathan",
    updated: "2024-05-25T22:05:00Z",
    content: 'Captain America 🔥🔥🔥🔥',
    status: "https://assets.hongkiat.com/uploads/marvel-wallpapers/mobile/preview/marvel-mobile-wallpaper-1.jpg"
  },
  {
    name: "Saran",
    updated: "2024-05-25T23:00:00Z",
    content: 'Kodaikanal Dairies',
    status: 'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?cs=srgb&dl=pexels-8moments-1266810.jpg&fm=jpg'
  },
];

export const channelNames = ["nature","wild life","photography","travel","food"]