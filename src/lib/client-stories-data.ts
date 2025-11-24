import BeforeTransformationMan from '@/assets/before-transformation-man.jpg';
import AfterTransformationMuscularMan from '@/assets/after-transformation-muscular-man.jpg';
import BeforeTransformationOverweightMan from '@/assets/before-transformation-overweight-man.jpg';
import AfterTransformationFitMan from '@/assets/after-transformation-fit-man.jpg';
import BeforeTransformationWoman from '@/assets/before-transformation-woman.jpg';
import AfterTransformationFitWoman from '@/assets/after-transformation-fit-woman.jpg';

export interface ClientStory {
  id: number;
  name: string;
  slug: string | undefined;
  title: string;
  beforeImage: ImageMetadata;
  afterImage: ImageMetadata;
  testimonial: string;
  duration: string;
  fullStory: string;
  startDate: string;
  endDate: string;
  goals: string[];
  results: string[];
  challenges: string[];
  keyTakeaways: string[];
}

export const clientStoriesData: ClientStory[] = [
  {
    id: 1,
    name: 'Jack Smith',
    slug: 'jack-smith',
    title: '2-year transformation',
    beforeImage: BeforeTransformationMan,
    afterImage: AfterTransformationMuscularMan,
    testimonial:
      'Jack aspired to a shredded, muscular body. Through dedication and hard work, he made it a reality.',
    duration: '2-year transformation',
    fullStory:
      "Jack came to me with a clear vision: to achieve a shredded, muscular physique. Over the course of two years, through consistent training, disciplined nutrition, and unwavering commitment, he transformed his body completely. His journey wasn't just about aesthetics—it was about building confidence, strength, and a sustainable lifestyle that he could maintain long-term.",
    startDate: 'January 2022',
    endDate: 'January 2024',
    goals: [
      'Build lean muscle mass',
      'Reduce body fat percentage',
      'Increase overall strength',
      'Achieve visible muscle definition',
    ],
    results: [
      'Lost 35 lbs of fat while gaining 20 lbs of muscle',
      'Reduced body fat from 28% to 12%',
      'Increased bench press by 85 lbs',
      'Achieved visible six-pack abs',
    ],
    challenges: [
      'Maintaining consistency with work schedule',
      'Overcoming plateaus in strength gains',
      'Adjusting nutrition for muscle building',
      'Staying motivated during slower progress periods',
    ],
    keyTakeaways: [
      'Consistency beats perfection every time',
      'Progressive overload is key to muscle growth',
      'Nutrition is 70% of the transformation',
      'Recovery and sleep are non-negotiable',
    ],
  },
  {
    id: 2,
    name: 'Philip Wang',
    slug: 'philip-wang',
    title: '18-month transformation',
    beforeImage: BeforeTransformationOverweightMan,
    afterImage: AfterTransformationFitMan,
    testimonial:
      'Philip aimed to lose fat and build muscle. With determination and a solid plan, he succeeded remarkably.',
    duration: '18-month transformation',
    fullStory:
      "Philip's journey was about finding balance—losing the excess weight while building a strong, athletic physique. Starting from a place of low fitness, he committed to a structured program that combined strength training with cardiovascular work. His transformation is a testament to the power of having a clear plan and sticking to it.",
    startDate: 'June 2022',
    endDate: 'December 2023',
    goals: [
      'Lose 50+ pounds',
      'Build functional strength',
      'Improve cardiovascular health',
      'Develop athletic physique',
    ],
    results: [
      'Lost 52 lbs of fat',
      'Increased muscle mass by 15 lbs',
      'Improved cardiovascular endurance by 40%',
      'Reduced resting heart rate from 85 to 62 bpm',
    ],
    challenges: [
      'Breaking old eating habits',
      'Building consistency with exercise',
      'Managing energy levels during caloric deficit',
      'Staying committed through plateaus',
    ],
    keyTakeaways: [
      'Small daily habits compound into massive results',
      'Tracking progress keeps you motivated',
      'Community and accountability matter',
      'Sustainable changes beat quick fixes',
    ],
  },
  {
    id: 3,
    name: 'Anna Taylor',
    slug: 'anna-taylor',
    title: '12-month transformation',
    beforeImage: BeforeTransformationWoman,
    afterImage: AfterTransformationFitWoman,
    testimonial:
      'A year ago, Anna approached me with the goal of simultaneously losing fat and building muscle.',
    duration: '12-month transformation',
    fullStory:
      "Anna's goal was ambitious: lose fat while building muscle in just 12 months. Through a carefully balanced approach combining strength training and nutrition optimization, she achieved remarkable results. Her transformation shows that with the right strategy and dedication, you can achieve multiple fitness goals simultaneously.",
    startDate: 'January 2023',
    endDate: 'January 2024',
    goals: [
      'Lose 25 lbs of fat',
      'Build lean muscle',
      'Increase strength',
      'Improve body composition',
    ],
    results: [
      'Lost 28 lbs of fat',
      'Gained 12 lbs of muscle',
      'Improved body fat percentage from 32% to 22%',
      'Increased squat strength by 60 lbs',
    ],
    challenges: [
      'Balancing fat loss with muscle gain',
      'Finding time for training with busy schedule',
      'Staying consistent with meal prep',
      'Managing hunger during fat loss phase',
    ],
    keyTakeaways: [
      'Body recomposition is possible with patience',
      'Strength training is essential for women',
      'Protein intake is crucial for muscle retention',
      "Progress isn't always linear on the scale",
    ],
  },
];
