<template>

    <v-card
        class="mx-auto"
        style="margin-bottom:1em"
        max-width=""
        outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">
            OVERLINE
          </div>
          <v-list-item-title class="text-h5 mb-1">
            Headline 5
          </v-list-item-title>
          <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar
            tile
            size="80"
            color="grey"
        ></v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn
            outlined
            rounded
            text
        >
          Button
        </v-btn>
      </v-card-actions>
    </v-card>

</template>
<script>
export default {
  name: "HomePage"
}
</script>

<style scoped>

</style>