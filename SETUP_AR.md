# ثيم سلة للملابس - دليل الإعداد والتثبيت

## 📋 نظرة عامة

ثيم احترافي لمتجر ملابس على منصة سلة، مستوحى من تصميم موقع hellstar.com، متوافق بنسبة 100% مع معايير منصة سلة ومحرك القوالب Twilight.

**المميزات الرئيسية:**
- ✅ متوافق تماماً مع منصة سلة
- ✅ محرك Twilight الحديث
- ✅ تصميم mobile-first
- ✅ ألوان احترافية (#050f2c، #ff1414)
- ✅ دعم اللغتين العربية والإنجليزية
- ✅ عناصر تحكم قابلة للتخصيص

---

## 🚀 المتطلبات الأساسية

قبل البدء، تأكد من توفر:

1. **Node.js** (الإصدار 14 أو أحدث)
2. **pnpm** (مدير الحزم)
3. **Salla CLI** - تثبيت عبر npm:
   ```bash
   npm install -g @salla.sa/cli
   ```
4. **حساب Salla Partners** - للاختبار والنشر
5. **حساب GitHub** - لمزامنة الثيم

---

## 📦 التثبيت والإعداد

### 1. استنساخ المستودع

```bash
git clone https://github.com/msto189/HOP.git
cd HOP
```

### 2. تثبيت الاعتماديات

```bash
pnpm install
```

### 3. بناء الثيم

للتطوير (مع مراقبة التغييرات):
```bash
pnpm run watch
```

للإنتاج (بناء نهائي):
```bash
pnpm run production
```

---

## 🎨 بنية الملفات

```
HOP/
├── src/
│   ├── assets/
│   │   ├── js/              # ملفات JavaScript
│   │   ├── styles/          # ملفات SCSS/CSS
│   │   └── images/          # الصور والرموز
│   ├── locales/
│   │   ├── ar.json          # الترجمات العربية
│   │   └── en.json          # الترجمات الإنجليزية
│   └── views/
│       ├── layouts/         # تخطيطات الصفحات
│       │   └── master.twig  # التخطيط الرئيسي
│       ├── components/      # المكونات القابلة لإعادة الاستخدام
│       └── pages/           # صفحات المتجر
├── public/                  # ملفات البناء (CSS/JS المترجمة)
├── twilight.json            # إعدادات الثيم الرئيسية
├── package.json             # اعتماديات المشروع
└── webpack.config.js        # إعدادات Webpack
```

---

## 🔧 الإعدادات الرئيسية

### ملف twilight.json

يحتوي على جميع إعدادات الثيم:

```json
{
  "name": {
    "ar": "ثيم الملابس",
    "en": "Clothing Theme"
  },
  "features": [
    "mega-menu",
    "fonts",
    "color",
    "breadcrumb",
    ...
  ],
  "settings": [
    // إعدادات قابلة للتخصيص
  ]
}
```

### الألوان المستخدمة

- **اللون الأساسي**: `#050f2c` (أزرق داكن)
- **اللون الثانوي**: `#ff1414` (أحمر)
- **الخلفية الفاتحة**: `#f7f7f7`
- **النص الداكن**: `#222222`

### الخطوط المستخدمة

- **Rubik** - للعناوين والنصوص الرئيسية
- **Mulish** - للنصوص الإضافية

---

## 👁️ معاينة الثيم

### استخدام Salla CLI

```bash
salla theme preview
```

أو الاختصار:
```bash
salla theme p
```

سيفتح الثيم في متصفحك على `http://localhost:3000`

### عبر Salla Partners Portal

1. اذهب إلى [Salla Partners Portal](https://salla.partners/)
2. اختر متجر تجريبي
3. اختر الثيم من القائمة
4. سيتم تثبيت الثيم تلقائياً

---

## 🎯 المكونات الرئيسية

### مكونات Salla Web Components المستخدمة

| المكون | الوصف |
|------|-------|
| `salla-search` | شريط البحث |
| `salla-cart-summary` | ملخص السلة |
| `salla-user-menu` | قائمة المستخدم |
| `salla-menu` | القائمة الرئيسية |
| `salla-slider` | عرض الصور المتحركة |
| `salla-product-card` | بطاقة المنتج |
| `salla-products-list` | قائمة المنتجات |
| `salla-newsletter` | نموذج الرسالة الإخبارية |
| `salla-social` | الوسائط الاجتماعية |
| `salla-payments` | طرق الدفع |
| `salla-add-product-button` | زر إضافة المنتج |

---

## 📝 التخصيص والتطوير

### تعديل الألوان

عدّل الألوان في `src/assets/styles/01-settings/global.scss`:

```scss
$primary-color: #050f2c;
$secondary-color: #ff1414;
$light-bg: #f7f7f7;
$dark-text: #222222;
```

### إضافة صفحة جديدة

1. أنشئ ملف `.twig` جديد في `src/views/pages/`
2. استخدم التخطيط الرئيسي:
   ```twig
   {% extends "layouts.master" %}
   {% block content %}
       <!-- محتوى الصفحة -->
   {% endblock %}
   ```

### تعديل الترجمات

عدّل الملفات في `src/locales/`:

**ar.json** (العربية):
```json
{
  "key": "القيمة العربية"
}
```

**en.json** (الإنجليزية):
```json
{
  "key": "English Value"
}
```

---

## 🧪 الاختبار

### اختبار محلي

```bash
# تشغيل خادم التطوير
pnpm run watch

# في نافذة أخرى
salla theme preview
```

### اختبار الإنتاج

```bash
# بناء نهائي
pnpm run production

# التحقق من الملفات المبنية
ls -la public/
```

---

## 📤 النشر على GitHub

### إعداد المستودع

```bash
# إضافة التغييرات
git add .

# تسجيل التغييرات
git commit -m "تحديث الثيم"

# دفع إلى GitHub
git push origin main
```

### ربط مع Salla Partners

1. اذهب إلى [Salla Partners Portal](https://salla.partners/)
2. اختر "إنشاء ثيم جديد"
3. اختر "ربط مع GitHub"
4. اختر المستودع: `msto189/HOP`
5. سيتم مزامنة الثيم تلقائياً

---

## ⚠️ استكشاف الأخطاء

### خطأ: "خطأ في تنسيق JSON"

**الحل:**
```bash
# تحقق من صحة twilight.json
python3 -m json.tool twilight.json

# إذا كان هناك خطأ، استخدم محرر JSON
# تأكد من عدم وجود trailing commas
```

### خطأ: "المكونات غير متاحة"

**الحل:**
```bash
# أعد تثبيت الاعتماديات
pnpm install

# امسح الذاكرة المؤقتة
pnpm store prune

# أعد التثبيت
pnpm install
```

### خطأ: "الصور لا تظهر"

**الحل:**
- تأكد من وجود الصور في `src/assets/images/`
- تحقق من المسارات في ملفات Twig
- استخدم `{{ asset('images/name.png') }}`

---

## 📚 موارد إضافية

- [توثيق Salla الرسمية](https://docs.salla.dev/)
- [دليل Twilight](https://docs.salla.dev/?nav=01HNFTD5Y5ESFQS3P9MJ0721VM)
- [Twig Template Engine](https://twig.symfony.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 🤝 الدعم والمساعدة

### قنوات الدعم

- **Telegram**: [@salladev](https://t.me/salladev)
- **GitHub Issues**: [مشاكل المشروع](https://github.com/msto189/HOP/issues)
- **Salla Support**: [مركز الدعم](https://salla.sa/support)

---

## 📄 الترخيص

هذا المشروع مرخص تحت رخصة MIT. انظر ملف [LICENSE.md](LICENSE.md) للتفاصيل.

---

## ✨ الإصدارات والتحديثات

### v1.0.0 (الإصدار الأول)
- ✅ إنشاء الثيم الأساسي
- ✅ تطبيق تصميم hellstar.com
- ✅ دعم اللغتين العربية والإنجليزية
- ✅ عناصر تحكم قابلة للتخصيص
- ✅ توافق كامل مع Salla و Twilight

---

**آخر تحديث:** أبريل 2026

**الحالة:** ✅ جاهز للاستخدام الفوري
