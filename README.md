# Three.js Playground

A modern, interactive playground for experimenting with Three.js, React Three Fiber, and other 3D web technologies. This project showcases various 3D rendering techniques, animations, and interactive components using the latest web technologies.

![Three.js Playground](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## 🚀 Features

- **3D Rendering** with Three.js and React Three Fiber
- **Interactive 3D Models** with Spline integration
- **Particle Systems** for stunning visual effects
- **Responsive Design** that works on all devices
- **Dark/Light Mode** with persistent theme settings
- **Modern UI Components** built with Tailwind CSS
- **State Management** with Zustand
- **Smooth Animations** with Framer Motion

## 🛠 Tech Stack

### Core Technologies
- [Next.js 14](https://nextjs.org/) - React framework for server-rendered applications
- [React 19](https://react.dev/) - Frontend library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

### 3D & Graphics
- [Three.js](https://threejs.org/) - 3D library for the web
- [@react-three/fiber](https://github.com/pmndrs/react-three-fiber) - React renderer for Three.js
- [@react-three/drei](https://github.com/pmndrs/drei) - Useful helpers for React Three Fiber
- [@splinetool/react-spline](https://spline.design/) - Interactive 3D scenes and animations
- [@react-three/postprocessing](https://github.com/pmndrs/react-postprocessing) - Post-processing effects

### State Management & Utilities
- [Zustand](https://github.com/pmndrs/zustand) - State management
- [Immer](https://immerjs.github.io/immer/) - Immutable state with a mutable API
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Math.js](https://mathjs.org/) - Math library for advanced calculations

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/threejs-playground.git
   cd threejs-playground
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Project Structure

```
src/
├── components/         # Reusable components
│   ├── planet-earth/  # 3D Earth component
│   ├── poly-sphere/   # Polygon sphere component
│   └── three-test/    # Three.js test components
├── store/             # State management
│   └── uiTheme.store.ts # Theme management
└── styles/            # Global styles
```

## 🌟 Features in Action

### 3D Earth Component
Interactive 3D Earth with realistic textures and lighting effects.

### Polygon Sphere
Custom polygon sphere with dynamic geometry and materials.

### Theme Toggle
Switch between light and dark modes with persistent settings using Zustand and localStorage.

### Interactive Examples
Various Three.js examples demonstrating different rendering techniques.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Three.js](https://threejs.org/) - For making 3D on the web accessible
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) - For the amazing React bindings
- [Spline](https://spline.design/) - For the interactive 3D components
- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first CSS framework
