<template>
  <Menubar :model="menuItems" />
</template>

<script>
  import Menubar from 'primevue/menubar'

  export default {
    components: {
      Menubar,
    },
    data() {
      return {
        menuItems: [
          {
            label: '',
            icon: 'pi pi-home',
            command: () => this.$router.push('/'),
          },
          {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => this.$router.push('/upload'),
          },
          {
            label: 'Builder',
            icon: 'pi pi-plus',
            command: () => this.$router.push('/builder'),
          },
          {
            label: 'Editor',
            icon: 'pi pi-pencil',
            command: () => this.$router.push('/editor'),
          },
          {
            label: 'Comparator',
            icon: 'pi pi-eye',
            command: () => this.$router.push('/comparator'),
          },
        ],
      }
    },
  }
</script>
