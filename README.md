# 🍵 Kopi Parang Landing Page

Website landing page untuk Kopi Parang Coffee Shop yang menampilkan menu dan layanan dengan desain modern dan responsif.

## 📁 Struktur Project

```
kopi-parang-landing-page/
├── public/                      # Asset statis
│   ├── images/                  # Gambar produk dan branding
│   │   ├── Stock Photo/         # Foto-foto profesional produk
│   │   ├── coffee/              # Gambar menu kopi
│   │   ├── bites/               # Gambar menu makanan ringan
│   │   ├── kombucha/            # Gambar produk kombucha
│   │   └── non-coffee-and-mocktail/ # Gambar minuman non-kopi
│   └── favicon.ico              # Icon website
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── layout.tsx           # Layout utama aplikasi
│   │   ├── page.tsx             # Halaman beranda
│   │   ├── globals.css          # Style global dengan Tailwind CSS
│   │   ├── coffee/              # Halaman menu kopi
│   │   ├── bites/               # Halaman menu makanan
│   │   ├── kombucha-series/     # Halaman produk kombucha
│   │   └── non-coffee-and-mocktail/ # Halaman minuman non-kopi
│   ├── components/              # Komponen React yang dapat digunakan kembali
│   │   ├── AnimatedHeader.tsx   # Header dengan animasi
│   │   ├── AnimateOnLoad.tsx    # Komponen animasi saat loading
│   │   ├── AnimateOnScroll.tsx  # Komponen animasi saat scroll
│   │   ├── Card.tsx             # Komponen kartu
│   │   └── GridImage.tsx        # Komponen grid gambar
│   └── lib/
│       └── fonts.ts             # Konfigurasi font Google Fonts
├── eslint.config.mjs            # Konfigurasi ESLint
├── next.config.ts               # Konfigurasi Next.js
├── postcss.config.mjs           # Konfigurasi PostCSS
├── tsconfig.json                # Konfigurasi TypeScript
└── package.json                 # Dependencies dan scripts
```

## 🛠️ Tech Stack

### Frontend Framework

- **Next.js 15.3.4** - React framework dengan App Router, Server-Side Rendering (SSR), dan optimasi performa
- **React 19.0.0** - Library JavaScript untuk membangun user interface
- **TypeScript 5** - Superset JavaScript dengan static typing

### Styling & UI

- **Tailwind CSS 4.1.11** - Utility-first CSS framework untuk styling yang responsif
- **PostCSS 8.5.6** - Tool untuk transformasi CSS dengan plugins
- **Google Fonts** - JetBrains Mono dan Poppins untuk tipografi

### Animation & Interactivity

- **Lucide React 0.525.0** - Library icon SVG yang ringan dan modern
- **Motion 12.23.0** - Library animasi untuk React (successor Framer Motion)

### Development Tools

- **ESLint 9** - Linter untuk menjaga kualitas kode JavaScript/TypeScript
- **@types/node, @types/react, @types/react-dom** - Type definitions untuk TypeScript

## ⚡ Fitur Utama

### 🎨 Desain & UX

- **Responsive Design** - Optimasi untuk semua ukuran layar (mobile, tablet, desktop)
- **Dark Theme** - Tema gelap yang elegan sesuai branding coffee shop
- **Smooth Animations** - Animasi yang halus untuk loading dan scroll
- **Modern Typography** - Kombinasi JetBrains Mono dan Poppins fonts

### 🖼️ Optimasi Gambar

- **Next.js Image Optimization** - Kompresi otomatis dan lazy loading
- **WebP & AVIF Support** - Format gambar modern untuk performa terbaik
- **Blur Placeholder** - Placeholder saat gambar loading
- **Responsive Images** - Ukuran gambar yang menyesuaikan device

### 📱 Halaman Utama

- **Beranda** - Showcase "What We Serve" dengan grid interaktif
- **Coffee Menu** - Katalog lengkap menu kopi
- **Bites Menu** - Menu makanan ringan dan snacks
- **Kombucha Series** - Produk minuman fermentasi
- **Non-Coffee & Mocktail** - Minuman alternatif dan mocktail

