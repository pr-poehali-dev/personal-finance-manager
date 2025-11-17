import { useState } from 'react';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Dashboard from '@/components/Dashboard';
import NewPlanForm from '@/components/NewPlanForm';
import ActivePlan from '@/components/ActivePlan';

const Index = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [planName, setPlanName] = useState('');
  const [planAmount, setPlanAmount] = useState('');
  const [planDate, setPlanDate] = useState<Date>();
  const [activeTab, setActiveTab] = useState('income');

  const handleLogin = () => {
    if (login && password) {
      setIsLoggedIn(true);
    }
  };

  const stats = [
    { label: 'Общий баланс', value: '₽125,430', change: '+12.5%', trend: 'up' as const, icon: 'Wallet' },
    { label: 'Доходы', value: '₽89,200', change: '+8.2%', trend: 'up' as const, icon: 'TrendingUp' },
    { label: 'Расходы', value: '₽52,380', change: '-3.1%', trend: 'down' as const, icon: 'TrendingDown' },
    { label: 'Планы', value: '12', change: '+2', trend: 'up' as const, icon: 'Target' }
  ];

  const recentPlans = [
    { name: 'Накопить на отпуск', progress: 75, amount: '₽150,000', color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
    { name: 'Новый ноутбук', progress: 45, amount: '₽80,000', color: 'bg-gradient-to-r from-blue-500 to-purple-500' },
    { name: 'Погашение кредита', progress: 60, amount: '₽200,000', color: 'bg-gradient-to-r from-pink-500 to-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Header
        isLoggedIn={isLoggedIn}
        login={login}
        setLogin={setLogin}
        password={password}
        setPassword={setPassword}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        handleLogin={handleLogin}
        setIsLoggedIn={setIsLoggedIn}
      />

      <div className="flex">
        <aside className="w-64 min-h-[calc(100vh-73px)] bg-white/60 backdrop-blur-md border-r border-purple-100 p-6 animate-slide-in-right">
          <nav className="space-y-2">
            <button
              onClick={() => setActiveMenu('dashboard')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                activeMenu === 'dashboard'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'text-gray-700 hover:bg-purple-50 hover:scale-102'
              }`}
            >
              <Icon name="LayoutDashboard" size={20} />
              <span className="font-medium">Дашборд</span>
            </button>
            <button
              onClick={() => setActiveMenu('active-plan')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                activeMenu === 'active-plan'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'text-gray-700 hover:bg-purple-50 hover:scale-102'
              }`}
            >
              <Icon name="Target" size={20} />
              <span className="font-medium">Активный план</span>
            </button>
            <button
              onClick={() => setActiveMenu('new')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                activeMenu === 'new'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'text-gray-700 hover:bg-purple-50 hover:scale-102'
              }`}
            >
              <Icon name="Plus" size={20} />
              <span className="font-medium">Новый план</span>
            </button>
          </nav>
        </aside>

        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {activeMenu === 'dashboard' && (
              <Dashboard stats={stats} recentPlans={recentPlans} />
            )}

            {activeMenu === 'new' && (
              <NewPlanForm
                planName={planName}
                setPlanName={setPlanName}
                planAmount={planAmount}
                setPlanAmount={setPlanAmount}
                planDate={planDate}
                setPlanDate={setPlanDate}
                setActiveMenu={setActiveMenu}
              />
            )}

            {activeMenu === 'active-plan' && (
              <ActivePlan activeTab={activeTab} setActiveTab={setActiveTab} />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
