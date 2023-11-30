<!-- components > list > view -->
<script>
    import { views } from '@js/view';
    export let data

    const title = data.currentRoute.slice(6);
    let num = views.filter((x, index) => {
        if(x.indexOf(title) !== -1){
            return index
        };
    });

</script>

<section class="section view">
    <div class="area">
        <div class="container">
            <div class="view_img">
                <img src="{ num[0] }" alt="">
            </div>
        </div>
    </div>
</section>