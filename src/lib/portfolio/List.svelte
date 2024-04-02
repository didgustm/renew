<script>
    import { register } from 'swiper/element/bundle'
    import { thumnails } from '@js/thumnail'
    import Fa from 'svelte-fa'
    import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

    export let data;
    let newArr = [];
    for(let i = 0; i < data.lists.length; i ++){
        newArr.push(data.lists[i]);
    }

    register();
</script>

<div class="grid">
    <swiper-container
        slides-per-view={`auto`}
        space-between={40}
        speed={700}
        scrollbar={true}
    >
        {#each newArr as list, idx}
        <swiper-slide>
            <button class="box box{idx+1}">
                <div class="img">
                    <img src="{ thumnails[idx] }" alt="">
                </div>
                <div class="site_info">
                    <p class="name">{ list.meta.title }</p>
                    <p class="hide_txt coment">{ list.meta.caption }</p>
                    <p class="hide_txt type">{ list.meta.type }</p>
                    <span class="icon">
                        <Fa icon={faChevronRight} size="1.5x" />
                    </span>
                </div>
                <div class="bg"></div>
            </button>
        </swiper-slide>
        {/each}
        <swiper-slide>
            <!-- <button class="box">
                <div class="img">
                    <img src="{ isabang3 }" alt="">
                </div>
                <div class="site_info">
                    <p class="name">이사방3</p>
                    <p class="hide_txt coment">리얼 이사 매칭 비교견적 서비스</p>
                    <p class="hide_txt type">Landing</p>
                    <span class="icon">
                        <Fa icon={faChevronRight} size="1.5x" />
                    </span>
                </div>
                <div class="bg"></div>
            </button> -->
        </swiper-slide>
    </swiper-container>
</div>