
import { Star, StarHalf } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  totalStars?: number;
  size?: number;
  className?: string;
  showText?: boolean;
  ratingCount?: number;
}

export function StarRating({
  rating,
  totalStars = 5,
  size = 5, // Corresponds to h-5 w-5
  className,
  showText = true,
  ratingCount,
}: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);

  const starSizeClass = `h-${size} w-${size}`;

  return (
    <div className={cn("flex items-center gap-2 text-muted-foreground", className)}>
      <div className="flex items-center" aria-label={`Rating: ${rating} out of ${totalStars} stars`}>
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className={cn(starSizeClass, "text-yellow-400 fill-yellow-400")} />
        ))}
        {hasHalfStar && (
          <StarHalf key="half" className={cn(starSizeClass, "text-yellow-400 fill-yellow-400")} />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className={cn(starSizeClass, "text-yellow-400")} /> // Outline only
        ))}
      </div>
      {showText && (
        <span className="text-sm">
          {rating.toFixed(1)}
          {ratingCount !== undefined && (
            <span className="ml-1 text-xs">({ratingCount} ratings)</span>
          )}
        </span>
      )}
    </div>
  );
}
