import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const { toast } = useToast();

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
  };

  const services = [
    {
      icon: "Code",
      title: "Веб-разработка",
      description: "Создаем современные веб-приложения с использованием передовых технологий"
    },
    {
      icon: "Smartphone",
      title: "Мобильные приложения",
      description: "Разработка нативных и кроссплатформенных мобильных решений"
    },
    {
      icon: "Palette",
      title: "UI/UX дизайн",
      description: "Проектируем интуитивные и визуально привлекательные интерфейсы"
    },
    {
      icon: "BarChart",
      title: "Аналитика",
      description: "Внедряем системы аналитики и визуализации данных"
    },
    {
      icon: "Cloud",
      title: "Облачные решения",
      description: "Разворачиваем масштабируемую инфраструктуру в облаке"
    },
    {
      icon: "Shield",
      title: "Кибербезопасность",
      description: "Обеспечиваем защиту данных и безопасность приложений"
    }
  ];

  const portfolio = [
    {
      image: "https://cdn.poehali.dev/projects/fe21baa9-66cb-4666-b7f7-d130ebd35fc1/files/f1a96e0f-1c88-4873-bf09-144ec40ddc4e.jpg",
      title: "Корпоративный портал",
      category: "Веб-разработка"
    },
    {
      image: "https://cdn.poehali.dev/projects/fe21baa9-66cb-4666-b7f7-d130ebd35fc1/files/e4b73d78-5c32-459e-9f46-80b063bfed73.jpg",
      title: "Мобильное приложение",
      category: "Mobile"
    },
    {
      image: "https://cdn.poehali.dev/projects/fe21baa9-66cb-4666-b7f7-d130ebd35fc1/files/689da579-e4e2-44c1-8c61-570e637105d1.jpg",
      title: "E-commerce платформа",
      category: "Веб-разработка"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-heading font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              LOGO
            </div>
            <div className="hidden md:flex items-center gap-8">
              {["home", "about", "services", "portfolio", "contacts"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {section === "home" && "Главная"}
                  {section === "about" && "О нас"}
                  {section === "services" && "Услуги"}
                  {section === "portfolio" && "Портфолио"}
                  {section === "contacts" && "Контакты"}
                </button>
              ))}
            </div>
            <Button className="hidden md:inline-flex">Связаться</Button>
          </div>
        </nav>
      </header>

      <section
        id="home"
        className="pt-32 pb-20 px-6 min-h-screen flex items-center bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
                Инновации для
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  {" "}вашего бизнеса
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Создаем цифровые решения, которые трансформируют бизнес-процессы и открывают новые возможности
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Начать проект
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("portfolio")}>
                  Портфолио
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <img
                src="https://cdn.poehali.dev/projects/fe21baa9-66cb-4666-b7f7-d130ebd35fc1/files/689da579-e4e2-44c1-8c61-570e637105d1.jpg"
                alt="Hero"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">О компании</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Мы — команда профессионалов с более чем 10-летним опытом в разработке цифровых продуктов. 
              Наша миссия — создавать технологические решения, которые помогают бизнесу расти и развиваться.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="space-y-2">
                <div className="text-5xl font-bold text-primary">150+</div>
                <div className="text-muted-foreground">Завершенных проектов</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold text-secondary">50+</div>
                <div className="text-muted-foreground">Довольных клиентов</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold text-accent">10</div>
                <div className="text-muted-foreground">Лет на рынке</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг для цифровой трансформации вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon as any} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Портфолио</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Наши последние проекты, которыми мы гордимся
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div
                key={index}
                className="group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="text-sm text-secondary mb-2">{project.category}</div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground">
              Готовы начать проект? Напишите нам!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="text-primary" size={24} />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <div className="text-muted-foreground">info@company.com</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="text-secondary" size={24} />
                </div>
                <div>
                  <div className="font-semibold mb-1">Телефон</div>
                  <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-accent" size={24} />
                </div>
                <div>
                  <div className="font-semibold mb-1">Адрес</div>
                  <div className="text-muted-foreground">г. Москва, ул. Примерная, д. 1</div>
                </div>
              </div>
            </div>
            <Card className="border-2">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" required />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" required />
                  </div>
                  <div>
                    <Textarea placeholder="Сообщение" rows={4} required />
                  </div>
                  <Button type="submit" className="w-full">
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Company. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
