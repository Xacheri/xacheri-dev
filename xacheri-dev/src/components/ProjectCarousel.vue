<template>
  <h3>Projects</h3>
  <div class="slider-container">
    <Transition name="project-slider" mode="out-in">

    </Transition>
  </div>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";
import XacheriDevScreenshot from "../assets/xacheri-dev-screen.png";
import FinancialCalculatorPicture from "../assets/calculator.png";
export default {
  name: 'ProjectCarousel',
  data() {
    return {
        projects: [
            {
                title: "OTC Tuition Calculator",
                description: "A tuition calculator built for Ozarks Technical Community College built using jQuery and a custom PHP API.",
                link: "https://web.otc.edu/calculator/",
                imagePath: FinancialCalculatorPicture,
                status: "Live - In Active Development",
            },
            {
                title: "Space Traders Game",
            },
            {
                title: "Xacheri",
                description: "A personal portfolio website built with Vue.js.",
                link: "https://github.com/Xacheri/xacheri-dev",
                imagePath: XacheriDevScreenshot,
                status: "Live",
            }
        ]
    }
  }
}
</script>

<style scoped>
/* Your component's CSS styles go here */
.slider-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.project-slider-enter-active,
.project-slider-leave-active {
  transition: all 1s;
}

.project-slider-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.project-slider-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.project-slider-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.project-slider-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
