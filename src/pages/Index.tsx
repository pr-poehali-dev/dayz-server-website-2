import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const donateItems = [
  {
    id: 1,
    title: 'VIP',
    price: 299,
    features: ['Приоритет входа', 'Цветной ник', 'Доступ к VIP чату', '20% скидка в магазине'],
    popular: false
  },
  {
    id: 2,
    title: 'PREMIUM',
    price: 599,
    features: ['Все из VIP', 'Личный гараж', 'Телепорт к дому', 'Бессмертие 1 раз в день', '40% скидка в магазине'],
    popular: true
  },
  {
    id: 3,
    title: 'ELITE',
    price: 999,
    features: ['Все из PREMIUM', 'Летающий дрон', 'Неограниченный спринт', 'Приватная зона', '60% скидка в магазине'],
    popular: false
  }
];

const items = [
  { id: 1, name: 'AK-47', price: 150, category: 'weapon' },
  { id: 2, name: 'M4A1', price: 180, category: 'weapon' },
  { id: 3, name: 'Военный рюкзак', price: 100, category: 'gear' },
  { id: 4, name: 'Бронежилет', price: 120, category: 'gear' },
  { id: 5, name: 'Аптечка х10', price: 80, category: 'medical' },
  { id: 6, name: 'Провизия х20', price: 60, category: 'food' }
];

const rules = [
  {
    title: 'Общие правила',
    content: 'Запрещены читы, баги, дюпы и эксплойты. За нарушение - перманентный бан без возможности разбана.'
  },
  {
    title: 'PvP правила',
    content: 'Убийство в сейфзоне запрещено. KOS разрешен везде кроме торговых точек. Макросы на стрельбу запрещены.'
  },
  {
    title: 'Постройки',
    content: 'Запрещено строить в городах и на точках спавна. Неактивные базы более 14 дней удаляются администрацией.'
  },
  {
    title: 'Поведение',
    content: 'Запрещены оскорбления, расизм, токсичность. Уважайте других игроков и администрацию сервера.'
  }
];

