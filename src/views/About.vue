<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "about",
  components: {},
  metaInfo: {
    title: "About",
    titleTemplate: "%s ← Ketosis",
    meta: [
      { name: "description", content: "About Ketosis" }

      // OpenGraph data (Most widely used)
      // {property: 'og:title', content: 'My Page Title ← My Site'},
      // {property: 'og:site_name', content: 'My Site'},
      // // The list of types is available here: http://ogp.me/#types
      // {property: 'og:type', content: 'website'},
      // // Should the the same as your canonical link, see below.
      // {property: 'og:url', content: 'https://www.my-site.com/my-special-page'},
      // {property: 'og:image', content: 'https://www.my-site.com/my-special-image.jpg'},
      // // Often the same as your meta description, but not always.
      // {property: 'og:description', content: 'I have things here on my site.'},

      // Twitter card
      // {name: 'twitter:card', content: 'summary'},
      // {name: 'twitter:site', content: 'https://www.my-site.com/my-special-page'},
      // {name: 'twitter:title', content: 'My Page Title ← My Site'},
      // {name: 'twitter:description', content: 'I have things here on my site.'},
      // {name: 'twitter:creator', content: '@alligatorio'},
      // {name: 'twitter:image:src', content: 'https://www.my-site.com/my-special-image.jpg'},

      // Google / Schema.org markup:
      // {itemprop: 'name', content: 'My Page Title ← My Site'},
      // {itemprop: 'description', content: 'I have things here on my site.'},
      // {itemprop: 'image', content: 'https://www.my-site.com/my-special-image.jpg'},
    ]
    // link: [
    //   {rel: 'canonical', href: 'https://www.my-site.com/my-special-page'}
    // ]
  }
};
</script>
