plugin.userjs.register('outdentAtOrigin', {
    before_nodeView_outdent(nv) {
        nv.$node.nextAll('.node').each(function() {
            this.nv.indent();
        });
    }
});
