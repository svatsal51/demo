var config = {
    "waitSeconds": 0,
    "map": {
        "*": {
        }
    },
    paths: {
        'gsap': 'js/gsap.min',
        'ScrollTrigger': 'js/ScrollTrigger.min'
    },
    "shim":{
        "js/theme" : ["jquery"],
        'gsap': {
            exports: 'gsap'
        },
        'ScrollTrigger': {
            exports: 'ScrollTrigger'
        }
    },
    "deps":[
        "js/theme"
    ]
};
