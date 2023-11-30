<!-- components > header -->
<script>
    import mail from '@images/mail.png';
    export let w
</script>

<header class="header section">
    <div class="inner">
        <h1 class="logo">
            <a href="/">Home</a>
        </h1>

        <nav>
            <ul>
                <li>
                    <a href="mailto:bw03306@gmail.com" class="buttons">
                        {#if w > 768}
                        bw03306@gmail.com
                        {:else}
                        <img src="{ mail }" alt="">
                        {/if}
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</header>