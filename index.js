/**
 * Mount your Svelte component to the given DOM element by ID
 */
export default (mount, Cmp) => {
    if (!mount) {
        console.warn('Svelte-Mounter :: Bad mount:', mount);
        return;
    }
    const name = Cmp?.name;
    if (!name) {
        console.warn('Svelte-Mounter :: Bad component:', Cmp);
        return;
    }
    console.debug(`Svelte-Mounter :: mounting '${name}' to '#${mount}'`);
    document.addEventListener('DOMContentLoaded', () => {
        const target = document.getElementById(mount);
        if (!target) {
            console.warn('Svelte-Mounter :: Bad target:', Cmp);
            return;
        }
        new (function (config) { // must use function (instead of arrow)
            return new Cmp(config);
        })({target});
    });
};
