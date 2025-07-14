import logo from './logo_ic.png'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import p1 from './p1.png'
import p2 from './p2.png'
import p3 from './p3.png'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'

export const assets = {
    
    logo,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon
}

export const stepsData = [
    {
      title: 'Describe Your Vision',
      description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
      icon: step_icon_1,
    },
    {
      title: 'Watch the Magic',
      description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
      icon: step_icon_2,
    },
    {
      title: 'Download & Share',
      description: 'Instantly download your creation or share it with the world directly from our platform.',
      icon: step_icon_3,
    },
  ];

export const testimonialsData = [
    {
        image:p1,
        name:'Donald Jackman',
        role:'Graphic Designer',
        stars:5,
        text:"I was amazed at how quickly and accurately this tool brings words to life. Whether I need visuals for presentations or social media, it delivers stunning images every time — no design skills needed!"
    },
    {
        image:p2,
        name:'Emily Carter',
        role:'Content Creator',
        stars:4,
        text:"As a content creator, I’ve tried many tools, but this text-to-image converter stands out. The results are consistently high-quality, and the interface is smooth and intuitive. It's now a go-to in my creative workflow."
    },
    {
        image:p3,
        name:'Donald Jackman',
        role:' Graphic Designer',
        stars:5,
        text:"This tool has completely changed how I generate visuals for my projects. Turning ideas into images with just a few words saves me hours of effort. It's fast, reliable, and perfect for both beginners and pros."
    },
]

export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]