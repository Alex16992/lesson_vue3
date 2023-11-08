import { createApp } from 'vue'
import  App from './App'
import components from '@/components/UI'
import router from '@/router/router'
import VIntersection from '@/directives/VIntersection'
import directives from '@/directives'

const app = createApp(App)
components.forEach(component => {
    app.component(component.name, component)
})
directives.forEach(directive => {
    app.directive(directive.name, directive)
})
app.directive('intersection', VIntersection)
app
    .use(router)
    .mount('#app')

