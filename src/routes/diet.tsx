import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Utensils, Info, CheckCircle2 } from "lucide-react";
import oatmealImg from "@/assets/oatmeal_banana.png";
import cottageCheeseImg from "@/assets/cottage_cheese.png";

export const Route = createFileRoute("/diet")({
  component: DietPage,
  head: () => ({
    meta: [
      { title: "Diet — Ammar Fitness" },
      { name: "description", content: "Nutrition plans and meals for optimal performance and recovery." },
    ],
  }),
});

type Meal = {
  id: string;
  name: string;
  description: string;
  calories: number;
  macros: { protein: number; carbs: number; fats: number };
  recipe: string[];
  image: string;
};

const dietData: Record<string, Meal[]> = {
  breakfast: [
    {
      id: "b1",
      name: "شوفان بالبروتين والموز",
      description: "وجبة فطار غنية بالكربوهيدرات المعقدة والبروتين.",
      calories: 450,
      macros: { protein: 35, carbs: 55, fats: 10 },
      image: oatmealImg,
      recipe: [
        "نصف كوب شوفان",
        "سكوب واي بروتين",
        "نصف موزة",
        "ملعقة زبدة فول سوداني",
        "كوب حليب خالي الدسم",
        "يخلط الشوفان مع الحليب ويوضع في المايكرويف لمدة دقيقتين، ثم يضاف البروتين، الموز، وزبدة الفول السوداني."
      ]
    },
    {
      id: "b2",
      name: "بيض مسلوق مع توست أسمر",
      description: "وجبة كلاسيكية سريعة وسهلة.",
      calories: 350,
      macros: { protein: 25, carbs: 30, fats: 15 },
      image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&q=80",
      recipe: [
        "3 بيضات (2 كاملين + 1 بياض)",
        "شريحتين توست أسمر",
        "خضار مشكل (خيار، طماطم)",
        "تسلق البيض ويقدم مع التوست المحمص والخضار."
      ]
    }
  ],
  lunch: [
    {
      id: "l1",
      name: "صدور دجاج مع أرز أبيض وخضار",
      description: "وجبة الغداء المثالية لبناء العضلات.",
      calories: 550,
      macros: { protein: 50, carbs: 65, fats: 10 },
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&q=80",
      recipe: [
        "200 جرام صدور دجاج مشوية",
        "150 جرام أرز أبيض مطبوخ",
        "كوب خضار سوتيه (بروكلي، جزر)",
        "تتبل صدور الدجاج بالبهارات وتشوى. يقدم مع الأرز والخضار."
      ]
    },
    {
      id: "l2",
      name: "مكرونة باللحم المفروم (بولونيز صحي)",
      description: "وجبة غنية بالطاقة بعد التمرين.",
      calories: 600,
      macros: { protein: 45, carbs: 70, fats: 15 },
      image: "https://images.unsplash.com/photo-1622973536968-3ead9e780960?w=800&q=80",
      recipe: [
        "150 جرام لحم مفروم قليل الدسم",
        "150 جرام مكرونة مسلوقة",
        "صلصة طماطم طبيعية",
        "يعصج اللحم المفروم مع البصل والصلصة، ويضاف فوق المكرونة."
      ]
    }
  ],
  dinner: [
    {
      id: "d1",
      name: "جبنة قريش مع زيت زيتون وزعتر",
      description: "وجبة عشاء خفيفة وغنية ببروتين الكازين البطيء الامتصاص.",
      calories: 300,
      macros: { protein: 30, carbs: 10, fats: 15 },
      image: cottageCheeseImg,
      recipe: [
        "250 جرام جبنة قريش",
        "ملعقة زيت زيتون",
        "طماطم وخيار مقطع",
        "رشة زعتر",
        "تخلط المكونات وتقدم مع خبز أسمر خفيف."
      ]
    },
    {
      id: "d2",
      name: "تونة مع سلطة خضراء",
      description: "عشاء خفيف غني بالأوميجا 3 والبروتين.",
      calories: 250,
      macros: { protein: 28, carbs: 5, fats: 12 },
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
      recipe: [
        "علبة تونة مصفاة من الزيت",
        "سلطة خضراء (خس، خيار، طماطم، بصل)",
        "عصير ليمون",
        "تخلط التونة مع السلطة وعصير الليمون وتقدم."
      ]
    }
  ]
};

