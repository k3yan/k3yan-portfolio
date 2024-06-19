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
          <div class="mt-3 text-rose-700 font-vollkorn italic">KEYAN A.</div>
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
                  'text-rose-600': currentSection === item.id,
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
    <div id="about" class="section bg-gray-100 max-h-screen">
      <div>
        <!--Main-->
        <div
          class="bg-rose-950 min-h-[30rem] sm:min-h-[45rem] md:min-h-[40rem] lg:min-h-[50rem] xl:min-h-[60rem]"
        >
          <!--Profile-->
          <div class="flex justify-center">
            <img
              src="../assets/Profile.jpg"
              class="mt-40 rounded-full shadow-md h-40 w-40 sm:h-48 sm:w-48 md:h-60 md:w-60 lg:h-72 lg:w-72 xl:h-80 xl:w-80 2xl:h-96 2xl:w-96 object-cover"
            />
          </div>
          <!--Name-->
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
          <!--Content-->
          <div>
            <!-- component -->
            <div class="flex items-center justify-center px-12">
              <div
                class="max-w-md rounded-3xl p-px bg-gradient-to-b from-red-300 to-rose-900 dark:from-gray-200 dark:to-red-800 mb-2"
              >
                <div
                  class="rounded-[calc(1.5rem-1px)] p-8 bg-white dark:bg-gray-900"
                >
                  <p
                    class="text-gray-700 dark:text-gray-300 font-vollkorn text-xl"
                  >
                    I am an active, ambitious individual who has developed a
                    mature and responsible approach to whatever assignment or
                    situation that I am faced with.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="journey" class="section bg-gray-200 h-screen">
      <!--Journey-->
      <div
        class="flex h-screen items-center justify-center bg-white px-6 md:px-60"
      >
        <div class="space-y-6 border-l-2 border-dashed">
          <div class="relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
            <div class="ml-6">
              <h4 class="font-bold text-blue-500">College Life.</h4>
              <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor
                aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in,
                lobortis ante.
              </p>
              <span class="mt-1 block text-sm font-semibold text-blue-500"
                >2020 - 2024</span
              >
            </div>
          </div>
          <div class="relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
            <div class="ml-6">
              <h4 class="font-bold text-blue-500">Capstone Journey.</h4>
              <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis
                iaculis, feugiat risus quis, aliquet urna. Quisque fringilla
                mollis risus, eu pulvinar dolor.
              </p>
              <span class="mt-1 block text-sm font-semibold text-blue-500"
                >2023 - 2024</span
              >
            </div>
          </div>
          <div class="relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
            <div class="ml-6">
              <h4 class="font-bold text-blue-500">
                On-The-Job Training/Intern.
              </h4>
              <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis
                iaculis, feugiat risus quis, aliquet urna. Quisque fringilla
                mollis risus, eu pulvinar dolor
              </p>
              <span class="mt-1 block text-sm font-semibold text-blue-500"
                >2024</span
              >
            </div>
          </div>
          <div class="relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
            <div class="ml-6">
              <h4 class="font-bold text-blue-500">Web Developer.</h4>
              <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis
                iaculis, feugiat risus quis, aliquet urna. Quisque fringilla
                mollis risus, eu pulvinar dolor
              </p>
              <span class="mt-1 block text-sm font-semibold text-blue-500"
                >2024</span
              >
            </div>
          </div>
        </div>
      </div>
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
