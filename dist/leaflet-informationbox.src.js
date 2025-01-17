/* 
 * Leaflet Information Box v0.0.4 - 2025-01-16 
 * 
 * Copyright 2025 Mustafa Genc 
 * eposta@mustafagenc.info 
 * https://mustafagenc.info 
 * 
 * Licensed under the MIT license. 
 * 
 * Demo: 
 * https://github.com/mustafagenc/leaflet-informationbox#readme 
 * 
 * Source: 
 * git+ssh://git@github.com/mustafagenc/leaflet-informationbox.git 
 * 
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        //AMD
        define(['leaflet'], factory);
    } else if (typeof module !== 'undefined') {
        // Node/CommonJS
        module.exports = factory(require('leaflet'));
    } else {
        // Browser globals
        if (typeof window.L === 'undefined')
            throw 'Leaflet must be loaded first';
        factory(window.L);
    }
})(function (L) {

    L.InformationBox = L.Control.extend({
        options: {
            position: 'bottomleft'
        },
        initialize: function (options, content) {
            this.innerHTML = content;
            L.Util.setOptions(this, options);
        },
        onAdd: function (map) {
            this.div = L.DomUtil.create('div', 'leaflet-informationbox-container');
            if (this.innerHTML) {
                this.div.innerHTML = this.innerHTML;
            }
            return this.div;
        },
        setContent: function (content) {
            this.getContainer().innerHTML = content;
        }
    });

    L.informationBox = function (options, content) {
        return new L.InformationBox(options, content);
    };

    return L.InformationBox;
});