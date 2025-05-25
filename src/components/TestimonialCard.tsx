
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  company: string;
  text: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, company, text, rating }) => {
  return (
    <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 h-full">
      <CardContent className="p-8 flex flex-col h-full">
        <div className="flex mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>
        
        <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 flex-grow">
          "{text}"
        </blockquote>
        
        <div className="border-t border-slate-700 pt-4">
          <div className="font-semibold text-white">{name}</div>
          <div className="text-cyan-400 text-sm">{company}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
