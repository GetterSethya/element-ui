<script lang="ts">
    import LoadingIndicator from "../lib/components/ui/loading-indicator/";
</script>

<div class="flex px-20 flex-col gap-10">
    <div class="flex flex-col gap-2.5">
        <span>Circular</span>
        <div class="flex flex-col gap-2.5">
            <div class="flex items-center gap-2.5">
                <LoadingIndicator.Circular size="sm" />
                <LoadingIndicator.Circular size="md" />
                <LoadingIndicator.Circular size="lg" />
                <LoadingIndicator.Circular size="xl" />
                <LoadingIndicator.Circular size="xxl" />
            </div>
            <div class="flex items-center gap-2.5">
                <LoadingIndicator.Circular color="default" />
                <LoadingIndicator.Circular color="primary" />
                <LoadingIndicator.Circular color="secondary" />
                <LoadingIndicator.Circular color="tertiary" />
                <LoadingIndicator.Circular color="error" />
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-2.5">
        <span>Circular gradient</span>
        <div class="flex flex-col gap-2.5">
            <div class="flex items-center gap-2.5"></div>
        </div>
    </div>
    <div class="flex flex-col gap-2.5">
        <span>Fan</span>
        <div class="flex flex-col gap-2.5">
            <div class="flex items-center gap-2.5">
                <LoadingIndicator.Fan size="sm" />
                <LoadingIndicator.Fan size="md" />
                <LoadingIndicator.Fan size="lg" />
                <LoadingIndicator.Fan size="xl" />
                <LoadingIndicator.Fan size="xxl" />
            </div>
            <div class="flex items-center gap-2.5">
                <LoadingIndicator.Fan color="default" />
                <LoadingIndicator.Fan color="primary" />
                <LoadingIndicator.Fan color="secondary" />
                <LoadingIndicator.Fan color="tertiary" />
                <LoadingIndicator.Fan color="error" />
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-2.5">
        <span>Dot</span>
        <div class="flex flex-col gap-2.5">
            <div class="flex items-center gap-2.5">
                <LoadingIndicator.Dot size="sm" />
                <LoadingIndicator.Dot size="md" />
                <LoadingIndicator.Dot size="lg" />
                <LoadingIndicator.Dot size="xl" />
                <LoadingIndicator.Dot size="xxl" />
            </div>
            <div class="flex items-center gap-2.5">
                <LoadingIndicator.Dot color="default" />
                <LoadingIndicator.Dot color="primary" />
                <LoadingIndicator.Dot color="secondary" />
                <LoadingIndicator.Dot color="tertiary" />
                <LoadingIndicator.Dot color="error" />
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-2.5">
        <span>dot wave</span>
        <div class="flex flex-col gap-2.5">
            <div class="flex items-center gap-2.5">
                <LoadingIndicator.DotWave size="sm" />
                <LoadingIndicator.DotWave size="md" />
                <LoadingIndicator.DotWave size="lg" />
                <LoadingIndicator.DotWave size="xl" />
                <LoadingIndicator.DotWave size="xxl" />
            </div>
            <div class="flex items-center gap-2.5">
                <LoadingIndicator.DotWave color="default" />
                <LoadingIndicator.DotWave color="primary" />
                <LoadingIndicator.DotWave color="secondary" />
                <LoadingIndicator.DotWave color="tertiary" />
                <LoadingIndicator.DotWave color="error" />
            </div>
        </div>
    </div>
</div>
