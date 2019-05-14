export default {
    toggle: ({node: {toggled}}, duration = 300) => ({
        animation: {rotateZ: toggled ? 90 : 0},
        duration: duration
    }),
    drawer: (/* props */) => ({
        enter: {
            animation: 'slideDown',
            duration: 200
        },
        leave: {
            animation: 'slideUp',
            duration: 200
        }
    })
};