### 🚀 Performance Features

- **Turbopack** - Build tool yang lebih cepat dari Webpack
- **Code Splitting** - Loading komponen sesuai kebutuhan
- **Image Optimization** - Kompresi dan format modern
- **Static Generation** - Pre-rendering untuk performa optimal

## 🚀 Cara Menjalankan Project

### Prerequisites

- Node.js 18.0.0 atau lebih baru
- npm, yarn, atau pnpm

### Installation

```bash
# Clone repository
git clone <repository-url>
cd kopi-parang-landing-page

# Install dependencies
npm install
# atau
yarn install
# atau
pnpm install
```

### Development

```bash
# Jalankan development server dengan Turbopack
npm run dev
# atau
yarn dev
# atau
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat hasil.

### Build & Production

```bash
# Build untuk production
npm run build

# Jalankan production server
npm run start
```

### Linting

```bash
# Jalankan ESLint untuk cek kualitas kode
npm run lint
```

## 📝 Konfigurasi

### Next.js Configuration (`next.config.ts`)

- **Turbopack** - Development server yang lebih cepat
- **Image Optimization** - Optimasi otomatis untuk semua gambar
- **Package Import Optimization** - Optimasi import untuk `lucide-react`
- **Compression** - Gzip compression untuk response yang lebih kecil

### TypeScript Configuration (`tsconfig.json`)

- **Path Mapping** - Alias `@/` untuk folder `src/`
- **Strict Mode** - Type checking yang ketat
- **Modern ES Features** - Target ES2017 dengan library modern

### Tailwind CSS

- **Utility-First** - Styling dengan class utilities
- **Responsive Design** - Breakpoints untuk mobile, tablet, desktop
- **Custom Colors** - Palet warna sesuai branding
- **Dark Mode** - Tema gelap sebagai default

## 🎯 Best Practices

### Code Organization

- **Component-based Architecture** - Komponen yang reusable dan modular
- **TypeScript** - Type safety untuk mencegah bugs
- **Custom Hooks** - Logic yang dapat digunakan kembali
- **Atomic Design** - Struktur komponen yang scalable

### Performance Optimization

- **Image Optimization** - WebP/AVIF format dengan lazy loading
- **Code Splitting** - Lazy loading komponen dan routes
- **Font Optimization** - Google Fonts dengan display swap
- **Bundle Optimization** - Tree shaking dan minification

### SEO & Accessibility

- **Semantic HTML** - Struktur HTML yang meaningful
- **Meta Tags** - SEO-friendly metadata
- **Alt Text** - Deskripsi gambar untuk screen readers
- **Keyboard Navigation** - Navigasi yang accessible

## 🔧 Customization

### Menambah Halaman Baru

1. Buat folder baru di `src/app/`
2. Tambahkan file `page.tsx`
3. Import komponen yang diperlukan
4. Update navigasi jika perlu

### Mengubah Styling

1. Edit file `src/app/globals.css` untuk global styles
2. Gunakan Tailwind classes untuk component-specific styling
3. Tambah custom CSS di Tailwind config jika diperlukan

### Menambah Animasi

1. Gunakan komponen `AnimateOnLoad` atau `AnimateOnScroll`
2. Customize dengan Motion library untuk animasi kompleks
3. Tambah CSS animations di globals.css

## 📦 Dependencies Utama

| Package      | Version | Fungsi                         |
| ------------ | ------- | ------------------------------ |
| next         | 15.3.4  | React framework dengan SSR/SSG |
| react        | 19.0.0  | Library untuk UI components    |
| tailwindcss  | 4.1.11  | Utility-first CSS framework    |
| typescript   | 5       | Static typing untuk JavaScript |
| lucide-react | 0.525.0 | Icon library modern            |
| motion       | 12.23.0 | Animation library              |

## 🤝 Contributing

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 License

Project ini dibuat untuk Kopi Parang Coffee Shop. Semua rights reserved.

## 📞 Contact

Untuk pertanyaan atau support, silakan hubungi tim development.

---

**Dibuat dengan ❤️ menggunakan Next.js dan Tailwind CSS**
