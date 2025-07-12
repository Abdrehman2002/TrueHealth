import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";

interface StatItem {
  number: number;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
}

interface AnimatedStatsProps {
  stats: StatItem[];
}

const AnimatedStats = ({ stats }: AnimatedStatsProps) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.3 });

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, index) => {
        const count = useCountUp(stat.number, 2000, isVisible);
        
        return (
          <Card 
            key={index} 
            className={`text-center transform transition-all duration-700 hover:scale-105 hover:shadow-xl ${
              isVisible 
                ? 'animate-bounce-in opacity-100' 
                : 'opacity-0 translate-y-10'
            }`}
            style={{ 
              animationDelay: `${index * 200}ms`,
              animationFillMode: 'both'
            }}
          >
            <CardContent className="p-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center animate-pulse-glow">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl font-bold text-trust-blue mb-2">
                {count}{stat.suffix}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default AnimatedStats;