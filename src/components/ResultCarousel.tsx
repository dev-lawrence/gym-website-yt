import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ClientStory {
  id: number;
  slug?: string;
  name: string;
  title: string;
  beforeImage: ImageMetadata;
  afterImage: ImageMetadata;
  testimonial: string;
  duration: string;
}

interface ClientStoriesCarouselProps {
  stories: ClientStory[];
  autoPlayInterval?: number;
}

const ResultCarousel = ({
  stories,
  autoPlayInterval,
}: ClientStoriesCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stories.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlay, stories.length, autoPlayInterval]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const currentStory = stories[currentIndex];

  return (
    <div className="w-full bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <h2 className="text-4xl leading-[1.3] font-bold mb-2 md:text-5xl">
            Results speak for themselves
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from our clients about their incredible transformations and
            experiences working with us.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="flex items-center justify-center gap-4 sm:gap-8">
          <button
            onClick={goToPrevious}
            className="hidden sm:flex sm:items-center sm:justify-center size-10 rounded-full border border-border hover:bg-accent transition-colors"
            aria-label="Previous Story"
          >
            <ChevronLeft className="size-5" />
          </button>
          {/* Story Card */}
          <div className="w-full max-w-2xl">
            <div className="rounded-lg border border-border bg-card/50 backdrop-blur-sm overflow-hidden">
              <div className="relative overflow-hidden bg-muted">
                <div className="flex gap-2 sm:gap-4 p-4 sm:p-6">
                  {/* Before Image */}
                  <div className="flex-1 aspect-3/4 rounded-md overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={currentStory.beforeImage.src}
                      alt={`${currentStory.name} before`}
                    />
                  </div>

                  {/* After Image */}
                  <div className="flex-1 aspect-3/4 rounded-md overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={currentStory.afterImage.src}
                      alt={`${currentStory.name} after`}
                    />
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-sm font-semibold text-muted-foreground mb-3">
                  {currentStory.duration}
                </p>

                <p className="text-lg sm:text-xl  text-foreground mb-6 leading-relaxed">
                  {currentStory.testimonial}
                </p>

                <div className="flex items-center justify-between">
                  <p className="font-semibold text-primary">
                    - {currentStory.name}
                  </p>
                  <a
                    className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
                    href={`/client-story/${currentStory.slug}`}
                  >
                    Read More <span className="text-lg">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={goToNext}
            className="hidden sm:flex sm:items-center sm:justify-center size-10 rounded-full border border-border hover:bg-accent transition-colors"
            aria-label="Next Story"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="flex sm:hidden justify-between mt-4 gap-2">
          <button
            onClick={goToPrevious}
            className="flex-1 flex items-center justify-center size-10 rounded-md border border-border hover:bg-accent transition-colors"
            aria-label="Previous Story"
          >
            <ChevronLeft className="size-5" />
          </button>

          <button
            onClick={goToNext}
            className="flex-1 flex items-center justify-center size-10 rounded-md border border-border hover:bg-accent transition-colors"
            aria-label="Next Story"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                'size-2 rounded-full transition-all duration-300',
                index === currentIndex
                  ? 'bg-primary w-8'
                  : 'bg-muted-foreground hover:bg-muted-foreground/70'
              )}
              aria-label={`Go to Story ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultCarousel;
