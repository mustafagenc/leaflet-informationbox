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

    L.InfoBox = L.Control.extend({
        options: {
            position: 'bottomleft'
        },
        initialize: function (options, content) {
            this.innerHTML = content;
            L.Util.setOptions(this, options);
        },
        onAdd: function (map) {
            this.div = L.DomUtil.create('div', 'leaflet-infobox-container');
            if (this.innerHTML) {
                this.div.innerHTML = this.innerHTML;
            }
            return this.div;
        },
        setContent: function (content) {
            this.getContainer().innerHTML = content;
        }
    });

    L.infoBox = function (options) {
        return new L.InfoBox(options);
    };

    L.infoBox = function (options, content) {
        return new L.InfoBox(options, content);
    };

    return L.InfoBox;
});