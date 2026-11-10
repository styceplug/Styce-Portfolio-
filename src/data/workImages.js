const workImages = import.meta.glob('../assets/work/**/*.{webp,png,PNG,jpg,jpeg,JPG,JPEG}', {
  eager: true,
  import: 'default',
  query: '?url',
})

export const getWorkImage = (path) => workImages[`../assets/work/${path}`]
