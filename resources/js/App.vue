<!--<template>-->
<!--    -->
<!--</template>-->

<!--<script>-->
<!--    export default {-->
<!--        name: "App.vue"-->
<!--    }-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->

<template>
    <div>
        <v-app>
            <!--        <v-alert type="warning" :value="true">-->
            <!--            Vuetify was installed properly-->
            <!--        </v-alert>-->

            <!--        <v-avatar color="success">HM</v-avatar>-->
            <v-card
                class="mx-auto"
                max-width="344"
                outlined
            >
                <v-list-item three-line>
                    <v-list-item-content>
                        <div class="overline mb-4">OVERLINE</div>
                        <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-avatar
                        tile
                        size="80"
                        color="black"
                    ></v-list-item-avatar>
                </v-list-item>

                <v-card-actions>
                    <v-btn text>Button</v-btn>
                    <v-btn text>Button</v-btn>
                </v-card-actions>
            </v-card>

            <v-alert
                border="top"
                color="red lighten-2"
                dark
            >
                I'm an alert with a top border and red color
            </v-alert>

            <v-alert
                border="right"
                color="blue-grey"
                dark
            >
                I'm an alert with a right border and blue-grey color
            </v-alert>
            <v-alert
                border="bottom"
                color="pink darken-1"
                dark
            >
                I'm an alert with a bottom border and pink color
            </v-alert>
            <v-alert
                border="left"
                color="indigo"
                dark
            >
                I'm an alert with a border left type info
            </v-alert>

            <v-breadcrumbs
                :items="items"
                divider="-"
            ></v-breadcrumbs>

            <v-breadcrumbs
                :items="items"
                divider="."
            ></v-breadcrumbs>
        </v-app>
    </div>
</template>

<script>
    export default {
        name: "App.vue",
        data: () => ({
            items: [
                {
                    text: 'Dashboard',
                    disabled: false,
                    href: 'breadcrumbs_dashboard',
                },
                {
                    text: 'Link 1',
                    disabled: false,
                    href: 'breadcrumbs_link_1',
                },
                {
                    text: 'Link 2',
                    disabled: true,
                    href: 'breadcrumbs_link_2',
                },
            ],
        }),
    };
</script>

