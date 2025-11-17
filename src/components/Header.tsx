import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  isLoggedIn: boolean;
  login: string;
  setLogin: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  showPassword: boolean;
  setShowPassword: (value: boolean) => void;
  handleLogin: () => void;
  setIsLoggedIn: (value: boolean) => void;
}

const Header = ({
  isLoggedIn,
  login,
  setLogin,
  password,
  setPassword,
  showPassword,
  setShowPassword,
  handleLogin,
  setIsLoggedIn
}: HeaderProps) => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">
            <span className="text-black">Finan</span>
            <span className="text-red-500">See</span>
          </h1>

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
  );
};

export default Header;
