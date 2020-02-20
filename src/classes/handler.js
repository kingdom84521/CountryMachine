class Handler {
    constructor() {
        this.features = []
    }

    get features() {
        return this.features
    }

    static subscribe( feature ) {
        this.features.push( feature )
    }

    static unsubscribe( feature ) {
        for ( index in this.features )
        {
            if ( feature === this.features[ index ] )
            {
                this.features.splice( index, 1 )
                break
            }
        }
    }

    static fire( data ) {
        for ( element of this.features )
        {
            element.notify( data )
        }
    }
}

module.exports = { Handler }