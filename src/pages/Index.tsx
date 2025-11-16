import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [planName, setPlanName] = useState('');
  const [planAmount, setPlanAmount] = useState('');
  const [planDate, setPlanDate] = useState<Date>();

  const handleLogin = () => {
    if (login && password) {
      setIsLoggedIn(true);
    }
  };

  const stats = [
    { label: 'Общий баланс', value: '₽125,430', change: '+12.5%', trend: 'up', icon: 'Wallet' },
    { label: 'Доходы', value: '₽89,200', change: '+8.2%', trend: 'up', icon: 'TrendingUp' },
    { label: 'Расходы', value: '₽52,380', change: '-3.1%', trend: 'down', icon: 'TrendingDown' },
    { label: 'Планы', value: '12', change: '+2', trend: 'up', icon: 'Target' }
  ];

  const recentPlans = [
    { name: 'Накопить на отпуск', progress: 75, amount: '₽150,000', color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
    { name: 'Новый ноутбук', progress: 45, amount: '₽80,000', color: 'bg-gradient-to-r from-blue-500 to-purple-500' },
    { name: 'Погашение кредита', progress: 60, amount: '₽200,000', color: 'bg-gradient-to-r from-pink-500 to-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <h1 className="text-3xl font-bold">
              <span className="text-black">Finan</span>
              <span className="text-red-500">See</span>
            </h1>

            {/* Auth Form */}
            {!isLoggedIn ? (
              <div className="flex items-center gap-3 animate-fade-in">
                <Input
                  type="text"
                  placeholder="Логин"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                  className="w-32 h-9 border-purple-200 focus:border-purple-400 transition-all"
                />
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-32 h-9 pr-9 border-purple-200 focus:border-purple-400 transition-all"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-600 transition-colors"
                  >
                    <Icon name={showPassword ? 'EyeOff' : 'Eye'} size={16} />
                  </button>
                </div>
                <Button 
                  onClick={handleLogin}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white h-9 transition-all duration-300 hover:scale-105"
                >
                  Войти
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-3 animate-fade-in">
                <span className="text-gray-600">Привет, {login}!</span>
                <Button 
                  variant="outline"
                  onClick={() => setIsLoggedIn(false)}
                  className="border-purple-200 hover:border-purple-400 hover:bg-purple-50"
                >
                  Выйти
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Menu */}
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
              onClick={() => setActiveMenu('plans')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                activeMenu === 'plans'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'text-gray-700 hover:bg-purple-50 hover:scale-102'
              }`}
            >
              <Icon name="List" size={20} />
              <span className="font-medium">Список планов</span>
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

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {activeMenu === 'dashboard' && (
              <>
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in">
                  Финансовый дашборд
                </h2>

                {/* Stats Grid */}
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

                {/* Recent Plans */}
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
            )}

            {/* New Plan Form */}
            {activeMenu === 'new' && (
              <div className="max-w-2xl mx-auto animate-fade-in">
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Новый план
                </h2>
                
                <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Название
                        </label>
                        <Input
                          type="text"
                          placeholder="Например: Накопить на отпуск"
                          value={planName}
                          onChange={(e) => setPlanName(e.target.value)}
                          className="w-full border-purple-200 focus:border-purple-400 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Начальная сумма
                        </label>
                        <Input
                          type="number"
                          placeholder="0"
                          value={planAmount}
                          onChange={(e) => setPlanAmount(e.target.value)}
                          className="w-full border-purple-200 focus:border-purple-400 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Период
                        </label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-left font-normal border-purple-200 hover:border-purple-400 hover:bg-purple-50"
                            >
                              <Icon name="Calendar" size={16} className="mr-2" />
                              {planDate ? format(planDate, 'dd MMMM yyyy', { locale: ru }) : <span>Выберите дату</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={planDate}
                              onSelect={setPlanDate}
                              initialFocus
                              locale={ru}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div className="flex items-center gap-4 pt-4">
                        <Button
                          className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white h-11 transition-all duration-300 hover:scale-105"
                          onClick={() => {
                            setPlanName('');
                            setPlanAmount('');
                            setPlanDate(undefined);
                            setActiveMenu('dashboard');
                          }}
                        >
                          Создать
                        </Button>
                        <button
                          onClick={() => {
                            setPlanName('');
                            setPlanAmount('');
                            setPlanDate(undefined);
                            setActiveMenu('dashboard');
                          }}
                          className="text-gray-600 hover:text-purple-600 font-medium transition-colors"
                        >
                          Отмена
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Plans List */}
            {activeMenu === 'plans' && (
              <div className="animate-fade-in">
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Список планов
                </h2>
                <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-6">
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
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;