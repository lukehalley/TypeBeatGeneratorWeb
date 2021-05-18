// Vue Imports
import {createApp} from 'vue'
import App from './App.vue'
import router from './routes/router.js'
import store from './store/index'

// AWS Amplify Imports.
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import {applyPolyfills, defineCustomElements,} from '@aws-amplify/ui-components/loader';

// Base Components
import BaseCard from './components/ui/BaseCard'
import BaseButton from './components/ui/BaseButton'
import BaseBadge from './components/ui/BaseBadge'
import BaseSpinner from './components/ui/BaseSpinner'
import BaseDialog from "@/components/ui/BaseDialog";

// Global CSS
import './index.css';

Amplify.configure(aws_exports);
applyPolyfills().then(() => {
    defineCustomElements(window);
});

const app = createApp(App)

app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-badge', BaseBadge)
app.component('base-spinner', BaseSpinner)
app.component('base-dialog', BaseDialog)

app.use(router);
app.use(store);

app.mount('#app')