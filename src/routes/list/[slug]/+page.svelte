<!-- routes > list > page -->
<script>
    import '@scss/work/style.scss';
    import Top from '@comp/list/Top.svelte';
    import View from '@comp/list/View.svelte';

    export let data;
</script>

<Top { data } />
<View { data } />