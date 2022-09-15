module.exports ={
    preset:'@vue/cli-plugin-unit-jest',
    collectCoverage:true,
    transform: {
        "^.+\\.(js|jsx)$": "babel-jest",
    },
    transformIgnorePatterns: ['node_modules/(?!(@maersk-global)|(@material)|(lit)|(@lit)|(lit-element)|(lit-html)|(vee-validate)|(StreamBarcodeReader)|(stream-bar-code-reader)|(b-*))'],
    collectCoverageFrom:[
        'src/**/*.{js,vue}',
        '!scr/main.js',
    ]
}