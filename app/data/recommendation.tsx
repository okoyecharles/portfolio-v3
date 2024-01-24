export type Recommendation = {
  author: string;
  image: string;
  description: Array<string>;
  occupation: string;
  location: string;
}

const recommendationData: Array<Recommendation> = [
  {
    author: 'Aleksandra Ujvari',
    image: '/assets/recommendations/aleksandra-portrait.jpeg',
    occupation: 'Full-Stack Developer',
    description: [
      "Charles is a phenomenal developer; his approach to technical problems is incredible. Charles is a developer that every company wants to have on their team.",
      "We are from different countries and cultures, but we communicated effectively without blockers. If you are looking for a developer with both technical and soft skills, don't hesitate to contact him."
    ],
    location: 'Vojvodina, Serbia',
  },
  {
    author: 'Clifford Owusu',
    image: '/assets/recommendations/clifford-portrait.jpeg',
    occupation: 'Full-Stack Developer',
    description: [
      "Charles and I worked together on a couple of projects, and I appreciate his skills and discipline. He consistently gave 100% effort to our work and played a significant role in ensuring that we completed assignments on time.",
      "He has the focus and skills that keep him and his team productive during intense crunch periods. I couldn’t recommend him more for any business looking for new talent."],
    location: 'Ontario, Canada',
  },
  {
    author: 'Dorian Urem',
    occupation: 'Web Developer',
    image: '/assets/recommendations/dorian-portrait.jpeg',
    description: ["Charles is a great guy. His attitude and approach to work are really good. I would love to have him as a part of my team since he is hard-working, smart, and also technically competent. To see a young individual as driven as him is inspiring. He definitely has a bright future ahead of him."],
    location: 'Dubrovnik, Croatia',
  },
  {
    author: 'Elizabeth Ojesanmi',
    occupation: 'Integration Specialist',
    image: '/assets/recommendations/elizabeth-portrait.jpeg',
    description: [
      "When I think about Charles, the words “hardworking and innovative” spring to mind. Okoye Charles is someone I've had the pleasure of knowing, and we get along great.",
      "Charles is a great guy for any position needing a full-stack developer and has my highest recommendation."
    ],
    location: 'Accra, Ghana',
  },
  {
    author: 'Ishpaul Singh',
    occupation: 'Frontend Developer',
    image: '/assets/recommendations/ishpaul-portrait.jpeg',
    description: [
      "Charles is very knowledgeable when it comes to working with software tools and technologies, and he is also a very fast learner. I really enjoyed our pair-programming sessions together, as he was a helpful and understanding team member.",
      "I would recommend Okoye Charles for immediate full-stack jobs as he can also handle pressure well."
    ],
    location: 'New Delhi, India',
  },
  {
    author: 'Mohamed Aachour',
    occupation: 'Software Engineer',
    image: '/assets/recommendations/mohamed-portrait.jpeg',
    description: [
      "Charles Okoye is one of the best people I have ever met and is a loyal colleague who understands complex matters.",
      "He is a strong and goal-oriented team player; with every problem, there was a solution. Highly recommended."
    ],
    location: 'Kenitra, Morocco',
  },
  {
    author: 'Sidney Kaguli',
    occupation: 'Full-Stack Developer',
    image: '/assets/recommendations/sidney-portrait.jpeg',
    description: [
      "I had the pleasure of working with Charles on a three-week project (with 3 other members), a full-stack reservation app with Rails and React.",
      "I was particularly impressed by Charles' ability to handle challenges, whether it's getting to the root of buggy code or getting people on board with ideas."
    ],
    location: 'Nairobi County, Kenya',
  },
  {
    author: 'Tracey Kadenyi',
    occupation: 'Web Developer',
    image: '/assets/recommendations/tracey-portrait.jpeg',
    description: [
      "There are so many good things I can say about working with Okoye Charles. A high note for me was how impressive his technical skills are. He has expert knowledge in JavaScript, React.js, and Rails.",
      "He is always willing to help a teammate facing a code blocker without being condescending about it. Such generosity with knowledge and skill is what makes him easy and fun to work with. Trust me, you'd be lucky to have him on your team."
    ],
    location: 'Nairobi County, Kenya',
  }
]

export default recommendationData;