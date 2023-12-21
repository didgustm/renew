<!-- routes > list > page -->
<script>
    import '/src/assets/scss/work/style.scss';
    import Top from '/src/components/list/Top.svelte';
    import View from '/src/components/list/View.svelte';

    export let data;
</script>

<Top { data } />
<View { data } />