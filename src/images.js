// Loads every image from src/assets/images so Vite bundles them correctly.
const files = import.meta.glob("./assets/images/*.{jpg,jpeg,png,svg,webp}", {
  eager: true,
  import: "default",
});

export const img = (name) => files[`./assets/images/${name}`];

// Logo sits in /public/logo.png (works with a custom Vite base path too)
export const logo = `${import.meta.env.BASE_URL}logo.png`;