export default function Index() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Skull" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-foreground">DAYZ RUSSIA</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <button onClick={() => setActiveTab('home')} className={`text-sm font-medium transition-colors hover:text-primary ${activeTab === 'home' ? 'text-primary' : 'text-muted-foreground'}`}>
              Главная
            </button>
            <button onClick={() => setActiveTab('rules')} className={`text-sm font-medium transition-colors hover:text-primary ${activeTab === 'rules' ? 'text-primary' : 'text-muted-foreground'}`}>
              Правила
            </button>
            <button onClick={() => setActiveTab('donate')} className={`text-sm font-medium transition-colors hover:text-primary ${activeTab === 'donate' ? 'text-primary' : 'text-muted-foreground'}`}>
              Донат
            </button>
            <button onClick={() => setActiveTab('contacts')} className={`text-sm font-medium transition-colors hover:text-primary ${activeTab === 'contacts' ? 'text-primary' : 'text-muted-foreground'}`}>
              Контакты
            </button>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Играть сейчас
          </Button>
        </div>
      </nav>

      <main className="pt-20">
        {activeTab === 'home' && (
          <>
            <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background z-10" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1920')] bg-cover bg-center opacity-20" />
              <div className="relative z-20 text-center px-4 animate-fade-in">
                <h1 className="text-6xl md:text-8xl font-bold mb-6 text-foreground">
                  ВЫЖИВАЙ
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Самый хардкорный DayZ сервер в России. PvP, рейды, выживание. Только сильнейшие останутся в живых.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
                    <Icon name="Gamepad2" size={20} className="mr-2" />
                    Подключиться
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8">
                    <Icon name="Users" size={20} className="mr-2" />
                    Discord
                  </Button>
                </div>
              </div>
            </section>

            <section className="py-16 px-4">
              <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card className="bg-card border-border hover:border-primary transition-colors">
                    <CardHeader>
                      <Icon name="Users" size={40} className="text-primary mb-4" />
                      <CardTitle className="text-2xl">Онлайн 24/7</CardTitle>
                      <CardDescription>До 60 игроков одновременно</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Стабильная работа сервера без лагов и вайпов. Мощное железо и защита от DDoS.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border hover:border-primary transition-colors">
                    <CardHeader>
                      <Icon name="Map" size={40} className="text-secondary mb-4" />
                      <CardTitle className="text-2xl">Огромная карта</CardTitle>
                      <CardDescription>Chernarus+ с модами</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Расширенная карта с новыми локациями, военными базами и секретными бункерами.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border hover:border-primary transition-colors">
                    <CardHeader>
                      <Icon name="Sword" size={40} className="text-destructive mb-4" />
                      <CardTitle className="text-2xl">Хардкор PvP</CardTitle>
                      <CardDescription>Без поблажек</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Настоящее выживание с реалистичным уроном и экономикой. Только сильные выживут.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            <section className="py-16 px-4 bg-accent">
              <div className="container mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Статистика сервера</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                  <div className="animate-fade-in">
                    <div className="text-5xl font-bold text-primary mb-2">2,847</div>
                    <div className="text-muted-foreground">Игроков</div>
                  </div>
                  <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <div className="text-5xl font-bold text-secondary mb-2">42</div>
                    <div className="text-muted-foreground">Онлайн сейчас</div>
                  </div>
                  <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div className="text-5xl font-bold text-destructive mb-2">18,294</div>
                    <div className="text-muted-foreground">Убийств</div>
                  </div>
                  <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <div className="text-5xl font-bold text-foreground mb-2">124</div>
                    <div className="text-muted-foreground">Дней аптайма</div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {activeTab === 'rules' && (
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl">
              <h1 className="text-5xl font-bold mb-8 text-center animate-fade-in">Правила сервера</h1>
              <p className="text-center text-muted-foreground mb-12 text-lg">
                Незнание правил не освобождает от ответственности. Читайте внимательно.
              </p>
              
              <Accordion type="single" collapsible className="space-y-4">
                {rules.map((rule, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-card border-border rounded-lg px-6">
                    <AccordionTrigger className="text-xl font-semibold hover:text-primary">
                      <div className="flex items-center">
                        <Icon name="AlertTriangle" size={24} className="text-primary mr-3" />
                        {rule.title}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base pt-4">
                      {rule.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <Card className="mt-12 bg-destructive/10 border-destructive">
                <CardHeader>
                  <CardTitle className="flex items-center text-destructive">
                    <Icon name="ShieldAlert" size={28} className="mr-2" />
                    Важно!
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground">
                    За нарушение правил игрок получает бан без предупреждения. Администрация имеет право отказать в разбане.
                    При покупке доната вы автоматически соглашаетесь со всеми правилами сервера.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {activeTab === 'donate' && (
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <h1 className="text-5xl font-bold mb-4 text-center animate-fade-in">Донат магазин</h1>
              <p className="text-center text-muted-foreground mb-12 text-lg">
                Поддержи проект и получи преимущества
              </p>

              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Привилегии</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {donateItems.map((item) => (
                    <Card key={item.id} className={`relative ${item.popular ? 'border-primary border-2 scale-105' : 'border-border'}`}>
                      {item.popular && (
                        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                          Популярное
                        </Badge>
                      )}
                      <CardHeader>
                        <CardTitle className="text-3xl text-center">{item.title}</CardTitle>
                        <CardDescription className="text-center text-4xl font-bold text-foreground mt-4">
                          {item.price} ₽
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {item.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <Icon name="Check" size={20} className="text-secondary mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                          Купить
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8 text-center">Предметы</h2>
                <Tabs defaultValue="weapon" className="max-w-4xl mx-auto">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="weapon">Оружие</TabsTrigger>
                    <TabsTrigger value="gear">Снаряжение</TabsTrigger>
                    <TabsTrigger value="medical">Медикаменты</TabsTrigger>
                    <TabsTrigger value="food">Еда</TabsTrigger>
                  </TabsList>
                  
                  {['weapon', 'gear', 'medical', 'food'].map((category) => (
                    <TabsContent key={category} value={category}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        {items
                          .filter((item) => item.category === category)
                          .map((item) => (
                            <Card key={item.id} className="bg-card border-border hover:border-primary transition-colors">
                              <CardHeader>
                                <CardTitle className="flex justify-between items-center">
                                  <span>{item.name}</span>
                                  <Badge variant="outline" className="text-primary border-primary">
                                    {item.price} ₽
                                  </Badge>
                                </CardTitle>
                              </CardHeader>
                              <CardFooter>
                                <Button className="w-full" variant="outline">
                                  <Icon name="ShoppingCart" size={18} className="mr-2" />
                                  Купить
                                </Button>
                              </CardFooter>
                            </Card>
                          ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'contacts' && (
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl">
              <h1 className="text-5xl font-bold mb-8 text-center animate-fade-in">Контакты</h1>
              <p className="text-center text-muted-foreground mb-12 text-lg">
                Свяжитесь с нами по любым вопросам
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="bg-card border-border hover:border-primary transition-colors">
                  <CardHeader>
                    <Icon name="MessageSquare" size={40} className="text-primary mb-4" />
                    <CardTitle className="text-2xl">Discord</CardTitle>
                    <CardDescription>Самый быстрый способ связи</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Присоединяйся к нашему Discord серверу для общения с игроками и администрацией.
                    </p>
                    <Button className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white">
                      <Icon name="MessageSquare" size={18} className="mr-2" />
                      Присоединиться
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border hover:border-primary transition-colors">
                  <CardHeader>
                    <Icon name="Send" size={40} className="text-[#0088cc] mb-4" />
                    <CardTitle className="text-2xl">Telegram</CardTitle>
                    <CardDescription>Новости и обновления</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Подпишись на наш Telegram канал, чтобы быть в курсе всех новостей сервера.
                    </p>
                    <Button className="w-full bg-[#0088cc] hover:bg-[#006699] text-white">
                      <Icon name="Send" size={18} className="mr-2" />
                      Подписаться
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border hover:border-primary transition-colors">
                  <CardHeader>
                    <Icon name="Mail" size={40} className="text-secondary mb-4" />
                    <CardTitle className="text-2xl">Email</CardTitle>
                    <CardDescription>Техническая поддержка</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">
                      Для официальных обращений и технических вопросов:
                    </p>
                    <p className="text-foreground font-mono">support@dayzrussia.ru</p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border hover:border-primary transition-colors">
                  <CardHeader>
                    <Icon name="Gamepad2" size={40} className="text-destructive mb-4" />
                    <CardTitle className="text-2xl">IP сервера</CardTitle>
                    <CardDescription>Подключение к игре</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">
                      Добавь в избранное:
                    </p>
                    <p className="text-foreground font-mono text-lg">93.184.216.34:2302</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-12 bg-accent border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Часы работы администрации</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-2">
                    <p className="text-muted-foreground">Понедельник - Пятница: 10:00 - 22:00 МСК</p>
                    <p className="text-muted-foreground">Суббота - Воскресенье: 12:00 - 20:00 МСК</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      Среднее время ответа: 30 минут
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}
      </main>

      <footer className="bg-accent border-t border-border py-8 px-4 mt-16">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Skull" size={28} className="text-primary" />
            <span className="text-xl font-bold">DAYZ RUSSIA</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2025 DayZ Russia. Все права защищены. Проект не связан с Bohemia Interactive.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <button className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="MessageSquare" size={20} />
            </button>
            <button className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Send" size={20} />
            </button>
            <button className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Youtube" size={20} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
