<template>
  <div>
    <nav
      class="lg:px-16 px-6 bg-white dark:bg-gray-900 shadow-md fixed w-full top-0 z-50 flex flex-wrap items-center lg:py-0 py-2"
    >
      <div class="flex-1 flex justify-between items-center">
        <a href="/" class="flex text-lg font-semibold">
          <img
            src="../assets/3.png"
            width="50"
            height="50"
            class="p-2 rounded-full"
            alt="keyan logo"
          />
          <div class="mt-3 text-red-600 font-vollkorn italic">KEYAN A.</div>
        </a>
      </div>
      <label for="menu-toggle" class="cursor-pointer lg:hidden block">
        <svg
          class="fill-current text-gray-900 dark:bg-gray-200"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input class="hidden" type="checkbox" id="menu-toggle" />
      <div
        class="hidden lg:flex lg:items-center lg:w-auto w-full font-vollkorn"
        id="menu"
      >
        <nav>
          <ul
            class="text-xl text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex lg:pt-0"
          >
            <li
              v-for="item in navItems"
              :key="item.id"
              class="py-2 lg:py-0 hover:animate-bounce"
            >
              <a
                :href="item.href"
                @click="scrollToSection(item.href)"
                :class="{
                  'text-red-600': currentSection === item.id,
                  'text-gray-600': currentSection !== item.id,
                }"
                class="hover:pb-4 hover:border-b-4 hover:border-yellow-400"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
    <!-- Sections for the page content -->
    <div id="about" class="section bg-gray-100 h-screen">
      <div>
        <div
          class="bg-rose-950 min-h-[30rem] sm:min-h-[45rem] md:min-h-[40rem] lg:min-h-[50rem] xl:min-h-[60rem]"
        >
          <div class="flex justify-center">
            <img
              src="../assets/Profile.jpg"
              class="mt-20 rounded-full shadow-md h-40 w-40 sm:h-48 sm:w-48 md:h-60 md:w-60 lg:h-72 lg:w-72 xl:h-80 xl:w-80 2xl:h-96 2xl:w-96 object-cover"
            />
          </div>
          <div>
            <div
              class="flex justify-center text-3xl text-gray-200 mt-3 font-dancingScript sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl"
            >
              Khian Abad.
            </div>
            <div
              class="flex justify-center text-sm text-gray-200 pb-3 font-vollkorn opacity-75"
            >
              Web Developer (Vue, React (Vite), Mysql )
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
    <div id="journey" class="section bg-gray-200 h-screen">
      My Journey Section
    </div>
    <div id="projects" class="section bg-gray-300 h-screen">
      Projects Section
    </div>
    <div id="certificates" class="section bg-gray-400 h-screen">
      Certificates Section
    </div>
    <div id="contact" class="section bg-gray-500 h-screen">Contact Section</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSection: "",
      navItems: [
        { id: "about", label: "About Me", href: "#about" },
        { id: "journey", label: "My Journey", href: "#journey" },
        { id: "projects", label: "Projects", href: "#projects" },
        { id: "certificates", label: "Certificates", href: "#certificates" },
        { id: "contact", label: "Contact", href: "#contact" },
      ],
    };
  },
  methods: {
    handleScroll() {
      const sections = document.querySelectorAll(".section");
      let activeSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
          activeSection = section.id;
        }
      });

      if (activeSection && activeSection !== this.currentSection) {
        this.currentSection = activeSection;
        history.pushState(null, "", `#${activeSection}`);
      }
    },
    scrollToSection(id) {
      const section = document.querySelector(id);
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth",
        });
        this.currentSection = id.slice(1);
        history.pushState(null, "", id);
      }
    },
    scrollToCurrentHash() {
      const hash = window.location.hash;
      if (hash) {
        this.scrollToSection(hash);
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("popstate", this.scrollToCurrentHash);
    this.scrollToCurrentHash();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("popstate", this.scrollToCurrentHash);
  },
};
</script>

<style>
#menu-toggle:checked + #menu {
  display: block;
}
</style>
