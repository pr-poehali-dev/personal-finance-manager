import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface DashboardProps {
  stats: Array<{
    label: string;
    value: string;
    change: string;
    trend: 'up' | 'down';
    icon: string;
  }>;
  recentPlans: Array<{
    name: string;
    progress: number;
    amount: string;
    color: string;
  }>;
}

const Dashboard = ({ stats, recentPlans }: DashboardProps) => {
  return (
    <>
      <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in">
        Финансовый дашборд
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card 
            key={index} 
            className="border-none shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center justify-between">
                {stat.label}
                <div className={`p-2 rounded-lg ${stat.trend === 'up' ? 'bg-green-100' : 'bg-red-100'}`}>
                  <Icon name={stat.icon} size={18} className={stat.trend === 'up' ? 'text-green-600' : 'text-red-600'} />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <p className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm animate-fade-in">
        <CardHeader>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Активные планы
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {recentPlans.map((plan, index) => (
            <div key={index} className="space-y-2 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 hover:shadow-md transition-all duration-300">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg">{plan.name}</h3>
                <span className="text-sm font-medium text-gray-600">{plan.amount}</span>
              </div>
              <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${plan.color} rounded-full transition-all duration-500`}
                  style={{ width: `${plan.progress}%` }}
                />
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Прогресс</span>
                <span className="font-semibold text-purple-600">{plan.progress}%</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
};

export default Dashboard;
