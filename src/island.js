/* jshint es5: true */

var THREE = require('three');
var _ = require('underscore');

(function() {

    "use strict";

    function Island() {
        THREE.Object3D.call(this);

        // Set initial allocation
        this.clear(16, 16, 16);
    }

    Island.prototype = Object.create(THREE.Object3D.prototype);

    _.extend(Island.prototype, {

        /**
         * 3D array of moxels in this island.
         *
         * Arrays in order of x, y, z.
         */
        moxels : null,

        /** Width in moxels */
        get width() {
            return moxels.length;
        },

        /** Height in moxels */
        get height() {
            return moxels[0].length;
        },

        /** Depth in moxels */
        get depth() {
            return moxels[0][0].length;
        },

        /**
         * Initial allocation of moxel space.
         *
         * @param  {[type]} width  [description]
         * @param  {[type]} height [description]
         * @param  {[type]} depth  [description]
         * @return {[type]}        [description]
         */
        clear : function(width, height, depth) {

            this.moxels = [];
            this.moxels.length = width;
            for(var i=0; i<width; i++) {
                this.moxels[i] = [];
                this.moxels[i].length = height;
                for(var l=0; l<height; l++) {
                    this.moxels[i][l] = [];
                    this.moxels.length = depth;
                }
            }
        },

        expand : function(width, height, depth) {

        }

    });

})();