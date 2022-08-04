import { createWebHashHistory, createRouter } from "vue-router"
import ExerciseOne from "@/views/ExerciseOne"
import ExerciseTwo from "@/views/ExerciseTwo"

const routes = [
  {
    path: "/",
    name: "ExerciseOne",
    component: ExerciseOne,
  },
  {
    path: "/exercise-two",
    name: "ExerciseTwo",
    component: ExerciseTwo,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router