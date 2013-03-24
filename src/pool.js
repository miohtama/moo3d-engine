(function() {

    /**
     * Generic object pool for Javascript.
     *
     * @param allocator {Function} return new empty elements
     */
    function Pool(allocator) {
        // Start with one element
        this.allocator = allocator;
        this.elems[0] = this.allocator();
    }

    Pool.prototype = {

        /** How fast we grow */
        expandFactor : 0.2,

        elems : [],

        /** List of discarded element indexes */
        freeElems : [],

        /**
         * @return {[type]} [description]
         */
        create : function() {

            if(!this.freeElems.length) {
                expand();
            }

            // See if we have any allocated elements to reuse
            if(this.freeElems.length) {
                var index = freeElems.pop();
                return this.elems[index];
            }

            expand();

        },

        /**
         * Make pool bigger
         *
         */
        expand : function() {
            var oldSize = this.elems.length;

            // Else expand our pool
            this.elems.length = this.elems.length * this.expandFactor;

            for(var i=oldSize; i<this.elems.length; i++) {
                this.elems[i] = this.allocator();
                this.freeElems.push(i);
            }
        },

        discard : function(n) {
            this.freeList.append(n);
        },

        get : function(n) {
            return this.elems[n];
        }


    };

});