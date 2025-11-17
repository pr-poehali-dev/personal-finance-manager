import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import Icon from '@/components/ui/icon';

interface NewPlanFormProps {
  planName: string;
  setPlanName: (value: string) => void;
  planAmount: string;
  setPlanAmount: (value: string) => void;
  planDate: Date | undefined;
  setPlanDate: (date: Date | undefined) => void;
  setActiveMenu: (menu: string) => void;
}

const NewPlanForm = ({
  planName,
  setPlanName,
  planAmount,
  setPlanAmount,
  planDate,
  setPlanDate,
  setActiveMenu
}: NewPlanFormProps) => {
  return (
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
  );
};

export default NewPlanForm;
