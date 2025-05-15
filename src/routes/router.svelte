<script lang="ts">
    import { Route, Router } from "@wjfe/n-savant";
    import DocsRouter from "@/routes/(docs)/router.svelte";
</script>

<Router>
    <Route key="root" path="*">
        <DocsRouter />
    </Route>
</Router>
