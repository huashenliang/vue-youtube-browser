import Vue from 'vue';
import Vuetify, {
    VApp, VNavigationDrawer, VList, VListItem, 
    VListItemAction, VIcon, VListItemContent,
    VSubheader, VAppBarNavIcon, VAppBar, VToolbarTitle, VSpacer,
    VRow, VTextField, VCol, VBtn, VTooltip, VContent

} from 'vuetify/lib';

Vue.use(Vuetify, {
    components: {
        VApp, VNavigationDrawer, VList, VListItem, 
        VListItemAction, VIcon, VListItemContent,
        VSubheader, VAppBarNavIcon, VAppBar, VToolbarTitle, VSpacer,
        VRow, VTextField, VCol, VBtn, VTooltip, VContent
    }
});

export default new Vuetify({
});
