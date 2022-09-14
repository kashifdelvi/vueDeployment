
import RootComponent from "../container/RootComponent.vue";
import FoodComponent from "../container/FoodComponent.vue";
import RestuarantDetail from "../components/RestuarantDetail"
import RestuarantListContainer from "../components/RestuarantListContainer";

const routes = [
    {
        path:'/vueDeployment',
        name:'landing',
        components:{ default: RootComponent}
    },
    {
        path:'/vueDeployment/food',
        name:'food',
        component:FoodComponent
    },
    {path:'/vueDeployment/resturants/:timingCode',name:'resturants',component:RestuarantListContainer, props: true},
    {path:'/vueDeployment/resturant/:code',name:'foodDetails',component:RestuarantDetail, props: true},
    {path:'/vueDeployment/:catchAll(.*)',component:<h1>Not a valid link</h1> }

]

export {routes};
