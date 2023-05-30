import { createApp } from 'vue'
import App from './App.vue'
import MyFirstPlugin from "./MyFirstPlugin"

const app = createApp( App )
app.use( MyFirstPlugin )
app.mount( '#rd-appstore' )