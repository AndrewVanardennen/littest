import resolve from '@rollup/plugin-node-resolve'

export default [
    {
        input: ['src/app.js', 'src/my-firstelement.js'],
        output: {
            dir: 'www',
            format:'es'
        },
        plugins: [
            resolve()
        ]
    }

]