function MealCard({ meal }: { meal: Meal }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer transition-all hover:border-primary/50 hover:shadow-md h-full flex flex-col overflow-hidden">
          <div className="h-48 w-full overflow-hidden">
            <img src={meal.image} alt={meal.name} className="w-full h-full object-cover transition-transform hover:scale-105" />
          </div>
          <CardHeader>
            <CardTitle className="text-xl" dir="rtl">{meal.name}</CardTitle>
            <CardDescription dir="rtl">{meal.description}</CardDescription>
          </CardHeader>
          <CardContent className="mt-auto">
            <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
              <span className="flex items-center gap-1 font-semibold text-foreground">
                🔥 {meal.calories} kcal
              </span>
              <span>P: {meal.macros.protein}g</span>
              <span>C: {meal.macros.carbs}g</span>
              <span>F: {meal.macros.fats}g</span>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-md w-[95vw] p-6" dir="rtl">
        <DialogHeader>
          <div className="w-full h-56 rounded-lg overflow-hidden mb-4">
            <img src={meal.image} alt={meal.name} className="w-full h-full object-cover" />
          </div>
          <DialogTitle className="text-2xl font-bold text-right">{meal.name}</DialogTitle>
          <DialogDescription className="text-right">{meal.description}</DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-6">
          <div>
            <h4 className="font-semibold flex items-center gap-2 mb-3">
              <Utensils className="h-4 w-4 text-primary" /> 
              الماكروز والسعرات
            </h4>
            <div className="grid grid-cols-4 gap-2 text-center" dir="ltr">
              <div className="bg-surface rounded-lg p-2 border border-border">
                <div className="text-xs text-muted-foreground">سعرات</div>
                <div className="font-bold">{meal.calories}</div>
              </div>
              <div className="bg-surface rounded-lg p-2 border border-border">
                <div className="text-xs text-muted-foreground">بروتين</div>
                <div className="font-bold text-blue-500">{meal.macros.protein}g</div>
              </div>
              <div className="bg-surface rounded-lg p-2 border border-border">
                <div className="text-xs text-muted-foreground">كارب</div>
                <div className="font-bold text-green-500">{meal.macros.carbs}g</div>
              </div>
              <div className="bg-surface rounded-lg p-2 border border-border">
                <div className="text-xs text-muted-foreground">دهون</div>
                <div className="font-bold text-yellow-500">{meal.macros.fats}g</div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold flex items-center gap-2 mb-3">
              <Info className="h-4 w-4 text-primary" />
              الوصفة والمكونات
            </h4>
            <ul className="space-y-3">
              {meal.recipe.map((step, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-muted-foreground items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function DietPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-20" dir="rtl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <span className="inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
          النظام الغذائي
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight">
          وجبات <span className="text-gradient-red">صحية ومغذية</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          تغذيتك هي 70% من النتيجة. اختار الوجبات اللي تناسب هدفك سواء بناء عضلات أو حرق دهون. اضغط على أي وجبة عشان تشوف تفاصيلها.
        </p>
      </motion.div>

      <div className="mt-12">
        <Tabs defaultValue="breakfast" className="w-full" dir="rtl">
          <TabsList className="grid w-full max-w-md grid-cols-3 mx-auto mb-8 h-12 bg-surface">
            <TabsTrigger value="breakfast" className="text-lg font-medium">فطار</TabsTrigger>
            <TabsTrigger value="lunch" className="text-lg font-medium">غداء</TabsTrigger>
            <TabsTrigger value="dinner" className="text-lg font-medium">عشاء</TabsTrigger>
          </TabsList>
          
          <TabsContent value="breakfast" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              {dietData.breakfast.map(meal => (
                <MealCard key={meal.id} meal={meal} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="lunch" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              {dietData.lunch.map(meal => (
                <MealCard key={meal.id} meal={meal} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="dinner" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              {dietData.dinner.map(meal => (
                <MealCard key={meal.id} meal={meal} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
