import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ActivePlanProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const ActivePlan = ({ activeTab, setActiveTab }: ActivePlanProps) => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Активный план
      </h2>

      <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm mb-6">
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">План на ноябрь</h3>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Icon name="Calendar" size={16} />
                  <span>01 ноября 2025 — 30 ноября 2025</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50">
                <div className="text-sm text-gray-600 mb-1">Текущий баланс</div>
                <div className="text-3xl font-bold text-purple-600">
                  ₽112,500
                </div>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="text-sm text-gray-600 mb-1">Баланс в день</div>
                <div className="text-3xl font-bold text-blue-600">₽308</div>
                <div className="text-xs text-gray-500 mt-1">
                  на текущий период
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab("income")}
          className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
            activeTab === "income"
              ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg scale-105"
              : "bg-white/80 text-gray-700 hover:bg-white hover:shadow-md"
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <Icon name="TrendingUp" size={18} />
            <span>Доходы</span>
          </div>
        </button>
        <button
          onClick={() => setActiveTab("expenses")}
          className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
            activeTab === "expenses"
              ? "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg scale-105"
              : "bg-white/80 text-gray-700 hover:bg-white hover:shadow-md"
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <Icon name="TrendingDown" size={18} />
            <span>Расходы</span>
          </div>
        </button>
        <button
          onClick={() => setActiveTab("savings")}
          className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
            activeTab === "savings"
              ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg scale-105"
              : "bg-white/80 text-gray-700 hover:bg-white hover:shadow-md"
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <Icon name="PiggyBank" size={18} />
            <span>Сбережения</span>
          </div>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <Icon name="Clock" size={20} />
              Запланированные
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {activeTab === "income" && (
              <>
                <div className="p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 hover:shadow-md transition-all duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-800">Зарплата</h4>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <Icon name="Calendar" size={12} />
                        <span>15 января 2025</span>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-green-600">
                      +₽80,000
                    </span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 hover:shadow-md transition-all duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-800">Бонус</h4>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <Icon name="Calendar" size={12} />
                        <span>20 января 2025</span>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-green-600">
                      +₽15,000
                    </span>
                  </div>
                </div>
              </>
            )}
            {activeTab === "expenses" && (
              <>
                <div className="p-4 rounded-xl bg-gradient-to-r from-red-50 to-pink-50 hover:shadow-md transition-all duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-800">Аренда</h4>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <Icon name="Calendar" size={12} />
                        <span>01 января 2025</span>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-red-600">
                      -₽30,000
                    </span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-r from-red-50 to-pink-50 hover:shadow-md transition-all duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-800">Продукты</h4>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <Icon name="Calendar" size={12} />
                        <span>05 января 2025</span>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-red-600">
                      -₽10,000
                    </span>
                  </div>
                </div>
              </>
            )}
            {activeTab === "savings" && (
              <>
                <div className="p-4 rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50 hover:shadow-md transition-all duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Ежемесячные сбережения
                      </h4>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <Icon name="Calendar" size={12} />
                        <span>01 января 2025</span>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-purple-600">
                      ₽25,000
                    </span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50 hover:shadow-md transition-all duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Доп. накопление
                      </h4>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <Icon name="Calendar" size={12} />
                        <span>15 января 2025</span>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-purple-600">
                      ₽10,000
                    </span>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <Icon name="CheckCircle" size={20} />
              Совершенные
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {activeTab === "income" && (
              <>
                <div className="p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 hover:shadow-md transition-all duration-300 border-l-4 border-green-500">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Зарплата декабрь
                      </h4>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <Icon name="Calendar" size={12} />
                        <span>15 декабря 2024</span>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-green-600">
                      +₽80,000
                    </span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 hover:shadow-md transition-all duration-300 border-l-4 border-green-500">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Фриланс проект
                      </h4>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <Icon name="Calendar" size={12} />
                        <span>20 декабря 2024</span>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-green-600">
                      +₽12,500
                    </span>
                  </div>
                </div>
              </>
            )}
            {activeTab === "expenses" && (
              <>
                <div className="p-4 rounded-xl bg-gradient-to-r from-red-50 to-pink-50 hover:shadow-md transition-all duration-300 border-l-4 border-red-500">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Аренда декабрь
                      </h4>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <Icon name="Calendar" size={12} />
                        <span>01 декабря 2024</span>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-red-600">
                      -₽30,000
                    </span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-r from-red-50 to-pink-50 hover:shadow-md transition-all duration-300 border-l-4 border-red-500">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Коммунальные услуги
                      </h4>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <Icon name="Calendar" size={12} />
                        <span>10 декабря 2024</span>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-red-600">
                      -₽5,200
                    </span>
                  </div>
                </div>
              </>
            )}
            {activeTab === "savings" && (
              <>
                <div className="p-4 rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50 hover:shadow-md transition-all duration-300 border-l-4 border-purple-500">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Декабрь накопления
                      </h4>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <Icon name="Calendar" size={12} />
                        <span>01 декабря 2024</span>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-purple-600">
                      ₽25,000
                    </span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50 hover:shadow-md transition-all duration-300 border-l-4 border-purple-500">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Доп. взнос
                      </h4>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <Icon name="Calendar" size={12} />
                        <span>15 декабря 2024</span>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-purple-600">
                      ₽8,000
                    </span>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ActivePlan;
